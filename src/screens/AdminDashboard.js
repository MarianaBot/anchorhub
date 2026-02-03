import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function AdminDashboard({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>⚓ Puntea de Comandă</Text>
      
      <View style={styles.stats}>
        <View style={styles.card}>
          <Text style={styles.label}>Încasări</Text>
          <Text style={styles.value}>1.250 RON</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate('Courses')}>
        <Text style={styles.navBtnText}>Gestionare Cursuri & Module</Text>
      </TouchableOpacity>

      <View style={styles.cnvPreview}>
        <Text style={styles.cnvLabel}>Notificare CNV activă:</Text>
        <Text style={styles.cnvText}>"Mai sunt 15 zile... ajutorul tău este vital."</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 25 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#2c3e50', marginTop: 40, marginBottom: 30 },
  stats: { marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 15, borderLeftWidth: 5, borderLeftColor: '#2ecc71' },
  label: { color: '#7f8c8d' },
  value: { fontSize: 28, fontWeight: 'bold' },
  navBtn: { backgroundColor: '#fff', padding: 20, borderRadius: 15, marginTop: 10, alignItems: 'center' },
  navBtnText: { color: '#2c3e50', fontWeight: 'bold' },
  cnvPreview: { marginTop: 30, padding: 20, backgroundColor: '#eef7ff', borderRadius: 15, borderStyle: 'dashed', borderWidth: 1, borderColor: '#3498db' },
  cnvLabel: { fontSize: 12, fontWeight: 'bold', color: '#3498db' },
  cnvText: { fontStyle: 'italic', marginTop: 5 }
});
