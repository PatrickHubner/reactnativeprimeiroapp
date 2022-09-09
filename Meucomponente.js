import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Meucomponente() {
    return (
        <View>
        <Text style = {styles.teste}>To testando</Text>
      </View>
        );
    }

    const styles = StyleSheet.create({
        teste: {
          padding: '10px',
        }
      });