import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { dummyJobs } from '@/data'
import * as Icons from 'react-native-heroicons/outline'
import { useRouter } from 'expo-router'

const NearbyJobs = () => {

  const router = useRouter()

  const nearbyData = dummyJobs.filter(job => {
    return job.category === 'Nearby'
  })

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700'
          }}
        >NearbyJobs</Text>
        <TouchableOpacity>
          <Text
            style={{
              textDecorationLine: 'underline',
              color: Colors.mediumGray
            }}
          >
            Show all
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {
          nearbyData.map(job => (
            <TouchableOpacity
              onPress={() => {
                router.push(`./detail/${job.id}`)
              }}
              key={job.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                borderColor: Colors.lightGreen
              }}
            >
              <Image
                source={{
                  uri: job.image
                }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 5
                }}
              />
              <View
                style={{
                  marginLeft: 30
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '600'
                  }}
                >{job.title}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <Icons.MapPinIcon color={Colors.primaryGreen} size={15} />
                  <Text
                    numberOfLines={1}
                    style={{
                      marginLeft: 5
                    }}
                  >
                    {job.location}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  )
}

export default NearbyJobs

const styles = StyleSheet.create({})