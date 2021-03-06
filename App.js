import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';
import colors from "./src/utils/colors";
import Form from "./src/components/Form";

export default function App () {
  return (
    <>
    <StatusBar barStyle = "light-content"/>
    <SafeAreaView style = {styles.safeArea}>
      <Text style = {styles.titleApp}>Cotizador de Prestamos</Text>
      <Form />
    </SafeAreaView>

    <View>
      <Text>Resultado</Text>
    </View>

    <View>
      <Text> Futter </Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center", 
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 15,
    color: "#fff"
  }
}) 