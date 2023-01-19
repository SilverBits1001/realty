import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONT_WEIGHTS } from '../../styleConstants'

const filters = ['House', 'Apartment', 'Condo', 'Townhouse', 'Mobile Home']


const FilterItem = ({ item }) => {
  const [isPressed, setIsPressed] = useState(false)
  return (
    <TouchableOpacity
      onPress={() => setIsPressed(!isPressed)}
      activeOpacity={1}
      style={[styles.filterSelection, isPressed && { borderColor: COLORS.PRIMARY,  }]}
    >
      <Text style={[styles.filterText, isPressed && { color: COLORS.PRIMARY }]}>{item}</Text>
    </TouchableOpacity>
  )
}

export default function FilterBar() {

  const renderItem = ({ item }) => <FilterItem item={item} />

  return (
    <View style={styles.componentWrapper} horizontal={true} showsHorizontalScrollIndicator={false}>
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={filters} renderItem={renderItem} keyExtractor={(item, index) => index} />
    </View>
  )
}

const styles = StyleSheet.create({
  componentWrapper: {
    marginVertical: 5
  },
  filterSelection: {
    borderRadius: 25,
    padding: 10,
    margin: 3,
    backgroundColor: COLORS.WHITE,
    borderWidth: 1.25,
    borderColor: COLORS.LIGHT_GREY,
  },
  filterText: {
    fontWeight: FONT_WEIGHTS.MEDIUM,
    color: COLORS.DARK_GREY
  }
})