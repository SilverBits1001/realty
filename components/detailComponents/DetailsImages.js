import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ImageBackground } from 'react-native'
import { Icon } from 'react-native-elements'
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../../styleConstants'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { usdFormat } from '../../helpers/helpers'


export default function DetailsImages({ houseDetail }) {

    const [imgSelect, setImgSelect] = useState(0)
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate('Photos', { photos: houseDetail.home.photos, index: imgSelect, })} >
            <ImageBackground style={styles.cardImage} source={{ uri: houseDetail.home.photos[imgSelect].href.slice(0, -5) + "od.jpg" }} >
                <View style={styles.priceWrapper}>

                    <Text style={styles.price} >{usdFormat(houseDetail.home.mortgage.estimate.monthly_payment)} /Month</Text>
                </View>
                <View horizontal style={styles.scrollViewWrapper}>
                    {houseDetail.home.photos.slice(0, 5).map((photo, index) => {
                        return (
                            <View key={index}
                                style={styles.borderWrapper}>
                                <TouchableOpacity
                                    style={styles.imageWrapper}
                                    activeOpacity={.5}
                                    onPress={() => {
                                        { index === 4 ? navigation.navigate('Photos', { photos: houseDetail.home.photos, index: imgSelect, }) : setImgSelect(index)
                                    }
                                    }}
                                >
                                <ImageBackground style={{ ...styles.previewImage, }} source={{ uri: photo.href }} >
                                    {index === 4 &&
                                        <>
                                            <View
                                                style={styles.overlay}>
                                            </View>
                                            <Icon
                                                name='plus'
                                                type='font-awesome-5'
                                                size={10}
                                                color={COLORS.WHITE}
                                            />
                                            <Text style={styles.photoCount}>
                                                {houseDetail.home.photo_count}
                                            </Text>
                                        </>
                                    }
                                </ImageBackground>
                            </TouchableOpacity>
                            </View>
                )
                    })}
            </View>
            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', position: 'absolute', bottom: 20 }}>
                    <Text style={styles.price} >{usdFormat(houseDetail.home.list_price)}</Text>
                    <Text style={styles.price} >{usdFormat(houseDetail.home.mortgage.estimate.monthly_payment)}/m</Text>

                </View> */}
        </ImageBackground>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    priceWrapper: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'center'
    },
    price: {
        color: COLORS.PRIMARY,
        fontWeight: FONT_WEIGHTS.BOLD,
        fontSize: FONT_SIZES.BODY,
        backgroundColor: COLORS.WHITE,
        padding: 5,
        borderRadius: 7,
        overflow: 'hidden',
    },
    scrollViewWrapper: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
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
    imageWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden',
    },
    borderWrapper: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        marginHorizontal: 3,
        height: 65,
        width: 65,
        borderRadius: 7,
        padding: 3
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    photoCount: {
        color: COLORS.WHITE,
        fontWeight: FONT_WEIGHTS.BOLD,
        fontSize: FONT_SIZES.CAPTION
    }
})