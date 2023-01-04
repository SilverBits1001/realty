import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { COLORS } from '../styleConstants'

export default function CurrentLocation() {
    return (
        <View style={styles.componentWrapper}>
            <Text style={styles.currentTitle}>Current location</Text>
            <View style={styles.container}>

                <Icon
                    name='map-marker-alt'
                    type='font-awesome-5'
                    color={COLORS.blue}
                    size={22}
                    style={styles.marker}
                />

                <Text style={styles.location}>Los Angeles, California</Text>
                <Icon
                    name='angle-down'
                    type='font-awesome-5'
                    color={COLORS.blue}
                    size={18}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    componentWrapper:{
        marginHorizontal:10,
        marginTop:10
    },
    currentTitle:{
        fontWeight:'600',
        fontSize:16,
        color:'#999'
    },
    container:{
        flexDirection:'row',
        paddingVertical:5


    },
    marker:{
        marginRight:10
    },
    location:{
        fontSize:18,
        color:"#333",
        fontWeight:'600',
        marginHorizontal:5
    }
})