import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { featuredResults } from '../exampleDB'
import FeaturedCard from './FeaturedCard';



export default function FeaturedHouses() {

    const featuredList = featuredResults.results.filter(item => item.isFeatured === true)
    const renderItem = ({ item }) => (
        <FeaturedCard item={item} />
    );

    return (
        <View style={{backgroundColor:'white',borderTopRightRadius:25,borderTopLeftRadius:25}}>
            <Text style={styles.headerText}>Featured Houses</Text>
            <FlatList
                data={featuredList}
                renderItem={renderItem}
                keyExtractor={(item,index) => index}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerText:{
        fontSize: 36,
        fontWeight: 'bold',
        color: '#333333',
        marginTop: 20,
        marginHorizontal:15,
        marginBottom: 20,
    
    }
})


