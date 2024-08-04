import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import * as Icons from "react-native-heroicons/outline";
import Colors from '@/constants/Colors';
import Welcome from '@/components/Welcome';
import PopularJobs from '@/components/PopularJobs';
import NearbyJobs from '@/components/NearbyJobs';

const index = () => {

  

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity>
              <Icons.Bars3BottomLeftIcon
                size={35}
                color={Colors.primaryGreen}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Image
              source={{
                uri: 'https://picsum.photos/seed/picsum/100/100'
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10
              }}
            />
          )
        }}
      />
      <ScrollView
        style={{
          marginVertical: 20,
          marginHorizontal : 10
        }}
        showsVerticalScrollIndicator={false}
      >
        <Welcome/>
        <PopularJobs />
        <NearbyJobs />
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})