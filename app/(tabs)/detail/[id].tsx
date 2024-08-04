import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router';
import { Job } from '@/types';
import { dummyJobs } from '@/data';
import Colors from '@/constants/Colors';

const JobDetails = () => {
  const { id } = useLocalSearchParams();
  const { width } = Dimensions.get('screen');

  const job: Job | undefined = (dummyJobs as Job[]).find(
    (item) => item.id == id
  );

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: job?.title,
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={{
            uri: job?.image,
          }}
          style={{
            width: width,
            height: 350,
          }}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{job?.title}</Text>
          <Text style={styles.category}>{job?.category}</Text>
          <Text style={styles.company}>{job?.company}</Text>
          <Text style={styles.datePosted}>Posted: {job?.datePosted}</Text>
          <Text style={styles.employmentType}>{job?.employmentType}</Text>
          <Text style={styles.location}>{job?.location}</Text>
          <Text style={styles.salaryRange}>{job?.salaryRange}</Text>
          <Text style={styles.description}>{job?.description}</Text>
          <Text style={styles.providersTitle}>Job Providers:</Text>
          {job?.jobProviders.map((provider, index) => (
            <View key={index} style={styles.providerContainer}>
              <Text style={styles.providerName}>{provider.jobProvider}</Text>
              <Text style={styles.providerUrl}>{provider.url}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.applyButton} onPress={() => console.log('Apply button pressed')}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: -40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  category: {
    fontSize: 18,
    fontWeight: '600',
    color: '#777',
    marginBottom: 10,
  },
  company: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  datePosted: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  employmentType: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  salaryRange: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
    lineHeight: 22,
  },
  providersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  providerContainer: {
    marginBottom: 10,
  },
  providerName: {
    fontSize: 16,
    color: '#555',
  },
  providerUrl: {
    fontSize: 16,
    color: Colors.primaryGreen,
  },
  applyButton: {
    backgroundColor: Colors.primaryGreen,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
