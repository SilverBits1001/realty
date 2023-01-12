import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  Icon } from 'react-native-elements'
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../styleConstants'
import * as Location from 'expo-location'
import { getCityAndStateFromCoordinates } from '../helpers/helpers'

export default function CurrentLocation() {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    // getCityAndStateFromCoordinates()


    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            let cityState = await getCityAndStateFromCoordinates(location.coords.latitude, location.coords.longitude)
            setCity(cityState.data[0].name)
            setState(cityState.data[0].state)
        })();

    }, []);





    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.componentWrapper}>
            <Text style={styles.currentTitle}>Current location </Text>
            <View style={styles.container}>

                <Icon
                    name='map-marker-alt'
                    type='font-awesome-5'
                    color={COLORS.PRIMARY}
                    size={18}
                    style={styles.marker}
                />

                {city && state && <Text style={styles.location}>{city}, {state}</Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    componentWrapper: {
        marginHorizontal: 15,
        marginTop: 10
    },
    currentTitle: {
        fontWeight: FONT_WEIGHTS.MEDIUM,
        fontSize: FONT_SIZES.CAPTION,
        color: COLORS.GREY
    },
    container: {
        flexDirection: 'row',
        paddingVertical: 5


    },
    marker: {
        marginRight: 5
    },
    location: {
        fontSize: FONT_SIZES.BODY,
        color: COLORS.DARK_GREY,
        fontWeight: FONT_WEIGHTS.MEDIUM,
        marginHorizontal: 5
    }
})