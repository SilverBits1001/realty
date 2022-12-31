import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LocationSearchBar from '../components/searchComponents/LocationSearchBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchedListItem from '../components/searchComponents/SearchedListItem'
import { ScrollView } from 'react-native'

export default function Search() {
  return (
    <SafeAreaView>
      <ScrollView>
        <LocationSearchBar />
        <SearchedListItem />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})