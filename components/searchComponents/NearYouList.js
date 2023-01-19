import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { forRent, houseResults } from '../../exampleDB';
import { COLORS, FONTS, FONT_SIZES, FONT_WEIGHTS } from '../../styleConstants';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button, Icon } from 'react-native-elements';
import { usdFormat } from '../../helpers/helpers';
import HorizontalListCard from './HorizontalListCard';



export default function NearYouList() {

    return (
        <View style={styles.componentWrapper}>

            <View style={styles.headerWrapper}>
                <Text style={styles.headerText}>Nearby</Text>
                <TouchableOpacity>
                    <Text style={styles.more}>See More</Text>
                </TouchableOpacity>
            </View>
             {
                forRent.data.home_search.results && //only renders list if house.results has a value
                forRent.data.home_search.results.slice(0, 5).map((item, index) => <HorizontalListCard key={index} item={item} price={usdFormat(30)} />)
            } 
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
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 15,
        marginBottom:5,
        marginHorizontal: 15,
    },
    more: {
        color: COLORS.PRIMARY,
        fontWeight: FONT_WEIGHTS.BOLD,
        fontSize: FONT_SIZES.CAPTION,


    }

})