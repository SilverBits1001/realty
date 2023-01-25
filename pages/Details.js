import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../styleConstants'
import { usdFormat } from '../helpers/helpers'
import { Button, Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { updateLiked } from '../src/features/liked/likedSlice';
import { getDetails } from '../helpers/fetchRequests'
import axios from 'axios'
import DetailStatsList from '../components/detailComponents/DetailStatsList'
import { TouchableOpacity } from 'react-native'
import DetailsDescription from '../components/detailComponents/DetailsDescription'
import MapView, { Marker } from 'react-native-maps'
import { ImageBackground } from 'react-native'
import { houseDetail } from '../exampleDB'
import { BackgroundImage } from 'react-native-elements/dist/config'
import DetailsImages from '../components/detailComponents/DetailsImages'
import DetailsMap from '../components/detailComponents/DetailsMap'



export default function Details({ route }) {


    const { item } = route.params

    const dispatch = useDispatch()
    const likedStore = useSelector((state) => state.liked)
    const [liked, setLiked] = useState(false)
    const isIncluded = likedStore.includes(JSON.stringify(item)) //checks if item is already in array in store

    const [imgSelect, setImgSelect] = useState(0)


    // const [houseDetail, setHouseDetail] = useState(null)


    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await getDetails(item.property_id);
    //             const data = response.data
    //             console.log('data was fetchhhhhhed')
    //             setHouseDetail(data.data);

    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     fetchData()
    //     return () => {
    //         setHouseDetail(null)
    //     }
    // }, [])

    let fullResImg
    houseDetail ? fullResImg = houseDetail.home.photos[imgSelect].href.slice(0, -5) + "od.jpg" : null


    if (!houseDetail) {
        return <Text>Loading</Text>
    }
    return (

        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

            <DetailsImages houseDetail={houseDetail} />


            <View style={styles.infoWrapper}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.homeType}>{houseDetail.home.__typename}</Text>
                    <Button
                        onPress={() => {
                            setLiked(!liked)
                            dispatch(updateLiked(item))
                        }}
                        type='clear'
                        icon={
                            <Icon size={FONT_SIZES.SUB_HEADER} style={styles.locationIcon} name={isIncluded ? 'heart-fill' : 'heart'} type='octicon' color={isIncluded ? COLORS.RED : 'black'} />
                        }
                    />
                </View>
                <View style={styles.addressWrapper}>
                    <Text style={styles.streetAddress}>{houseDetail.home.location.address.line}</Text>
                    <Text style={styles.address}>{houseDetail.home.location.address.city}, {houseDetail.home.location.address.state_code} </Text>
                </View>
                <DetailStatsList houseDetail={houseDetail} />
                <DetailsDescription houseDetail={houseDetail} />
                <DetailsMap houseDetail={houseDetail} />
            </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    cardImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    previewImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    infoWrapper: {
        margin: 15,
    },
    homeType: {
        color: COLORS.PRIMARY,
        fontSize: FONT_SIZES.BODY,
        fontWeight: FONT_WEIGHTS.BOLD
    },
    price: {
        backgroundColor: COLORS.LIGHT,
        padding: 10,
        borderRadius: 15,
        overflow: 'hidden',
        color: COLORS.PRIMARY,
        fontSize: FONT_SIZES.BODY,
        fontWeight: FONT_WEIGHTS.BOLD
    },
    streetAddress: {
        color: COLORS.DARK_GREY,
        fontSize: FONT_SIZES.SUB_HEADER,
        fontWeight: FONT_WEIGHTS.BOLD,
    },
    addressWrapper: {
        marginBottom: 10
    },
    address: {
        color: COLORS.LIGHT_GREY,
        fontSize: FONT_SIZES.BODY
    },
    reduction: {
        color: COLORS.GREEN,
        fontSize: FONT_SIZES.SMALL,
        fontWeight: FONT_WEIGHTS.BOLD
    },

})


// price <Text style={styles.price} >{usdFormat(houseDetail.home.mortgage.estimate.monthly_payment)}/m</Text>



