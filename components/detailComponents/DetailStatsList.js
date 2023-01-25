import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../../styleConstants'
import { ScrollView } from 'react-native'



export default function DetailStatsList({ houseDetail }) {

    const stats = [
        {
            name: 'beds',
            icon: 'bed'
        },
        {
            name: 'baths',
            icon: 'sink'
        },
        {
            name: 'sqft',
            icon: 'ruler-combined'
        },
        {
            name: 'garage',
            icon: 'warehouse'
        },
        {
            name: 'pool',
            icon: 'swimming-pool'
        },
    ]

    return (
        <ScrollView horizontal
            style={{ flexDirection: 'row' }}
            showsHorizontalScrollIndicator={false}

        >
            {stats.map((item, index) => {
                return (
                    <View key={index}>
                        {houseDetail.home.description[item.name] &&
                            <View style={styles.statsWrapper}>
                                <Icon
                                    name={item.icon}
                                    type='font-awesome-5'
                                    size={FONT_SIZES.SMALL}
                                    color={COLORS.PRIMARY}
                                />
                                <Text style={styles.stats}> {houseDetail.home.description[item.name]} {item.name}
                                </Text>
                            </View>
                        }
                    </View>

                )
            })}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    statsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.LIGHT, //need to change
        borderRadius: 15,
        marginVertical: 0,
        marginRight: 10,
        padding: 10,
        
    },
    stats: {
        color: COLORS.PRIMARY,
        fontSize: FONT_SIZES.SMALL,
        fontWeight: FONT_WEIGHTS.BOLD,
        textTransform: 'capitalize'

    },
})




/*
         
            {houseDetail.home.description.beds &&
                <View style={styles.statsWrapper}>
                    <Icon
                        name='bed'
                        type='font-awesome-5'
                        size={FONT_SIZES.SMALL}
                        color={COLORS.PRIMARY}
                    />
                    <Text style={styles.stats}> {houseDetail.home.description.beds}</Text>
                </View>}


            {houseDetail.home.description.baths &&
                <View style={styles.statsWrapper}>
                    <Icon

                        name='sink'
                        type='font-awesome-5'
                        size={FONT_SIZES.SMALL}
                        color={COLORS.PRIMARY}
                    />
                    <Text style={styles.stats}> {houseDetail.home.description.baths}</Text>
                </View>}


            <View style={styles.statsWrapper}>
                <Icon

                    name='ruler-combined'
                    type='font-awesome-5'
                    size={FONT_SIZES.SMALL}
                    color={COLORS.PRIMARY}
                />
                <Text style={styles.stats} > {Math.floor(houseDetail.home.description.sqft)} sqft</Text>
            </View>

            <View style={styles.statsWrapper}>
                <Icon
                    name='warehouse'
                    type='font-awesome-5'
                    size={FONT_SIZES.SMALL}
                    color={COLORS.PRIMARY}
                />
                <Text style={styles.stats}> {houseDetail.home.description.garage}</Text>

            </View>

            <View style={styles.statsWrapper}>
                <Icon

                    name='swimming-pool'
                    type='font-awesome-5'
                    size={FONT_SIZES.SMALL}
                    color={COLORS.PRIMARY}
                />
                <Text style={styles.stats} > Pool</Text>
            </View>
*/