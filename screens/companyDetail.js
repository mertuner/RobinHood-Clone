import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { deviceWidth, deviceHeight } from '../constants/dimensions';
import { Feather, Entypo } from '@expo/vector-icons';
import { LineChart } from 'react-native-svg-charts';
import DateBar from '../components/dateBar/dateBar';
import StatsContainer from '../components/detailScreenElements/statsContainer';
import NewsListItem from '../components/list/newsListItem';
import * as WebBrowser from 'expo-web-browser';
import RatingContainer from '../components/detailScreenElements/ratingContainer';
import MorningStarContainer from '../components/detailScreenElements/morningStarContainer';
import RelatedListContainer from '../components/detailScreenElements/relatedListContainer';
import AlsoOwnContainer from '../components/detailScreenElements/alsoOwnContainer';


const companyDetailScreen = props => {


    const [details, setDetails] = useState({});


    const [periodData, setPeriodData] = useState();

    const [showHeader, setShowHeader] = useState(false);

    const [graphData, setGraphData] = useState([]);


    const setChartData = period => {
        switch (period) {
            case '1D':
                setGraphData(details.intradayData);
                setPeriodData({
                    title: 'Today',
                    change: '$1.84 (1.54%)',
                    ahTitle: 'After-Hours',
                    ahChange: '$0.2600 (0.18%)'
                });
                break;
            case '1W':
                setGraphData(details.intradayData);
                setPeriodData({
                    title: 'Past Week',
                    change: '$1.84 (1.54%)',
                    ahTitle: 'After-Hours',
                    ahChange: '$0.2600 (0.18%)'
                });
                break;
            case '1M':
                setGraphData(details.intradayData);
                setPeriodData({
                    title: 'Past Month',
                    price: '3,217.92 (2.20%)',
                });
                break;
            case '3M':
                setGraphData(details.intradayData);
                setPeriodData({
                    title: 'Past 3 Months',
                    price: '6,129.31 (13.24%)',
                });
                break;
            case '1Y':
                setGraphData(details.intradayData);
                setPeriodData({
                    title: 'Past Year',
                    price: '11,987.29 (32.20%)',
                });
                break;
            case 'ALL':
                setGraphData(details.intradayData);
                setPeriodData({
                    title: '5Y',
                    price: '23,981.14 (311.65%)',
                    change: '(311.65%)'
                });
                break;
            default:
                break;
        }
    }


    useEffect(() => {
        setDetails({ ...props.route.params.info });
        setPeriodData({
            title: 'Today',
            change: '1.84 (1.54%)',
            ahTitle: 'After-Hours',
            ahChange: '0.2600 (0.18%)'
        });
    }, [])


    useEffect(() => {
        setGraphData(details.intradayData);
    }, [details])



    const handleScroll = event => {
        if (!showHeader && event.nativeEvent.contentOffset.y > deviceHeight / 24) {
            setShowHeader(true)
            props.navigation.setOptions({
                headerTitle: props => {
                    return (
                        <View style={styles.headerTitleContainer}>
                            <Text style={{ marginBottom: 4 }}>{details.price}</Text>
                            <Text style={{ color: '#97a4b2', fontSize: 12 }}>{details.ticker}</Text>
                        </View>
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

    const handleNewsItemPress = async (url) => {
        await WebBrowser.openBrowserAsync(url);
    }



    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} onScroll={handleScroll} scrollEventThrottle={16}>
                <View style={styles.topContainer}>
                    <Text style={styles.ticker}>{details?.ticker}</Text>
                    <Text style={styles.name}>{details?.name}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>${details?.price}</Text>
                        <Feather name={'arrow-right-circle'} size={22} style={{ marginTop: 4 }} />
                    </View>
                    <View>
                        <View style={styles.changeamountContainer}>
                            <Entypo name={'triangle-up'} size={24} color={'#00c806'} />
                            <View style={styles.changeAmountTextContainer}>
                                <Text style={styles.changeDollarAmountText}>${periodData?.change}</Text>
                                <Text style={styles.changeTimeText}>{periodData?.title}</Text>
                            </View>
                        </View>
                        <View style={styles.ahChangeamountContainer}>
                            <Entypo name={'triangle-down'} size={24} color={'#FF5000'} />
                            <View style={styles.changeAmountTextContainer}>
                                <Text style={styles.ahChangeDollarAmountText}>${periodData?.ahChange}</Text>
                                <Text style={styles.changeTimeText}>{periodData?.ahTitle}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.graphContainer}>
                    <LineChart
                        style={{ width: '100%', height: '100%', }}
                        data={graphData ? graphData : []}
                        svg={{ stroke: '#00c806', strokeWidth: 1.7 }}
                        contentInset={{ top: 0, bottom: 0 }}
                        showGrid={false}
                    />
                </View>
                <View style={styles.dateBarContainer}>
                    <DateBar setChartData={setChartData} />
                </View>
                <StatsContainer />
                <View style={styles.newsContainer}>
                <Text style={styles.newsTitle}>News</Text>
                {details.news ? details.news.map((item, idx) => {
                    return (
                        <NewsListItem
                        key={idx}
                        onPress={() => handleNewsItemPress(item.url)}
                        source={item.source}
                        date={item.datetime}
                        uri={item.image}
                        percentage={(Math.random() * 10).toFixed(2)}
                        company={item.related}
                        content={item.headline}
                    />
                    )
                }) : null}
                </View> 
                <RatingContainer />
                <MorningStarContainer />
                <RelatedListContainer />
                <AlsoOwnContainer />
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.footerInnerContainer}>
                        <View style={styles.footerTextContainer}>
                            <Text style={styles.volumeTitleText}>Today's Volume</Text>
                            <Text style={styles.volumeText}>64,765,398</Text>
                        </View>
                        <TouchableWithoutFeedback>
                    <View style={{ ...styles.button, backgroundColor: '#00c806' }}>
                        <Text style={{ color: '#fff', fontWeight: '700', fontSize: 15 }}>Trade</Text>
                    </View>
                </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    )
}

export default companyDetailScreen;

export const screenOptions = navData => {
    return {
        title: navData.route.params?.title ? navData.route.params.title : '',
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {
            marginLeft: deviceWidth * 0.05,
        },
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1
    },
    scrollViewContainer: {
        width: deviceWidth,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexGrow: 1
    },
    headerTitleContainer: {
        alignItems: 'center'
    },
    topContainer: {
        alignItems: 'flex-start',
        marginLeft: '6%'
    },
    graphContainer: {
        width: deviceWidth,
        alignItems: 'center',
        height: 225,
        marginTop: 64,
        marginBottom: 24
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    changeamountContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 18,
    },
    dateBarContainer: {
        width: '88%',
        marginLeft: '6%',
        marginTop: 52
    },
    ahChangeamountContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    changeAmountTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 2
    },
    changeDollarAmountText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#00c806'

    },
    ahChangeDollarAmountText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#FF5000'
    },
    changeTimeText: {
        fontSize: 13,
        marginLeft: 4
    },
    ticker: {
        fontSize: 13,
        fontWeight: '600',
        marginTop: 16,
        marginBottom: 12
    },
    name: {
        fontSize: 32,
        fontWeight: '500',
    },
    price: {
        fontSize: 32,
        fontWeight: '500',
        marginTop: 2,
        textAlign: 'left',
        marginRight: 8
    },
    newsContainer: {
        marginTop: 40,
        width: '88%',
        marginLeft: '6%'
    },
    newsTitle: {
        fontSize: 24,
        marginBottom: 16,
        fontWeight: '500'
    },
    footer: {
        width: deviceWidth,
        height: 84,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    footerInnerContainer: {
        flexDirection: 'row',
        width: '88%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,

    },
    footerTextContainer: {
        alignItems: 'flex-start',
    },
    volumeTitleText: {
        fontSize: 13,
        fontWeight: '700',
        marginBottom: 6
    },
    volumeText: {
        fontSize: 15,
    },   
    button: {
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 50
    }
})
