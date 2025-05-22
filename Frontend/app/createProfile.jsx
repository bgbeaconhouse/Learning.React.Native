import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const CreateProfile = () => {







    const handleCreateProfile = async () => {
        try {
            const response = await fetch('http://192.168.0.34:3000/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    firstName, 
                    lastName,
                    email, 
                    phoneNumber,
                }),
            });


        } catch (error) {
            setError(error)
        }
    }
  return (
    <View>
            <TouchableOpacity>
                    <Link href="/home">
                <Text>Back</Text>
                </Link>
                </TouchableOpacity>
      <Text>Create Profile</Text>
      <TextInput
      placeholder="Username"
      value={username}
      onChangeText={setUsername}
      />
    </View>
  )
}

export default CreateProfile

const styles = StyleSheet.create({})