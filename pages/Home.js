import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../styleConstants';
import LocationSearchBar from '../components/LocationSearchBar';
import { houseResults } from '../exampleDB';
import SearchedListItem from '../components/SearchedListItem';
import FilterBar from '../components/filterComponents/FilterBar';
import { Button } from 'react-native-elements/dist/buttons/Button';
import FeaturedHouses from '../components/FeaturedHouses';
import SavedSearches from '../components/SavedSearches';
export default function Home() {



    return (
        <SafeAreaView style={styles.pageWrapper}>   
            <ScrollView>
            <LocationSearchBar />
            <SavedSearches />
                <FeaturedHouses />
                <SearchedListItem />
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
        backgroundColor: COLORS.lightBlue

    },
    tagline: {
        fontSize: '30px',

    },
    filter: {


    }
})