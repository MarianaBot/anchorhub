import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  const [tenant] = useState({
    name: "Traian Mentor",
    primaryColor: "#2c3e50", 
    gridId: "1", 
    supportLink: "https://wa.me/40722252273"
  });

  const [view, setView] = useState('login'); 

  return (
    <SafeAreaView style={styles.container}>
      {view === 'login' ? (
        <View style={styles.fullCenter}>
          <View style={[styles.header, { backgroundColor: tenant.primaryColor }]}>
            <Text style={styles.gridSymbol}>{tenant.gridId}</Text>
            <Text style={styles.brandName}>{tenant.name}</Text>
          </View>
          
          <View style={styles.authBox}>
            <Text style={styles.welcomeText}>Onorăm prezența ta în călătoria descoperirii.</Text>
            <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#999" />
            <TextInput 
              style={styles.input} 
              placeholder="Cuvânt de acces" 
              secureTextEntry 
              placeholderTextColor="#999" 
              onChangeText={(text) => {
                if(text === 'admin123') setView('dashboard');
              }}
            />
            
            <TouchableOpacity 
              style={[styles.mainButton, { backgroundColor: tenant.primaryColor }]}
              onPress={() => setView('dashboard')}
            >
              <Text style={styles.buttonText}>PĂȘEȘTE ÎNĂUNTRU ✨</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => Linking.openURL(tenant.supportLink)}>
            <Text style={styles.helpLink}>Ai nevoie de sprijin tehnic? (WAP)</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.dashboard}>
          <Text style={styles.dashTitle}>⚓ Dashboard Administrator</Text>
          
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Total Încasări</Text>
            <Text style={styles.statValue}>1.250 RON</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Gestiune Cursuri</Text>
            <View style={styles.courseItem}>
              <Text style={styles.courseName}>Curs: Arta Conexiunii</Text>
              <Text style={styles.courseMeta}>5 Module | 3 Abonați</Text>
              <TouchableOpacity style={styles.editBtn}>
                <Text style={styles.editBtnText}>Editează Module</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.cnvBox}>
            <Text style={styles.cnvTitle}>Notificare Expirare (Previzualizare):</Text>
            <Text style={styles.cnvContent}>
              "Cu drag te anunțăm că mai sunt 15 zile până ajutorul tău va fi vital pentru a continua această minunată călătorie..."
            </Text>
          </View>

          <TouchableOpacity style={styles.backBtn} onPress={() => setView('login')}>
            <Text style={styles.backText}>Deconectare</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f7f9' },
  fullCenter: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  header: { width: '100%', height: 180, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: -40, zIndex: 1 },
  gridSymbol: { fontSize: 80, fontWeight: 'bold', color: '#fff', opacity: 0.15, position: 'absolute' },
  brandName: { color: '#fff', fontSize: 26, fontWeight: 'bold' },
  authBox: { width: '100%', backgroundColor: '#fff', padding: 40, paddingTop: 60, borderRadius: 20, shadowColor: '#000', shadowOpacity: 0.1, elevation: 5 },
  welcomeText: { textAlign: 'center', color: '#555', fontStyle: 'italic', marginBottom: 30, lineHeight: 22 },
  input: { borderBottomWidth: 1, borderBottomColor: '#ddd', padding: 12, marginBottom: 20, fontSize: 16 },
  mainButton: { padding: 18, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', letterSpacing: 1 },
  helpLink: { marginTop: 30, color: '#3498db', fontWeight: 'bold' },
  dashboard: { padding: 20 },
  dashTitle: { fontSize: 24, fontWeight: 'bold', color: '#2c3e50', marginBottom: 20 },
  statCard: { backgroundColor: '#fff', padding: 20, borderRadius: 15, marginBottom: 20, borderLeftWidth: 5, borderLeftColor: '#2ecc71' },
  statLabel: { color: '#7f8c8d', fontSize: 14 },
  statValue: { fontSize: 28, fontWeight: 'bold', color: '#2c3e50' },
  section: { marginTop: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  courseItem: { backgroundColor: '#fff', padding: 20, borderRadius: 15, marginBottom: 10 },
  courseName: { fontWeight: 'bold', fontSize: 16 },
  courseMeta: { color: '#7f8c8d', fontSize: 12, marginTop: 4 },
  editBtn: { marginTop: 15, backgroundColor: '#f1f1f1', padding: 10, borderRadius: 8, alignItems: 'center' },
  editBtnText: { color: '#2c3e50', fontWeight: '600' },
  cnvBox: { marginTop: 30, padding: 15, backgroundColor: '#eef7ff', borderRadius: 12, borderStyle: 'dashed', borderWidth: 1, borderColor: '#3498db' },
  cnvTitle: { fontSize: 12, fontWeight: 'bold', color: '#3498db', marginBottom: 5 },
  cnvContent: { fontSize: 13, color: '#2c3e50', fontStyle: 'italic' },
  backBtn: { marginTop: 40, padding: 15, alignItems: 'center' },
  backText: { color: '#e74c3c', fontWeight: 'bold' }
});
