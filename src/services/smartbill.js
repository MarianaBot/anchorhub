const axios = require('axios');

/**
 * SmartBill Integration Service (Sandbox/Test Environment)
 * Following Business Plan for Anchorahub
 */
class SmartBillService {
  constructor() {
    // These should be moved to environment variables in production
    // Using test credentials from documentation if available or placeholders for sandbox
    this.username = process.env.SMARTBILL_USER || 'demo';
    this.token = process.env.SMARTBILL_TOKEN || 'demo_token';
    this.cui = process.env.SMARTBILL_CUI || 'RO12345678';
    this.baseUrl = 'https://ws.smartbill.ro/SBORO/api';
  }

  /**
   * Generates authorization header for SmartBill API
   * Format: base64(username:token)
   */
  getAuthHeader() {
    const auth = Buffer.from(`${this.username}:${this.token}`).toString('base64');
    return `Basic ${auth}`;
  }

  /**
   * Emit an invoice automatically
   * @param {Object} invoiceData - Data for the invoice
   * @returns {Promise<Object>} - API response
   */
  async createInvoice(invoiceData) {
    try {
      const payload = {
        client: {
          name: invoiceData.clientName,
          vatCode: invoiceData.clientCui || '',
          address: invoiceData.clientAddress || '',
          email: invoiceData.clientEmail || '',
        },
        seriesName: invoiceData.series || 'TEST',
        isDraft: false,
        products: invoiceData.products.map(p => ({
          name: p.name,
          code: p.code || '',
          isStock: false,
          measuringUnitName: 'buc',
          currency: 'RON',
          quantity: p.quantity || 1,
          price: p.price,
          vatPercentage: p.vat || 19,
          isTaxIncluded: true
        }))
      };

      const response = await axios.post(`${this.baseUrl}/invoice`, payload, {
        headers: {
          'Authorization': this.getAuthHeader(),
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      return response.data;
    } catch (error) {
      console.error('SmartBill Error:', error.response ? error.response.data : error.message);
      throw new Error(`SmartBill Invoice Generation Failed: ${error.message}`);
    }
  }

  /**
   * Get PDF for a generated invoice
   */
  async getInvoicePdf(seriesName, number) {
    try {
      const response = await axios.get(`${this.baseUrl}/invoice/pdf?cui=${this.cui}&seriesName=${seriesName}&number=${number}`, {
        headers: {
          'Authorization': this.getAuthHeader(),
          'Accept': 'application/octet-stream'
        },
        responseType: 'arraybuffer'
      });
      return response.data;
    } catch (error) {
      throw new Error(`SmartBill PDF Retrieval Failed: ${error.message}`);
    }
  }
}

module.exports = new SmartBillService();
