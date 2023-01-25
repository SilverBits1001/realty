import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import FeaturedCard from '../components/FeaturedCard'
import HorizontalListCard from '../components/searchComponents/HorizontalListCard'
import { usdFormat } from '../helpers/helpers'
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../styleConstants'



export default function Favorite() {
  const likedStore = useSelector(state => state.liked)


  return (

    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {likedStore && likedStore.map((item, index) => {

         const parsedItem = JSON.parse(item)
                   return (

            < HorizontalListCard key={index} item={parsedItem}  />
          )
        })}

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
      fontSize: FONT_SIZES.HEADER,
      fontWeight: FONT_WEIGHTS.BOLD
  },
  subHeader: {
      fontSize: FONT_SIZES.SUB_HEADER,
      fontWeight: FONT_WEIGHTS.MEDIUM
  },
  body: {
      fontSize: FONT_SIZES.BODY,
      fontWeight: FONT_WEIGHTS.REGULAR
  }
})

{/* <View>
<View style={{ backgroundColor: COLORS.GREEN, width: 50, height: 50 }} />
<View style={{ backgroundColor: COLORS.RED, width: 50, height: 50 }} />
<View style={{ backgroundColor: COLORS.GREY, width: 50, height: 50 }} />
<View style={{ backgroundColor: COLORS.DARK_GREY, width: 50, height: 50 }} />
<View style={{ backgroundColor: COLORS.PRIMARY, width: 50, height: 50 }} />
<View style={{ backgroundColor: COLORS.LIGHT_BLUE, width: 50, height: 50 }} />
<View style={{ backgroundColor: COLORS.WARNING, width: 50, height: 50 }} />
<View style={{ backgroundColor: COLORS.DARK, width: 50, height: 50 }} />
<View style={{ backgroundColor: COLORS.LIGHT, width: 50, height: 50 }} />
</View>
<View>
<Text style={{ color: COLORS.GREEN, ...styles.header }}>Green Header Text</Text>
<Text style={{ color: COLORS.GREEN, ...styles.subHeader }}>Green Header Text</Text>
<Text style={{ color: COLORS.GREEN, ...styles.body }}>Green Header Text</Text>

<Text style={{ color: COLORS.RED, ...styles.header }}>Red Subheader Text</Text>
<Text style={{ color: COLORS.RED, ...styles.subHeader }}>Red Subheader Text</Text>
<Text style={{ color: COLORS.RED, ...styles.body }}>Red Subheader Text</Text>

<Text style={{ color: COLORS.GREY, ...styles.header }}>Grey Body Text</Text>
<Text style={{ color: COLORS.GREY, ...styles.subHeader }}>Grey Body Text</Text>
<Text style={{ color: COLORS.GREY, ...styles.body }}>Grey Body Text</Text>

<Text style={{ color: COLORS.DARK_GREY, ...styles.header }}>Dark Grey Header Text</Text>
<Text style={{ color: COLORS.DARK_GREY, ...styles.subHeader }}>Dark Grey Header Text</Text>
<Text style={{ color: COLORS.DARK_GREY, ...styles.body }}>Dark Grey Header Text</Text>

<Text style={{ color: COLORS.PRIMARY, ...styles.header }}>Primary Subheader Text</Text>
<Text style={{ color: COLORS.PRIMARY, ...styles.subHeader }}>Primary Subheader Text</Text>
<Text style={{ color: COLORS.PRIMARY, ...styles.body }}>Primary Subheader Text</Text>

<Text style={{ color: COLORS.LIGHT_BLUE, ...styles.header }}>Light Blue Body Text</Text>
<Text style={{ color: COLORS.LIGHT_BLUE, ...styles.subHeader }}>Light Blue Body Text</Text>
<Text style={{ color: COLORS.LIGHT_BLUE, ...styles.body }}>Light Blue Body Text</Text>

<Text style={{ color: COLORS.WARNING, ...styles.header }}>Warning Header Text</Text>
<Text style={{ color: COLORS.WARNING, ...styles.subHeader }}>Warning Header Text</Text>
<Text style={{ color: COLORS.WARNING, ...styles.body }}>Warning Header Text</Text>

<Text style={{ color: COLORS.DARK, ...styles.header }}>Dark Subheader Text</Text>
<Text style={{ color: COLORS.DARK, ...styles.subHeader }}>Dark Subheader Text</Text>
<Text style={{ color: COLORS.DARK, ...styles.body }}>Dark Subheader Text</Text>

<Text style={{ color: COLORS.LIGHT, ...styles.header }}>Light Body Text</Text>
<Text style={{ color: COLORS.LIGHT, ...styles.subHeader }}>Light Body Text</Text>
<Text style={{ color: COLORS.LIGHT, ...styles.body }}>Light Body Text</Text>
</View> */}