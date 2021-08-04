import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { deviceWidth } from '../../constants/dimensions';
import TrendingListItem from '../list/trendingListItem';

const relatedListContainer = () => {


    const trendingItemsFirtsRow = [
        {
            name: '100 Most Popular',
            imgSrc: require('../../assets/rb-lists/most_popular.jpeg')
        },
        {
            name: 'Technology',
            imgSrc: require('../../assets/rb-lists/technology.jpeg')
        },
    ]

    const trendingItemsSecondRow = [
        {
            name: 'Software',
            imgSrc: require('../../assets/rb-lists/software.jpeg')
        },
    ]

    const handleTrendingListItemPress = () => {
        console.log("trending item tapped")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Related Lists</Text>
            <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
                <View style={styles.listColumn}>
                    <View style={styles.listRow}>
                        {trendingItemsFirtsRow.map((item, idx) => {
                            return (
                                <TrendingListItem key={idx} onPress={() => handleTrendingListItemPress()} listName={item.name} src={item.imgSrc} />
                            )
                        })}
                    </View>
                    <View style={styles.listRow}>
                        {trendingItemsSecondRow.map((item, idx) => {
                            return (
                                <TrendingListItem key={idx} onPress={() => handleTrendingListItemPress()} listName={item.name} src={item.imgSrc} />
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default relatedListContainer

const styles = StyleSheet.create({
    container: {
        width: deviceWidth
    },
    listRow: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    listColumn: {
        marginBottom: 16,
        marginLeft: deviceWidth * 0.065,
    },
    title: {
        fontSize: 24,
        marginBottom: 18,
        fontWeight: '500',
        marginTop: 32,
        marginLeft: '6%'
    }
})
