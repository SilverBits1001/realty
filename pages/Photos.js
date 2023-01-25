import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../styleConstants'
import { Image } from 'react-native'
import DetailsImages from '../components/detailComponents/DetailsImages'
import DetailsMap from '../components/detailComponents/DetailsMap'
import { FlatList } from 'react-native'
import { Modal } from 'react-native'
import { Pressable } from 'react-native'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export default function Photos({ route }) {

    const { photos, index } = route.params
    const [imgSelect, setImgSelect, houseDetail] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)



    console.log(photos[0].href)
    return (

        <SafeAreaView style={styles.componentWrapper}>

            <Modal
                visible={modalVisible}
                style={{ justifyContent: 'center', alignItems: 'center' }}
                animationType="zoom"
                onRequestClose={() => setModalVisible(false)}>
                <SafeAreaView>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Icon
                            name='times'
                            type='font-awesome-5'
                            size={FONT_SIZES.SMALL}
                            color={COLORS.PRIMARY}
                        />
                    </TouchableOpacity>
                    {imgSelect && <Image
                        source={{ uri: imgSelect.slice(0, -5) + "od.jpg" }}
                        style={{
                            width: '100%',
                            height: undefined,
                            aspectRatio: 3 / 2,
                            marginVertical: 15
                        }} />}

                </SafeAreaView>
                <Text style={styles.photoCount}>{1} / {photos.length}</Text>

            </Modal>



            <FlatList
                data={photos}
                renderItem={(item) =>
                    <Pressable onPress={(index) => {
                        setModalVisible(true)
                        setImgSelect(item.item.href)
                    }}>
                        <Image
                            source={{ uri: item.item.href.slice(0, -5) + "od.jpg" }}
                            style={{
                                width: '100%',
                                height: undefined,
                                aspectRatio: 3 / 2,
                                marginVertical: 10
                            }} />
                    </Pressable>
                }
            />


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    componentWrapper: {
        flex: 1,

        backgroundColor: COLORS.WHITE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    photoCount: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZES.BODY,
        fontWeight: FONT_WEIGHTS.BOLD
    }
})