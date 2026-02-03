import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function CourseManagement() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Gestiune Cursuri</Text>
      <View style={styles.course}>
        <Text style={styles.name}>Curs: Arta Conexiunii</Text>
        <Text style={styles.meta}>Status: 5 Module active</Text>
        <View style={styles.module}>
          <Text>Modul 1 - Introducere (Gratuit)</Text>
        </View>
        <View style={styles.module}>
          <Text>Modul 2 - Tehnici NLP (Plătit)</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addText}>+ Adaugă Modul Nou</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 25 },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 40, marginBottom: 20 },
  course: { backgroundColor: '#fff', padding: 20, borderRadius: 15 },
  name: { fontWeight: 'bold', fontSize: 18 },
  meta: { color: '#666', marginBottom: 15 },
  module: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  addBtn: { marginTop: 20, backgroundColor: '#2c3e50', padding: 15, borderRadius: 12, alignItems: 'center' },
  addText: { color: '#fff', fontWeight: 'bold' }
});
