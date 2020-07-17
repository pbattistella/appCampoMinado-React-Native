import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import params from './params'
import Field from './components/Field'


export default class App extends Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.welcome} >Iniciando o Jogo Campo Minado</Text>
        <Text style = {styles.welcome} >Tamanho:
          {params.getRowsAmount()} X {params.getColumnsAmount()} 
        </Text>
        <Field/>
        <Field opened />
        <Field opened nearMines = {1} />
        <Field opened nearMines = {2} />
        <Field opened nearMines = {3} />
        <Field opened nearMines = {4} />
        <Field opened nearMines = {5} />
        <Field opened nearMines = {6} />
        <Field mined opened/>
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  //estilo padrão
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})
