import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'

const Home = () => {
  return (
    <View>
        <TouchableOpacity>
            <Link href='/'>
        <Text>Back</Text>
        </Link>
        </TouchableOpacity>
        <TouchableOpacity>
            <Link href="/posts">
      <Text>Posts</Text>
      </Link>
      </TouchableOpacity>
            <TouchableOpacity>
            <Link href="/message">
      <Text>Message</Text>
      </Link>
      </TouchableOpacity>
          <TouchableOpacity>
            <Link href="/shop">
      <Text>Shop</Text>
      </Link>
      </TouchableOpacity>
          <TouchableOpacity>
            <Link href="/profiles">
      <Text>Profiles</Text>
      </Link>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})