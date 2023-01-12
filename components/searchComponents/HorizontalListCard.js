import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { houseResults } from '../../exampleDB';
import { COLORS, FONTS, FONT_SIZES, FONT_WEIGHTS } from '../../styleConstants';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button, Icon } from 'react-native-elements';
import { usdFormat } from '../../helpers/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { updateLiked } from '../../src/features/liked/likedSlice';


export default function HorizontalListCard({ item, price }) {


    const [liked, setLiked] = useState(false)

    const likedStore = useSelector((state) => state.liked)
    const dispatch = useDispatch()
    const isIncluded = likedStore.includes(JSON.stringify(item)) //checks if item is already in array in store




    return (

        <TouchableOpacity activeOpacity={0.5} style={styles.cardWrapper}>
            <Image style={styles.cardImage} source={{ uri: item.imgSrc }} />
            <View style={styles.infoWrapper}>
                <Text style={styles.price} >{price}</Text>

                <Text style={styles.address}>{item.streetAddress}</Text>

                <Text style={styles.address}>{item.city}, {item.state}</Text>
                <View style={{ flexDirection: 'row', }}>
                    <View style={styles.statsWrapper}>
                        <Icon
                            name='bed'
                            type='font-awesome-5'
                            size={12}
                        />
                        <Text> {item.bedrooms}</Text>

                    </View>
                    <View style={styles.statsWrapper}>
                        <Icon

                            name='sink'
                            type='font-awesome-5'
                            size={12}
                        />
                        <Text> {item.bathrooms}</Text>
                    </View>
                    <View style={styles.statsWrapper}>
                        <Icon

                            name='ruler-combined'
                            type='font-awesome-5'
                            size={12}
                        />
                        <Text style={styles.size}> {Math.floor(item.lotAreaValue)} {item.lotAreaUnit}</Text>
                    </View>
                </View>


            </View>
            <Button
                type='clear'
                onPress={() => {
                    setLiked(!liked)
                    console.log('this is ', liked);
                    dispatch(updateLiked(item))
                }}
                icon={
                    <Icon size={20} style={styles.locationIcon}
                        name={isIncluded ? 'heart-fill' : 'heart'}
                        type='octicon' color={isIncluded ? COLORS.RED : COLORS.GREY} />
                }
                containerStyle={{}}
                buttonStyle={styles.buttonStyle}
            />


        </TouchableOpacity>
    )



}

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: 'row',
        borderRadius: 15,
        marginTop: 10,
        marginHorizontal: 10,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.075,
        shadowRadius: 5,
        elevation: 1,
        backgroundColor: COLORS.WHITE
    },
    cardImage: {
        width: 150,
        height: 100,
        borderRadius: 7
    },
    infoWrapper: {
        justifyContent: 'space-between',
        paddingLeft: 15,
        flex: 5
    },
    price: {
        fontWeight: FONT_WEIGHTS.BOLD,
        fontSize: FONT_SIZES.BODY,
        color: COLORS.DARK_GREY
        },
    heart: {
        flex: 1,
        alignSelf: 'center'
    },
    buttonStyle: {

    },
    statsWrapper: {
        flexDirection: 'row',
        margin: 5,

    },
    size: {
        textTransform: 'capitalize'
    },
    address:{
        color:COLORS.LIGHT_GREY
    }
})