import {  SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONT_SIZES } from '../styleConstants';
import LocationSearchBar from '../components/searchComponents/LocationSearchBar';
import NearYouList from '../components/searchComponents/NearYouList';
import FeaturedHouses from '../components/FeaturedHouses';
import CurrentLocation from '../components/CurrentLocation';
export default function Home() {



    return (
        <SafeAreaView style={styles.pageWrapper}>   
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollPadding}>
                <CurrentLocation/>
                <FeaturedHouses />
               <View style={styles.searchedWrapper}>
               <NearYouList />
                </View> 
            </ScrollView>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    pageWrapper: {
        flex: 1,
        marginBottom:50
    },
    scrollPadding:{
       paddingBottom:150
    },
    contentContainer: {
        paddingBottom: 50
      }
})