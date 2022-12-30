import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SearchBar } from 'react-native-elements'
import { COLORS } from '../styleConstants'
import FilterBar from './filterComponents/FilterBar'
import FilterComponent from './filterComponents/FilterComponent'

export default function LocationSearchBar() {
    const [value, setValue] = useState('')
    const [filtersActive, setFiltersActive] = useState(false)
    return (
        <View>
            <SearchBar
                placeholder="Search Location"
                value={value}
                containerStyle={styles.searchContainer}
                inputContainerStyle={styles.inputContainer}
                onChangeText={(newVal) => setValue(newVal)}
                onFocus={() => setFiltersActive(true)}
                onSubmitEditing={() => setFiltersActive(false)}
                lightTheme
                round

            />
            {filtersActive && <FilterComponent />}
        </View>


    )
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },
    inputContainer: {
        backgroundColor: 'white'
    },
})