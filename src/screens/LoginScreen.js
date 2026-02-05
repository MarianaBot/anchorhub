import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking } from 'react-native';

export default function LoginScreen({ onLogin, tenant }) {
  const [password, setPassword] = useState('');

  return (
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
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if(text === 'admin123') onLogin('admin');
            if(text === 'user123') onLogin('user');
          }}
        />
        
        <TouchableOpacity 
          style={[styles.mainButton, { backgroundColor: tenant.primaryColor }]}
          onPress={() => onLogin('user')}
        >
          <Text style={styles.buttonText}>PĂȘEȘTE ÎNĂUNTRU ✨</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => Linking.openURL(tenant.supportLink)}>
        <Text style={styles.helpLink}>Ai nevoie de sprijin tehnic? (WAP)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
