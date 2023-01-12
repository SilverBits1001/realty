import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { featuredResults } from '../exampleDB'
import FeaturedCard from './FeaturedCard';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../styleConstants';



export default function FeaturedHouses() {

    const featuredList = featuredResults.results.filter(item => item.isFeatured === true)
    const renderItem = ({ item }) => (
        <FeaturedCard item={item} />
    );

    return (
        <View>
            <View style={styles.headerWrapper}>
                <Text style={styles.headerText}>Featured Houses</Text>
                <TouchableOpacity>
                    <Text style={styles.more}>See More</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={featuredList}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: FONT_SIZES.SUB_HEADER,
        fontWeight: FONT_WEIGHTS.BOLD,
        color: COLORS.DARK_GREY

    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 5,
        marginHorizontal: 15,
    },
    more: {
        color: COLORS.PRIMARY,
        fontWeight: FONT_WEIGHTS.BOLD,
        fontSize: FONT_SIZES.CAPTION,


    }
})


