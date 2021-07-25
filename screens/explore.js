import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { deviceHeight, deviceWidth } from '../constants/dimensions';
import SearchBar from '../components/UI/searchBar';
import TrendingListItem from '../components/list/trendingListItem';
import NewsListItem from '../components/list/newsListItem';
import MoverListItem from '../components/list/moverListItem';


const newsData = require('../data/news/news.json');
const newsDataStr = JSON.stringify(newsData)
const newsDataParsed = JSON.parse(newsDataStr);


const ExploreScreen = props => {

    const [showHeader, setShowHeader] = useState(false);
    const [query, setQuery] = useState('');
    const _scrollViewRef = useRef();



    const handleQuery = query => {
        setQuery(query);
    }

    const handleSearchClear = () => {
        setQuery('');
    }


    const handleScroll = event => {
        if (!showHeader && event.nativeEvent.contentOffset.y > deviceHeight / 24) {
            setShowHeader(true)
            props.navigation.setOptions({
                headerTitle: props => {
                    return (
                        <Text style={{ color: '#000', fontSize: 15 }}>Browse</Text>
                    )
                }
            })
        }
        else if (showHeader && event.nativeEvent.contentOffset.y < deviceHeight / 24) {
            setShowHeader(false)
            props.navigation.setOptions({
                headerTitle: ''
            })
        }
    }



    return (
        <ScrollView stickyHeaderIndices={[1]} ref={_scrollViewRef} contentContainerStyle={styles.container} scrollEventThrottle={16} onScroll={handleScroll}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Browse</Text>
            </View>
            <View style={styles.searchbarContainer}>
            <SearchBar updateQuery={handleQuery} query={query} onClear={handleSearchClear} />
            </View>
            <Text style={styles.subTitle}>Trending Lists</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.listColumn}>
                    <View style={styles.listRow}>
                        <TrendingListItem listName={'IPO Access'} src={require('../assets/rb-lists/ipo.jpeg')} />
                        <TrendingListItem listName={'Crypto'} src={require('../assets/rb-lists/crypto.jpeg')} />
                        <TrendingListItem listName={'Bitcoin Family'} src={require('../assets/rb-lists/bitcoin_family.jpeg')} />
                        <TrendingListItem listName={'Technology'} src={require('../assets/rb-lists/technology.jpeg')} />
                        <TrendingListItem listName={'Tech, Media & Telecom'} src={require('../assets/rb-lists/tech_media_telecom.jpeg')} />
                        <TrendingListItem listName={'Real Estate'} src={require('../assets/rb-lists/real_estate.jpeg')} />
                        <TrendingListItem listName={'Automotive'} src={require('../assets/rb-lists/automotive.jpeg')} />
                        <TrendingListItem listName={'Business'} src={require('../assets/rb-lists/business.jpeg')} />
                        <TrendingListItem listName={'Sector ETFs'} src={require('../assets/rb-lists/sector.jpeg')} />
                        <TrendingListItem listName={'Finance'} src={require('../assets/rb-lists/finance.jpeg')} />
                    </View>
                    <View style={styles.listRow}>
                        <TrendingListItem listName={'100 Most Popular'} src={require('../assets/rb-lists/most_popular.jpeg')} />
                        <TrendingListItem listName={'Altcoins'} src={require('../assets/rb-lists/alt_coins.jpeg')} />
                        <TrendingListItem listName={'Upcoming Earnings'} src={require('../assets/rb-lists/upcoming_earnings.jpeg')} />
                        <TrendingListItem listName={'Energy'} src={require('../assets/rb-lists/energy.jpeg')} />
                        <TrendingListItem listName={'Energy & Water'} src={require('../assets/rb-lists/energy_water.jpeg')} />
                        <TrendingListItem listName={'Healthcare'} src={require('../assets/rb-lists/healthcare.jpeg')} />
                        <TrendingListItem listName={'Consumer Goods'} src={require('../assets/rb-lists/consumergoods.jpeg')} />
                        <TrendingListItem listName={'Banking'} src={require('../assets/rb-lists/banking.jpeg')} />
                        <TrendingListItem listName={'Food & Drink'} src={require('../assets/rb-lists/food_drink.jpeg')} />
                    </View>
                    <View style={styles.listRow}>
                        <TrendingListItem listName={'Cannabis'} src={require('../assets/rb-lists/cannabis.jpeg')} />
                        <TrendingListItem listName={'Daily Movers'} src={require('../assets/rb-lists/daily_movers.jpeg')} />
                        <TrendingListItem listName={'Ethereum Family'} src={require('../assets/rb-lists/ethereum_family.jpeg')} />
                        <TrendingListItem listName={'Pharma'} src={require('../assets/rb-lists/pharma.jpeg')} />
                        <TrendingListItem listName={'ETFs'} src={require('../assets/rb-lists/etfs.jpeg')} />
                        <TrendingListItem listName={'Growth and Value ETFs'} src={require('../assets/rb-lists/growth_value.jpeg')} />
                        <TrendingListItem listName={'Software'} src={require('../assets/rb-lists/software.jpeg')} />
                        <TrendingListItem listName={'Healthcare Supplies'} src={require('../assets/rb-lists/healthcare_supplies.jpeg')} />
                        <TrendingListItem listName={'China'} src={require('../assets/rb-lists/china.jpeg')} />
                        <TrendingListItem listName={'Consumer Services & Retail'} src={require('../assets/rb-lists/consumer_services.jpeg')} />
                    </View>
                </View>
            </ScrollView>
            {/* <View style={{ height: 1, width: '90%', backgroundColor: '#edf0f4', marginBottom: 24 }}></View> */}
            <View style={{ width: '90%' }}>
                {newsDataParsed.slice(0, 3).map((item, idx) => {
                    return (
                        <NewsListItem
                            key={idx}
                            source={item.source}
                            date={item.datetime}
                            uri={item.image}
                            percentage={(Math.random() * 10).toFixed(2)}
                            company={item.related}
                            content={item.headline}
                        />
                    )
                })}
            </View>
            <Text style={styles.subTitle}>Daily Movers</Text>
            <Text style={styles.subTitleDesc}>Stocks making the biggest moves today</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginTop: 24, marginBottom: 24 }}>
                <View style={styles.moversContainer}>
                    <MoverListItem />
                    <MoverListItem />
                    <MoverListItem />
                    <MoverListItem />
                    <MoverListItem />
                </View>
            </ScrollView>
            <View style={{ width: '90%' }}>
                {newsDataParsed.slice(3).map((item, idx) => {
                    return (
                        <NewsListItem
                            key={idx}
                            source={item.source}
                            date={item.datetime}
                            uri={item.image}
                            percentage={(Math.random() * 10).toFixed(2)}
                            company={item.related}
                            content={item.headline}
                        />
                    )
                })}
            </View>
        </ScrollView>
    )
}

export default ExploreScreen

export const screenOptions = navData => {
    return {
        title: navData.route.params?.title ? navData.route.params.title : '',
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    innerContainer: {
        width: '90%',
        alignItems: 'flex-start',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '90%',
        marginBottom: 6
    },
    moversContainer: {
        marginLeft: deviceWidth * 0.05, 
        flexDirection: 'row' 
    },
    searchbarContainer: {
        width: deviceWidth, 
        marginLeft: '10%', 
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 32,
        fontWeight: "400"
    },
    subTitle: {
        fontSize: 15,
        fontWeight: '700',
        marginTop: 18,
        marginBottom: 5,
        marginLeft: '10%',
        width: '100%',
        textAlign: 'left'
    },
    subTitleDesc: {
        fontSize: 13,
        marginLeft: '10%',
        width: '100%',
        textAlign: 'left'
    },
    listRow: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    listColumn: {
        marginBottom: 16,
        marginLeft: deviceWidth * 0.05
    }
})