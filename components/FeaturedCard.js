import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../styleConstants';
import { Icon } from 'react-native-elements';
import { usdFormat } from '../helpers/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { updateLiked } from '../src/features/liked/likedSlice';




export default function FeaturedCard({ item }) {

    const [liked, setLiked] = useState(false)
    const gradient = ['transparent', 'rgba(0,0,0,0.7)']

    const likedStore = useSelector((state) => state.liked)
    const dispatch = useDispatch()
    const isIncluded = likedStore.includes(JSON.stringify(item)) //checks if item is already in array in store

    console.log(likedStore)



    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.cardWrapper}>
            <ImageBackground style={styles.ImageBackground} imageStyle={{ borderRadius: 10, }} source={{ uri: item.imgSrc }}>
                <Button

                    onPress={() => {
                        setLiked(!liked)
                        console.log('this is ', liked);
                        dispatch(updateLiked(item))
                    }}
                    icon={
                        <Icon size={18} style={styles.locationIcon} name={isIncluded ? 'heart-fill' : 'heart'} type='octicon' color={isIncluded ? COLORS.RED : 'black'} />
                    }
                    containerStyle={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                    buttonStyle={styles.buttonStyle} />
                <LinearGradient style={styles.infoWrapper} colors={gradient}   >
                    <View >
                        {(item.daysOnZillow < 7) ? <View style={styles.newTextWrapper}  >
                            <Text style={styles.newText}>New</Text>
                        </View> : null}
                        <Text style={styles.price}>{usdFormat(item.price)}</Text>
                        <Text style={styles.subtext}>{item.bedrooms} Bed and {item.bathrooms} Bath | {item.city}, {item.state}</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        margin: 10,
        borderRadius: 20,
        shadowColor: '#000000',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 0.3,
        elevation: 3,


    },
    ImageBackground: {
        height: 200,
        width: 300,
        borderRadius: 10,
        justifyContent: 'space-between'
    },
    buttonStyle: {
        margin: 10,
        backgroundColor: COLORS.WHITE,
        borderRadius: 20,
        padding: 5,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 1,
        shadowOpacity: 0.3,
        elevation: 0,
    },
    infoWrapper: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    newTextWrapper: {
        flex: 0,
        borderRadius: 20,
        backgroundColor: COLORS.PRIMARY,
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 50,
        alignItems: 'center'
    },
    newText: {
        color: COLORS.LIGHT,
        fontSize: FONT_SIZES.SMALL,
        fontWeight: FONT_WEIGHTS.MEDIUM
    },
    price: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZES.SUB_HEADER,
        fontWeight: 'bold',
    },
    subtext: {
        fontSize: FONT_SIZES.BODY,
        color: COLORS.WHITE,
     //   fontWeight: FONT_WEIGHTS.LIGHT

    },
})