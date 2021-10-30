import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { deviceHeight, deviceWidth } from '../constants/dimensions';
import SearchBar from '../components/UI/searchBar';
import TrendingListItem from '../components/list/trendingListItem';
import NewsListItem from '../components/list/newsListItem';
import MoverListItem from '../components/list/moverListItem';
import * as WebBrowser from 'expo-web-browser';
import { dailyMovers } from '../data/news/movers';
import HeadNews from '../components/list/headNews';


const newsData = require('../data/news/news.json');
const newsDataStr = JSON.stringify(newsData)
const newsDataParsed = JSON.parse(newsDataStr);


const ExploreScreen = props => {

    const [showHeader, setShowHeader] = useState(false);
    const [query, setQuery] = useState('');
    const _scrollViewRef = useRef();

    const trendingItemsFirtsRow = [
        {
            name: 'IPO Access',
            imgSrc: require('../assets/rb-lists/ipo.jpeg')
        },
        {
            name: 'Crypto',
            imgSrc: require('../assets/rb-lists/crypto.jpeg')
        },
        {
            name: 'Bitcoin Family',
            imgSrc: require('../assets/rb-lists/bitcoin_family.jpeg')
        },
        {
            name: 'Technology',
            imgSrc: require('../assets/rb-lists/technology.jpeg')
        },
        {
            name: 'Tech, Media & Telecom',
            imgSrc: require('../assets/rb-lists/tech_media_telecom.jpeg')
        },
        {
            name: 'Real Estate',
            imgSrc: require('../assets/rb-lists/real_estate.jpeg')
        },
        {
            name: 'Automotive',
            imgSrc: require('../assets/rb-lists/automotive.jpeg')
        },
        {
            name: 'Business',
            imgSrc: require('../assets/rb-lists/business.jpeg')
        },
        {
            name: 'Sector ETFs',
            imgSrc: require('../assets/rb-lists/sector.jpeg')
        },
        {
            name: 'Finance',
            imgSrc: require('../assets/rb-lists/finance.jpeg')
        }
    ]

    const trendingItemsSecondRow = [
        {
            name: '100 Most Popular',
            imgSrc: require('../assets/rb-lists/most_popular.jpeg')
        },
        {
            name: 'Altcoins',
            imgSrc: require('../assets/rb-lists/alt_coins.jpeg')
        },
        {
            name: 'Upcoming Earnings',
            imgSrc: require('../assets/rb-lists/upcoming_earnings.jpeg')
        },
        {
            name: 'Energy',
            imgSrc: require('../assets/rb-lists/energy.jpeg')
        },
        {
            name: 'Energy & Water',
            imgSrc: require('../assets/rb-lists/energy_water.jpeg')
        },
        {
            name: 'Healthcare',
            imgSrc: require('../assets/rb-lists/healthcare.jpeg')
        },
        {
            name: 'Consumer Goods',
            imgSrc: require('../assets/rb-lists/consumergoods.jpeg')
        },
        {
            name: 'Banking',
            imgSrc: require('../assets/rb-lists/banking.jpeg')
        },
        {
            name: 'Food & Drink',
            imgSrc: require('../assets/rb-lists/food_drink.jpeg')
        },
    ]

    const trendingItemsThirdRow = [
        {
            name: 'Cannabis',
            imgSrc: require('../assets/rb-lists/cannabis.jpeg')
        },
        {
            name: 'Daily Movers',
            imgSrc: require('../assets/rb-lists/daily_movers.jpeg')
        },
        {
            name: 'Ethereum Family',
            imgSrc: require('../assets/rb-lists/ethereum_family.jpeg')
        },
        {
            name: 'Pharma',
            imgSrc: require('../assets/rb-lists/pharma.jpeg')
        },
        {
            name: 'ETFs',
            imgSrc: require('../assets/rb-lists/etfs.jpeg')
        },
        {
            name: 'Growth and Value ETFs',
            imgSrc: require('../assets/rb-lists/growth_value.jpeg')
        },
        {
            name: 'Software',
            imgSrc: require('../assets/rb-lists/software.jpeg')
        },
        {
            name: 'Healthcare Supplies',
            imgSrc: require('../assets/rb-lists/healthcare_supplies.jpeg')
        },
        {
            name: 'China',
            imgSrc: require('../assets/rb-lists/china.jpeg')
        },
        {
            name: 'Consumer Services & Retail',
            imgSrc: require('../assets/rb-lists/consumer_services.jpeg')
        },
    ]


    const handleQuery = query => {
        setQuery(query);
    }

    const handleSearchClear = () => {
        setQuery('');
    }

    const handleTrendingListItemPress = () => {
        console.log("trending item tapped")
    }

    const handleNewsItemPress = async (url) => {
        await WebBrowser.openBrowserAsync(url);
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
        <ScrollView stickyHeaderIndices={[1]}  contentContainerStyle={styles.container} scrollEventThrottle={16} onScroll={handleScroll}>
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
                    <View style={styles.listRow}>
                        {trendingItemsThirdRow.map((item, idx) => {
                            return (
                                <TrendingListItem key={idx} onPress={() => handleTrendingListItemPress()} listName={item.name} src={item.imgSrc} />
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
            <View style={styles.hr}></View>
            {/* <View style={{ height: 1, width: '90%', backgroundColor: '#edf0f4', marginBottom: 24 }}></View> */}
            <View style={{ width: '88%' }}>
                <HeadNews
                    onPress={() => handleNewsItemPress(newsDataParsed[0].url)}
                    source={newsDataParsed[0].source}
                    date={newsDataParsed[0].datetime}
                    uri={newsDataParsed[0].image}
                    content={newsDataParsed[0].headline}
                    percentage={(Math.random() * 10).toFixed(2)}
                    company={newsDataParsed[0].related}
                />
                {newsDataParsed.slice(1, 4).map((item, idx) => {
                    return (
                        <NewsListItem
                            explore
                            key={idx}
                            onPress={() => handleNewsItemPress(item.url)}
                            source={item.source}
                            date={item.datetime}
                            uri={item.image}
                            percentage={'+' + String((Math.random() * 10).toFixed(2))}
                            company={item.related}
                            content={item.headline}
                            color={'#00c806'}
                        />
                    )
                })}
            </View>
            <Text style={styles.subTitle}>Daily Movers</Text>
            <Text style={styles.subTitleDesc}>Stocks making the biggest moves today</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginTop: 24, marginBottom: 24 }}>
                <View style={styles.moversContainer}>
                    {
                        dailyMovers.map((item, idx) => {
                            return (
                                <MoverListItem change={item.percentage} key={idx} company={item.company} ticker={item.ticker} color={item.trend === 'up' ? '#00c806' : '#FF5000'} />
                            )
                        })
                    }
                </View>
            </ScrollView>
            <View style={{ width: '88%' }}>
                {newsDataParsed.slice(4).map((item, idx) => {
                    return (
                        <NewsListItem
                            explore
                            key={idx}
                            source={item.source}
                            onPress={() => handleNewsItemPress(item.url)}
                            date={item.datetime}
                            uri={item.image}
                            percentage={'+' + String((Math.random() * 10).toFixed(2))}
                            company={item.related}
                            content={item.headline}
                            color={'#00c806'}
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
        width: '88%',
        alignItems: 'flex-start',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '88%',
        marginBottom: 6
    },
    moversContainer: {
        marginLeft: deviceWidth * 0.06,
        flexDirection: 'row'
    },
    searchbarContainer: {
        width: deviceWidth,
        marginLeft: '12%',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 32,
        fontWeight: "500"
    },
    subTitle: {
        fontSize: 15,
        fontWeight: '700',
        marginTop: 18,
        marginBottom: 5,
        marginLeft: '12%',
        width: '100%',
        textAlign: 'left'
    },
    subTitleDesc: {
        fontSize: 13,
        marginLeft: '12%',
        width: '100%',
        textAlign: 'left'
    },
    listRow: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    listColumn: {
        marginBottom: 16,
        marginLeft: deviceWidth * 0.065,
    },
    hr: {
        borderWidth: 0.5,
        height: 1,
        width: '88%',
        borderColor: 'rgba(237, 240, 244, 0.7)',
        marginBottom: 16
    }
})