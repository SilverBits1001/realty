import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import LocationSearchBar from '../components/searchComponents/LocationSearchBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import NearYouList from '../components/searchComponents/NearYouList'
import { ScrollView } from 'react-native'
import backsplash from '../images/modern-house.jpg'
import { ImageBackground } from 'react-native'
import { Image } from 'react-native'
import SavedSearches from '../components/searchComponents/SavedSearches'
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../styleConstants'
import HorizontalListCard from '../components/searchComponents/HorizontalListCard'
import { forRent, houseResults } from '../exampleDB'
import { usdFormat } from '../helpers/helpers'
import { Button, Icon } from 'react-native-elements'
export default function Search() {
  const searchbarRef = useRef(null)

  return (

    <SafeAreaView style={styles.componentWrapper}>

      <ScrollView contentContainerStyle={styles.contentContainer} >
        <LocationSearchBar />
        <SavedSearches />
        <View style={styles.listWrapper}>
          <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>Your Results</Text>
            <Button
              type='clear'
              icon={
                <Icon
                  style={styles.locationIcon}
                  color={COLORS.DARK_GREY}
                  name='bookmark'
                  type='font-awesome-5'
                  size={FONT_SIZES.BODY}
                />
              } />
          </View>


          {forRent.data.home_search.results &&
            forRent.data.home_search.results.map((item, index) => {
              return (
                < HorizontalListCard key={index} item={item}  />
              )
            })}
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  componentWrapper: {
    flex: 1,

  },
  listWrapper: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 10,
    backgroundColor: COLORS.WHITE
  },
  contentContainer: {
    paddingBottom: 50
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  headerText: {
    fontSize: FONT_SIZES.BODY,
    fontWeight: FONT_WEIGHTS.BOLD
  }
}) 