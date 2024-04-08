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

      <View style={styles.form}>
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

        <View style={styles.options}>
          <TouchableOpacity>
            <Text style={styles.optionText}>Lembrar Senha</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.optionText}>Exibir Senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
  },
  form: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  optionText: {
    color: '#ccc',
  },
});

export default App;
