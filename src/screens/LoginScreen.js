import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.grid}>1</Text>
        <Text style={styles.title}>AnchorahubBase</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.welcome}>Onorăm prezența ta în călătoria descoperirii.</Text>
        <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#999" />
        <TextInput style={styles.input} placeholder="Cuvânt de acces" secureTextEntry placeholderTextColor="#999" />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.buttonText}>PĂȘEȘTE ÎNĂUNTRU ✨</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f7f9', alignItems: 'center', justifyContent: 'center' },
  header: { alignItems: 'center', marginBottom: 40 },
  grid: { fontSize: 100, fontWeight: 'bold', color: '#2c3e50', opacity: 0.1, position: 'absolute' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#2c3e50', marginTop: 30 },
  form: { width: '85%', backgroundColor: '#fff', padding: 30, borderRadius: 20, elevation: 5 },
  welcome: { textAlign: 'center', color: '#666', fontStyle: 'italic', marginBottom: 25 },
  input: { borderBottomWidth: 1, borderBottomColor: '#ddd', padding: 12, marginBottom: 15 },
  button: { backgroundColor: '#2c3e50', padding: 18, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
