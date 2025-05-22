import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import React from 'react'
import {useRouter} from 'expo-router'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleLogin = () => {
        console.log('Email:', email )
        console.log('Password:', password )

        setEmail('')
        setPassword('')

        router.push('/home')
    }

  return (
    <View>
      <Text>Login</Text>
      <TextInput
       style={styles.input}
       placeholder="Email"
       value={email}
       onChangeText={(text) => setEmail(text)}
       />
      
      <TextInput
       style={styles.input}
       placeholder="Password"
       secureTextEntry={true}
       value={password}
        onChangeText={(text) => setPassword(text)}
       />
       <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
        <Text style={styles.submitButtonText}>
            Submit
        </Text>
       </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    input: {
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: 'grey',
        paddingVertical: 10,
        marginTop: 10,
        width: 50
    },
    submitButtonText: {
        color: 'white'
    }
})