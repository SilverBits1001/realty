import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import LocationSearchBar from '../components/searchComponents/LocationSearchBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchedListItem from '../components/searchComponents/SearchedListItem'
import { ScrollView } from 'react-native'
import backsplash from '../images/modern-house.jpg'
import { ImageBackground } from 'react-native'
import { Image } from 'react-native'
import SavedSearches from '../components/searchComponents/SavedSearches'
import { COLORS } from '../styleConstants'

export default function Search() {
  const searchbarRef = useRef(null)

  return (

    <SafeAreaView style={styles.componentWrapper}>

      <ScrollView  >
        <LocationSearchBar />
        <SavedSearches />
        <View style={styles.listWrapper}>
          <SearchedListItem />

        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  componentWrapper: {
    flex: 1,
    backgroundColor: COLORS.lightBlue,

  },
  listWrapper: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical:10  }
}) 