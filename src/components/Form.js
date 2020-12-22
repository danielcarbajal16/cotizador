import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
//import { Picker } from "@react-native-community/picker";
import colors from "../utils/colors";

export default function Form() {
    state = {
        language: 'java',
      };

    return (
        <View style = {styles.viewForm}>
            <View style = {styles.viewInputs}>
                <TextInput placeholder = "Cantidad a pedir." keyboardType = "numeric" style = {styles.input}/>
                <TextInput placeholder = "Interes %" keyboardType = "numeric" style = {[styles.input, styles.secondInput]}/>
            </View>
            {<RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
            />}
            {/*<Picker
                selectedValue={state.language}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    viewForm: {
        position: "absolute",
        bottom: -90,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: "center",
    },
    viewInputs: {
        flexDirection: "row",

    },
    input: {
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20,
    },
    secondInput: {
        width: "40%",
        marginLeft: 5,
    }
})