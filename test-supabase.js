import { ahubService } from './src/services/ahubEngine.js';

async function testConnection() {
  console.log('--- TEST SUPABASE CONNECTION ---');
  try {
    // Încercăm să citim din tabela tenants (va eșua dacă tabelele nu sunt create, dar va confirma conexiunea)
    const tenants = await ahubService.getTenants();
    console.log('✅ Conexiune reușită!');
    console.log('Date găsite:', tenants);
  } catch (error) {
    if (error.code === '42P01') {
      console.log('✅ Conexiune reușită (dar tabelele nu există încă în schema publică).');
      console.log('Mesaj eroare așteptat:', error.message);
    } else {
      console.error('❌ Eroare de conexiune sau chei invalide:', error);
    }
  }
}

testConnection();
