import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PopularJobsCard from './PopularJobsCard';
import { Job } from '@/types';
import { dummyJobs } from '@/data';

const PopularJobs = () => {

    const data = dummyJobs.filter(elem=>{
      return elem.category === 'Popular'
    })


    const rendring = ({item}:{item : Job})=>{
        return(
            <PopularJobsCard job={item} />
        )
    }

  return (
    <View
        style={{
            marginTop : 20
        }}
    >
      <Text style={styles.title} >PopularJobs </Text>
      <FlatList
        data={data} 
        renderItem={rendring}
        horizontal
        contentContainerStyle={{columnGap : 20}}
        style={{
          marginTop:10,
          paddingVertical : 10
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default PopularJobs

const styles = StyleSheet.create({
    title : {
        fontSize : 20,
        fontWeight : '700'
    }
})