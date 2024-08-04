import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Job } from '@/types'
import * as Icons from 'react-native-heroicons/outline'
import Colors from '@/constants/Colors'
import { useRouter } from 'expo-router'

const PopularJobsCard = ({ job }: { job: Job }) => {

    const router = useRouter()
    const pressHandling = ()=>{
        router.push(`./detail/${job.id}`)
    }

    return (
        <TouchableOpacity
            onPress={pressHandling}
            style={{
                width: 200,
                height: 300
            }}
        >
            <Image source={{
                uri: job.image
            }}
                style={{
                    width: '100%',
                    height: '70%',
                    borderRadius : 5
                }}
            />
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: '600',
                    marginVertical : 10
                }}
                numberOfLines={1}
            >
                {job.title}
            </Text>
            <View
                style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems : 'center'
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems : 'center'
                    }}
                >
                    <Icons.MapPinIcon color={Colors.primaryGreen} />
                    <Text
                        numberOfLines={1}
                    >
                        {job.location}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PopularJobsCard

const styles = StyleSheet.create({})