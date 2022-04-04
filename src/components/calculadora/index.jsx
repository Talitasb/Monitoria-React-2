import { Text, KeyboardAvoidingView, TextInput } from "react-native"

import styles from "./style"

export default function calculadora() {
    return (
        <KeyboardAvoidingView>
            <Text>Calculadora</Text>
            <TextInput keyboardType='numeric' style={styles.input}/>
            <TextInput keyboardType='numeric' style={styles.input}/>
        </KeyboardAvoidingView>
    )
}