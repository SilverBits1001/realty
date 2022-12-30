import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { houseResults } from '../exampleDB';
import { COLORS, FONTS } from '../styleConstants';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Icon } from 'react-native-elements';
import { usdFormat } from '../helpers/helpers';

const example = {
    "bathrooms": 2,
    "bedrooms": 3,
    "city": "Houston",
    "country": "USA",
    "currency": "USD",
    "daysOnZillow": 0,
    "homeStatus": "FOR_SALE",
    "homeStatusForHDP": "FOR_SALE",
    "homeType": "SINGLE_FAMILY",
    "imgSrc": "https://photos.zillowstatic.com/fp/5f3904c58b17657a259069356277a04e-p_e.jpg",
    "isFeatured": false,
    "isNonOwnerOccupied": true,
    "isPreforeclosureAuction": false,
    "isPremierBuilder": false,
    "isUnmappable": false,
    "isZillowOwned": false,
    "latitude": 29.701239,
    "listing_sub_type": {
        "is_FSBA": true
    },
    "livingArea": 2298,
    "longitude": -95.35417,
    "lotAreaUnit": "sqft",
    "lotAreaValue": 5000,
    "price": 375000,
    "priceForHDP": 375000,
    "rentZestimate": 1979,
    "shouldHighlight": false,
    "state": "TX",
    "streetAddress": "5920 Conley St",
    "taxAssessedValue": 301316,
    "zestimate": 261600,
    "zipcode": "77021",
    "zpid": 80513508
}

const Item = ({ item, price }) => (


    <TouchableOpacity activeOpacity={0.5} style={styles.cardWrapper}>
        <Image style={styles.cardImage} source={{ uri: item.imgSrc }} />
        <View style={styles.infoWrapper}>
            <Text style={styles.price} >{price}</Text>
            <Text>{item.bedrooms} Bed and {item.bathrooms} Bath</Text>
            <Text>{item.city}, {item.state}</Text>
        </View>
        <Icon size={18} containerStyle={styles.heart} name={'heart'} type='octicon' color={'#333'} />


    </TouchableOpacity>

);

export default function SearchedListItem() {


    const renderItem = ({ item }) => (
        (item.homeType != "LOT") ?
            <Item item={item} price={USDollar.format(item.price)} /> :
            null
    );


    return (
        <View style={styles.componentWrapper}>
            <Text style={styles.searchTitle}>Your Search</Text>
            {houseResults.results.map((item, index) => <Item key={index} item={item} price={usdFormat(item.price)} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    componentWrapper: {
        backgroundColor: '#fff',
    },
    cardWrapper: {
        flexDirection: 'row',
        borderRadius: 15,
        marginTop: 10,
        marginHorizontal: 15,
        padding: 15

    },
    searchTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5
    },
    cardImage: {
        width: 150,
        height: 100,
        borderRadius: 7
    },
    infoWrapper: {
        justifyContent: 'space-between',
        marginVertical: 10,
        marginLeft: 10,
        flex: 5
    },
    price: {
        fontWeight: 'bold',
        fontSize: 24
    },
    heart: {
        flex: 1,
        alignSelf: 'center'
    }
})