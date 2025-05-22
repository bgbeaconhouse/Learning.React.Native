import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import {Link} from 'expo-router'

const Profiles = () => {
    const [users, setUsers] = useState([])
    const [error, setError] =useState(null)

useEffect(() => {
    async function fetchUsers() {
        try {
            const response = await fetch("http://192.168.0.34:3000/api/user")
            const data = await response.json()
            setUsers(data)
        } catch (error) {
            setError(error)
        }
    }
    fetchUsers()
}, []);    
  return (
    <View>
            <TouchableOpacity>
                    <Link href="/home">
                <Text>Back</Text>
                </Link>
                </TouchableOpacity>
      <Text>Profiles</Text>
      <FlatList 
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
      <View>
        <Text>Username: {item.username}</Text>
       <Text>First Name: {item.firstName}</Text>
       <Text>Last Name: {item.lastName}</Text>
       <Text>Email: {item.email}</Text>
       <Text>Phone Number: {item.phoneNumber}</Text>
        </View>
      )}
      />
    </View>
  )
}

export default Profiles

const styles = StyleSheet.create({})