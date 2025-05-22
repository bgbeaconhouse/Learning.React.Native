import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const Posts = () => {
  return (
    <View>
        <TouchableOpacity>
            <Link href="/home">
        <Text>Back</Text>
        </Link>
        </TouchableOpacity>
      <Text>Posts</Text>
    </View>
  )
}

export default Posts

const styles = StyleSheet.create({})