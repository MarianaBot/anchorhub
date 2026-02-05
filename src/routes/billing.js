const express = require('express');
const router = express.Router();
const smartbill = require('../services/smartbill');

/**
 * Endpoint to trigger invoice creation after a successful payment
 * POST /api/billing/issue-invoice
 */
router.post('/issue-invoice', async (req, res) => {
  const { paymentId, clientData, items } = req.body;

  try {
    // 1. Validate payment (this would connect to a Payment Service)
    console.log(`Processing invoice for payment: ${paymentId}`);

    // 2. Prepare data for SmartBill
    const invoiceData = {
      clientName: clientData.name,
      clientCui: clientData.cui,
      clientAddress: clientData.address,
      clientEmail: clientData.email,
      series: 'AHUB', // Anchorahub series
      products: items.map(item => ({
        name: item.description,
        price: item.amount,
        quantity: item.qty || 1,
        vat: 19
      }))
    };

    // 3. Call SmartBill Service
    const result = await smartbill.createInvoice(invoiceData);

    // 4. Return success with invoice details (series, number)
    res.status(201).json({
      success: true,
      message: 'Invoice issued successfully',
      invoiceNumber: result.number,
      series: result.series,
      url: result.url // Link to invoice if returned by SB
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * Get PDF link for an invoice
 * GET /api/billing/pdf/:series/:number
 */
router.get('/pdf/:series/:number', async (req, res) => {
  const { series, number } = req.params;
  try {
    const pdfBuffer = await smartbill.getInvoicePdf(series, number);
    res.contentType('application/pdf');
    res.send(pdfBuffer);
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
});

module.exports = router;
