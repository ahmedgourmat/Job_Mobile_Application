import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import * as Icons from "react-native-heroicons/outline";
import Colors from '@/constants/Colors';

const Welcome = () => {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const jobData = ['Full-time', 'Part-time', 'Contractor'];
    const router = useRouter();

    const handleCategoryPress = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <View>
            <View>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '600',
                        color: Colors.darkGray
                    }}
                >
                    Hello there!
                </Text>
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: '600',
                        color: Colors.darkGreen,
                        alignSelf: 'center'
                    }}
                >
                    What job are you looking for?
                </Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 20
                }}
            >
                <TextInput
                    placeholder='Search'
                    style={{
                        flex: 1,
                        fontSize: 17,
                        borderColor: Colors.lightGreen,
                        borderWidth: 2,
                        padding: 5,
                        borderRadius: 5,
                        marginRight: 20
                    }}
                    value={search}
                    onChangeText={(text) => {
                        setSearch(text);
                        console.log(text);
                    }}
                />
                <TouchableOpacity>
                    <View
                        style={{
                            backgroundColor: Colors.primaryGreen,
                            borderRadius: 10,
                            padding: 7
                        }}
                    >
                        <Icons.MagnifyingGlassIcon
                            size={30}
                            color={Colors.darkGray}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={jobData}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={[
                                styles.catBtn, 
                                selectedCategory === item && styles.selectedCatBtn
                            ]}
                            onPress={() => {
                                handleCategoryPress(item)
                                router.push(`/search/${item}` as any)
                            }}
                        >
                            <Text 
                                style={styles.catText}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    contentContainerStyle={{ columnGap: 25 }}
                    horizontal
                />
            </View>
        </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    catBtn: {
        borderColor: Colors.primaryGreen,
        borderWidth : 2,
        paddingHorizontal: 10,
        paddingVertical : 5 ,
        borderRadius: 10,
    },
    catText: {
        fontSize: 15,
        fontWeight: '600',
        color: Colors.darkGray,
    },
    selectedCatBtn: {
        backgroundColor: Colors.primaryGreen,
        padding: 10,
        borderRadius: 10,
    }
});
