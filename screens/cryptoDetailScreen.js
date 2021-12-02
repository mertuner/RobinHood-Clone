import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { deviceWidth, deviceHeight } from '../constants/dimensions';
import { Feather, Entypo, Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/UI/headerButton/headerButton';
import { LineChart } from 'react-native-svg-charts';
import CryptoDateBar from '../components/dateBar/cryptoDateBar';
import NewsListItem from '../components/list/newsListItem';
import * as WebBrowser from 'expo-web-browser';
import * as shape from 'd3-shape';
import Collapsible from 'react-native-collapsible';



const cryptoDetailScreen = props => {

    const cryptoDownColor = '#FF5A87';
    const cryptoUpColor = '#CDF460';

    const [details, setDetails] = useState({ ...props.route.params.info });



    const [periodData, setPeriodData] = useState();

    const [showHeader, setShowHeader] = useState(false);

    const [graphData, setGraphData] = useState([]);


    const newsChange = details.up ? '+1.54' : '-1.54';

    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleCollapsing = () => {
        setIsCollapsed(!isCollapsed);
    }


    const setChartData = period => {
        switch (period) {
            case 'LIVE':
                setGraphData(details.intradayData);
                setPeriodData({
                    title: 'Past Hour',
                    change: '1.84 (1.54%)',
                    ahTitle: 'After-Hours',
                    ahChange: '$0.2600 (0.18%)'
                });
                break;
            case '1D':
                setGraphData(details.intradayData);
                setPeriodData({
                    title: 'Today',
                    change: '1.84 (1.54%)',
                    ahTitle: 'After-Hours',
                    ahChange: '$0.2600 (0.18%)'
                });
                break;
            case '1W':
                setGraphData(details.intradayData);
                setPeriodData({
                    title: 'Past Week',
                    change: '1.84 (1.54%)',
                });
                break;
            case '1M':
                setGraphData(details.intradayData);
                setPeriodData({
                    title: 'Past Month',
                    change: '3.21 (2.20%)',
                });
                break;
            case '3M':
                setGraphData(details.intradayData);
                setPeriodData({
                    title: 'Past 3 Months',
                    change: '6.12 (13.24%)',
                });
                break;
            case '1Y':
                setGraphData(details.intradayData);
                setPeriodData({
                    title: 'Past Year',
                    change: '11.9 (32.20%)',
                });
                break;
            case 'ALL':
                setGraphData(details.intradayData);
                setPeriodData({
                    title: 'Past 5 Years',
                    change: '23.4 (51.65%)',
                });
                break;
            default:
                break;
        }
    }


    useEffect(() => {
        props.navigation.setOptions({
            headerBackImage: () => <Entypo style={{ marginLeft: deviceWidth * 0.03 }} name={'chevron-thin-left'} size={22} color={details.up ? cryptoUpColor : cryptoDownColor} />,
            headerRight: () => (
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            iconSet={Feather}
                            iconName={'share'}
                            iconSize={24}
                            onPress={() => { }}
                            color={details.up ? cryptoUpColor : cryptoDownColor}
                        />
                    </HeaderButtons>
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            iconSet={Ionicons}
                            iconSize={24}
                            iconName={'checkmark-circle'}
                            onPress={() => { }}
                            color={details.up ? cryptoUpColor : cryptoDownColor}
                        />
                    </HeaderButtons>
                </View>
            )
        })
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
                            <Text style={{ marginBottom: 4, color: '#fff' }}>{details.price}</Text>
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
            <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={styles.scrollViewContainer} onScroll={handleScroll} scrollEventThrottle={16}>
                <View style={styles.topContainer}>
                    <Text style={styles.ticker}>{details?.ticker}</Text>
                    <Text style={styles.name}>{details?.name}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>${details?.price}</Text>
                        {/* <Feather name={'arrow-right-circle'} size={22} style={{ marginTop: 4 }} /> */}
                    </View>
                    <View>
                        <View style={styles.changeamountContainer}>
                            <View style={styles.changeAmountTextContainer}>
                                <Text style={{ ...styles.changeDollarAmountText, color: details.up ? cryptoUpColor : cryptoDownColor }}>${periodData?.change}</Text>
                                <Text style={styles.changeTimeText}>{periodData?.title}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.graphContainer}>
                    <LineChart
                        style={{ width: '100%', height: '100%', }}
                        data={graphData ? graphData : []}
                        svg={{ stroke: details.up ? cryptoUpColor : cryptoDownColor, strokeWidth: 1.7 }}
                        contentInset={{ top: 12, bottom: 12 }}
                        showGrid={false}
                    >
                        <LineChart
                            style={{ width: '100%', height: '100%', }}
                            data={graphData ? graphData : []}
                            svg={{ stroke: details.up ? `rgba(205, 244, 96, 0.35)` : `rgba(255, 90, 135, 0.35)`, strokeWidth: 6 }}
                            contentInset={{ top: 12, bottom: 12 }}
                            curve={shape.curveNatural}
                            showGrid={false}
                        />
                    </LineChart>
                </View>
                <View style={styles.dateBarContainer}>
                    <CryptoDateBar setChartData={setChartData} color={details.up ? cryptoUpColor : cryptoDownColor} />
                </View>
                <View style={styles.aboutContainer}>
                    <Text style={styles.title}>About</Text>
                    {isCollapsed ? <Text style={styles.content} numberOfLines={3}>{details.about.description}</Text> : null}
                    <Collapsible collapsed={isCollapsed}>
                        <Text style={styles.content}>{details.about.description}</Text>
                    </Collapsible>
                    <TouchableWithoutFeedback onPress={handleCollapsing}>
                        <Text style={{ ...styles.showMore, color: details.up ? cryptoUpColor : cryptoDownColor }}>{isCollapsed ? 'Show More' : 'Show Less'}</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.newsContainer}>
                <Text style={styles.newsTitle}>News</Text>
                {details.news ? details.news.map((item, idx) => {
                    return (
                        <NewsListItem
                        textColor={'#fff'}
                        key={idx}
                        onPress={() => handleNewsItemPress(item.url)}
                        source={item.source}
                        date={item.datetime}
                        uri={item.image}
                        percentage={newsChange}
                        company={item.related}
                        content={item.headline}
                        color={details.up ? cryptoUpColor : cryptoDownColor}
                        borderBottomColor={'rgba(237, 240, 244, 0.1)'}

                    />
                    )
                }) : null}
                </View> 
            </ScrollView>
            <View style={styles.footer}>
                <TouchableWithoutFeedback>
                    <View style={{ ...styles.button, backgroundColor: details?.up ? cryptoUpColor : cryptoDownColor }}>
                        <Text style={{ color: '#000', fontWeight: '700', fontSize: 15 }}>Buy</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default cryptoDetailScreen;

export const screenOptions = navData => {
    return {
        title: navData.route.params?.title ? navData.route.params.title : '',
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {
            marginLeft: deviceWidth * 0.05,
        },
        headerStyle: {
            backgroundColor: '#100a20',
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            },
        }
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        backgroundColor: '#100a20'
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
        marginLeft: '6%',
    },
    graphContainer: {
        width: deviceWidth,
        alignItems: 'center',
        height: deviceHeight / 2.85,
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
        marginTop: 8,
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
    },
    ahChangeDollarAmountText: {
        fontSize: 13,
        fontWeight: '600',
    },
    changeTimeText: {
        fontSize: 13,
        marginLeft: 4,
        color: '#fff'
    },
    ticker: {
        fontSize: 13,
        fontWeight: '600',
        marginTop: 16,
        marginBottom: 12,
        color: '#fff'
    },
    name: {
        fontSize: 32,
        fontWeight: '500',
        color: '#fff'
    },
    price: {
        fontSize: 32,
        fontWeight: '500',
        marginTop: 2,
        textAlign: 'left',
        marginRight: 8,
        color: '#fff'

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
    },
    disclosureContainer: {
        width: '88%',
        marginLeft: '6%',
        marginTop: 24,
        marginBottom: 36
    },
    disclosureContent: {
        color: '#697277',
        fontSize: 13,
        lineHeight: 22
    },
    disclosureBtn: {
        fontSize: 13,
        fontWeight: '600',
        marginTop: 12
    },
    footer: {
        width: deviceWidth,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 20
    },
    button: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 14,
        marginTop: 16,
        borderRadius: 50
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        fontWeight: '500',
        marginTop: 32,
        color: '#fff'
    },
    content: {
        textAlign: 'left',
        lineHeight: 24,
        fontSize: 15,
        color: '#fff'
    },
    showMore: {
        fontSize: 13,
        fontWeight: '600',
        marginTop: 12
    },
    aboutContainer: {
        width: '88%',
        marginLeft: '6%',
    },
    newsContainer: {
        marginTop: 40,
        width: '88%',
        marginLeft: '6%'
    },
    newsTitle: {
        fontSize: 24,
        marginBottom: 16,
        fontWeight: '500',
        color: '#fff'
    },
})
