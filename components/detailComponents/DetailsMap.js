import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Icon } from 'react-native-elements'
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../../styleConstants'



export default function DetailsMap({ houseDetail }) {
    return (

        <MapView
            initialRegion={{
                latitude: houseDetail.home.location.address.coordinate.lat,
                longitude: houseDetail.home.location.address.coordinate.lon,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }}
            style={{ flex: 1, width: '100%', aspectRatio: 1.5, height: undefined }} >
            <Marker
                coordinate={{
                    latitude: houseDetail.home.location.address.coordinate.lat,
                    longitude: houseDetail.home.location.address.coordinate.lon,
                }}
                title={ houseDetail.home.location.address.line}
            >
                <Icon

                    name='map-marker-alt'
                    type='font-awesome-5'
                    size={FONT_SIZES.HEADER}
                    color={COLORS.PRIMARY}
                />
            </Marker>
        </MapView>
    )
}

const styles = StyleSheet.create({})