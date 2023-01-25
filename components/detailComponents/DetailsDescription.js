import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../../styleConstants'

export default function DetailsDescription({houseDetail}) {
    const [expanded, setExpanded] = useState(false)

    return (
        <View style={styles.componentWarpper}>
            <Text style={styles.descriptionHeader}>Description</Text>
            <Text numberOfLines={expanded ? null : 4} style={styles.descriptionBody}>{houseDetail.home.description.text}</Text>

            <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => setExpanded(!expanded)}>
                <Text style={{
                    color: COLORS.PRIMARY,
                    fontWeight: FONT_WEIGHTS.BOLD,
                    fontSize: FONT_SIZES.CAPTION,
                }} >
                    {expanded ? "See Less" : "See More"}
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    componentWarpper:{
        marginVertical:15
    },
    descriptionHeader: {
        fontSize: FONT_SIZES.BODY,
        fontWeight: FONT_WEIGHTS.BOLD,
        marginBottom:0,
    },
    descriptionBody: {
        fontSize: FONT_SIZES.SMALL,
        padding:5
    }
})