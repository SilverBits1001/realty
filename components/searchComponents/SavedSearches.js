import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../../styleConstants'
import { Button, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { removeSaved } from '../../src/features/savedSearch/savedSearchSlice'

const RecentSearch = ({ city, state, title, dispatch, index }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.recentSearch}>
            <View style={styles.textWrapper}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.subText}>{city}, {state}</Text>
            </View>
            <View style={styles.iconWrapper}>
                <Button
                    onPress={() => {
                        dispatch(removeSaved(index))
                    }}
                    type='clear'
                    icon={
                        <Icon
                            style={styles.locationIcon}
                            color={COLORS.DARK_GREY}
                            name='times'
                            type='font-awesome-5'
                            size={FONT_SIZES.SMALL}
                        />
                    } />


            </View>
        </TouchableOpacity>
    )
}

/* 
            <RecentSearch title='Condos that Allow pets' city='Houston' state='Texas' />
            <RecentSearch title='1 Bedrooms near me' city='New York' state='New York' />
 */


export default function SavedSearches() {

    const newSaved = useSelector((state) => state.savedSearch)
    console.log(newSaved);

    const dispatch = useDispatch()
    if (newSaved.length === 0) {
        return null
    }

    return (

        <View style={styles.componentWrapper}>
            <Text style={styles.heading}>Saved Searches</Text>
            {newSaved.map((item, index) => {
                return (
                    <RecentSearch dispatch={dispatch} index={index} key={index} title={item.title} city={item.city} state={item.state} />

                )
            })}

        </View>

    )
}

const styles = StyleSheet.create({
    componentWrapper: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.075,
        shadowRadius: 5,
        elevation: 1,

        backgroundColor: COLORS.LIGHT,
        borderRadius: 15,
        marginHorizontal: 15,
        marginVertical: 10,
        padding: 10,
    },
    heading: {
        fontSize: FONT_SIZES.SMALL,
        marginTop: 5,
        marginBottom: 5,
        fontWeight: FONT_WEIGHTS.BOLD,
        color: COLORS.DARK_GREY
    },
    recentSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,

    },
    iconWrapper: {
    },
    homeIcon: {
        padding: 10,
    },
    locationIcon: {

    },
    textWrapper: {
        marginHorizontal: 10
    },
    titleText: {
        textTransform: 'capitalize',
        fontSize: FONT_SIZES.BODY,
        color: COLORS.PRIMARY,
        fontWeight: FONT_WEIGHTS.MEDIUM
    },
    subText: {
        color: COLORS.LIGHT_GREY
    }
})