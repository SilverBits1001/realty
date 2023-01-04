import {  SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../styleConstants';
import LocationSearchBar from '../components/searchComponents/LocationSearchBar';
import SearchedListItem from '../components/searchComponents/SearchedListItem';
import FeaturedHouses from '../components/FeaturedHouses';
import CurrentLocation from '../components/CurrentLocation';
export default function Home() {



    return (
        <SafeAreaView style={styles.pageWrapper}>   
            <ScrollView>
                <CurrentLocation/>
                <FeaturedHouses />
               <View style={styles.searchedWrapper}>
               <SearchedListItem />
                </View> 
            </ScrollView>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    iconWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    pageWrapper: {
        flex: 1,
        backgroundColor:'#fff'

    },
    searchedWrapper:{
        backgroundColor:'#fff'
    },
    tagline: {
        fontSize: '30px',

    },
    filter: {


    }
})