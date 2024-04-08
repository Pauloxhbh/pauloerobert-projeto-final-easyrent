import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // TODO: Implementar a lógica de login
    alert('Usuário: ' + usuario + '\nSenha: ' + senha);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Easyrent</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '80%', // Defina a largura desejada aqui, por exemplo, 80% da largura da tela
    maxWidth: 300, // Defina uma largura máxima, se desejar
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    width: '80%', // Defina a largura desejada aqui
    maxWidth: 300, // Defina uma largura máxima, se desejar
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
