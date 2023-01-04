import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../styleConstants'
import { Button, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'


const RecentSearch = ({ city, state, title }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.recentSearch}>
            <View style={styles.textWrapper}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.subText}>{city}, {state}</Text>
            </View>
            <View style={styles.iconWrapper}>
                <Button
                    type='clear'
                    icon={
                        <Icon style={styles.locationIcon} name='bookmark' type='octicon' color={COLORS.blue} />
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
    return (

        <View style={styles.componentWrapper}>
            <Text style={styles.heading}>Saved Searches</Text>
            <RecentSearch title='Apartnments in SD' city='Los Angeles' state='California' />
        </View>

    )
}

const styles = StyleSheet.create({
    componentWrapper: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginHorizontal: 15,
        marginVertical: 25,
        padding: 15,
    },
    heading: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#333'
    },
    recentSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        borderTopColor: '#bbb',
        borderTopWidth: 1

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
        fontSize: 18,
        color: '#333',
        fontWeight: '500'
    },
    subText: {
        color: '#777'
    }
})