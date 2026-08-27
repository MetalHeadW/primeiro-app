import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Switch,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('Masculino');
  const [limite, setLimite] = useState(250);
  const [estudante, setEstudante] = useState(false);

  const [mensagem, setMensagem] = useState('');
  const [contaAberta, setContaAberta] = useState(false);

  function abrirConta() {
    if (nome.trim() === '' || idade.trim() === '') {
      setMensagem('Preencha todos os dados corretamente!');
      setContaAberta(false);
      return;
    }

    setMensagem('Conta aberta com sucesso!');
    setContaAberta(true);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Banco SENAI</Text>

      {/* NOME */}
      <Text style={styles.label}>Nome:</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      {/* IDADE */}
      <Text style={styles.label}>Idade:</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      {/* SEXO */}
      <Text style={styles.label}>Sexo:</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={sexo}
          onValueChange={(valor) => setSexo(valor)}
          style={styles.picker}
        >
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>
      </View>

      {/* LIMITE */}
      <View style={styles.limiteContainer}>
        <Text style={styles.label}>Seu Limite:</Text>

        <Text style={styles.valor}>
          R$ {limite.toFixed(0)}
        </Text>
      </View>

      <Slider
        style={styles.slider}
        minimumValue={250}
        maximumValue={3000}
        step={1}
        value={limite}
        onValueChange={setLimite}
        minimumTrackTintColor="#00a88f"
        maximumTrackTintColor="#999"
        thumbTintColor="#00a88f"
      />

      {/* ESTUDANTE */}
      <View style={styles.estudanteContainer}>

        <Text style={styles.label}>Estudante:</Text>

        <Switch
          value={estudante}
          onValueChange={setEstudante}
          trackColor={{
            false: '#ccc',
            true: '#00a88f',
          }}
          thumbColor="#eee"
        />

      </View>

      {/* BOTÃO */}
      <Pressable
        style={styles.botao}
        onPress={abrirConta}
      >
        <Text style={styles.textoBotao}>
          Abrir Conta
        </Text>
      </Pressable>

      {/* MENSAGEM */}
      {mensagem !== '' && (
        <View style={styles.mensagemContainer}>

          <Text style={styles.mensagem}>
            {mensagem}
          </Text>

          {contaAberta && (
            <View style={styles.dadosConta}>

              <Text style={styles.dado}>
                Nome: {nome}
              </Text>

              <Text style={styles.dado}>
                Idade: {idade}
              </Text>

              <Text style={styles.dado}>
                Sexo: {sexo}
              </Text>

              <Text style={styles.dado}>
                Limite: R$ {limite.toFixed(2)}
              </Text>

              <Text style={styles.dado}>
                Conta Estudante: {estudante ? 'Ativo' : 'Não'}
              </Text>

            </View>
          )}

        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
     paddingHorizontal: 30,
     justifyContent: 'center',
  },

  titulo: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },

  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
  },

  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#c5c5c5',
    backgroundColor: '#eeeeee',
    borderRadius: 2,
    paddingHorizontal: 8,
    fontSize: 12,
    marginBottom: 7,
  },

  pickerContainer: {
    height: 60,
    borderWidth: 1,
    borderColor: '#c5c5c5',
    backgroundColor: '#eeeeee',
    marginBottom: 7,
    overflow: 'hidden',
  },

  picker: {
    height: 50,
   width: '100%',
  },

  limiteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  valor: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 4,
  },

  slider: {
    width: '100%',
    height: 35,
    marginBottom: 5,
  },

  estudanteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#000000',
    height: 34,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  mensagemContainer: {
    backgroundColor: '#f5f5f5',
    marginTop: 18,
    padding: 8,
    minHeight: 35,
  },

  mensagem: {
    color: '#888888',
    fontSize: 10,
    marginBottom: 5,
  },

  dadosConta: {
    marginTop: 3,
  },

  dado: {
    color: '#777777',
    fontSize: 10,
    marginBottom: 2,
  },

});