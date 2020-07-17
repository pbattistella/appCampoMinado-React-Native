import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import params from './params'


export default class App extends Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.welcome} >Iniciando o Jogo Campo Minado</Text>
        <Text style = {styles.welcome} >Tamanho:
          {params.getRowsAmount()} X {params.getColumnsAmount()} 
        </Text>
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
