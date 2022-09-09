import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meucomponente from './Meucomponente';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style ={styles.title}>To desenvolvendo ainda!</Text>
      <Text style ={styles.cardTittle}>EU NÃO SEI NADA DE PROTOCOLO IP E TCP!!!</Text>
      <Text style ={styles.cardTittle}>FUDEU!</Text>
       
      <Meucomponente />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
  },
  cardTittle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
});
