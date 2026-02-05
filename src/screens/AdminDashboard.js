import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AdminDashboard({ onLogout }) {
  return (
    <ScrollView contentContainerStyle={styles.dashboard}>
      <Text style={styles.dashTitle}>⚓ Dashboard Administrator</Text>
      
      <View style={styles.statCard}>
        <Text style={styles.statLabel}>Total Încasări (SmartBill)</Text>
        <Text style={styles.statValue}>1.250 RON</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Gestiune Cursuri (API/Supabase)</Text>
        <View style={styles.courseItem}>
          <Text style={styles.courseName}>Curs: Arta Conexiunii</Text>
          <Text style={styles.courseMeta}>5 Module | 3 Abonați</Text>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editBtnText}>Editează Module</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.backBtn} onPress={onLogout}>
        <Text style={styles.backText}>Deconectare</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  backBtn: { marginTop: 40, padding: 15, alignItems: 'center' },
  backText: { color: '#e74c3c', fontWeight: 'bold' }
});
