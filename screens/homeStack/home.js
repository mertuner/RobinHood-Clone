import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Feather, Entypo } from '@expo/vector-icons';
import { deviceWidth, deviceHeight } from '../../constants/dimensions';
import { LineChart } from 'react-native-svg-charts';
import DateBar from '../../components/dateBar/dateBar';
import HomeScreenNews from '../../components/homeScreenElements/homeScreenNews';
import List from '../../components/list/list';
import ListItem from '../../components/list/listItem';
import FollowingContainer from '../../components/homeScreenElements/followingContainer';
import { stockData, cyrptoData } from '../../data/dumb';
import { accountData } from '../../data/account/dumb';




import { LogBox } from 'react-native';
LogBox.ignoreLogs(["ReactNativeFiberHostComponent: Calling getNode() on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release.",
    "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead."
]);




const HomeScreen = props => {


    const [scrollEnabled, setScrollEnabled] = useState(true);

    const [periodData, setPeriodData] = useState({
        title: 'Today',
        price: 817.453
    });

    const [graphData, setGraphData] = useState(accountData.today.chartDataPoints);


    const [showHeader, setShowHeader] = useState(false);

    const investingAmount = '$32,465.54';

    const _scrollViewRef = useRef();

    const onDragStart = () => {
        setScrollEnabled(false);
    }

    const onDragEnd = () => {
        setScrollEnabled(true);
    }


    const openRewardModal = () => {
        props.navigation.navigate('Promo');
    }


    const setChartData = period => {
        switch (period) {
            case '1D':
                setGraphData(accountData.today.chartDataPoints);
                setPeriodData({
                    title: 'Today',
                    price: '817.453 (0.61%)',
                });
                break;
            case '1W':
                setGraphData(accountData.week.chartDataPoints);
                setPeriodData({
                    title: 'Past Week',
                    price: '2312.12 (1.20%)',
                });
                break;
            case '1M':
                setGraphData(accountData.month.chartDataPoints);
                setPeriodData({
                    title: 'Past Month',
                    price: '3,217.92 (2.20%)',
                });
                break;
            case '3M':
                setGraphData(accountData.threeMonths.chartDataPoints);
                setPeriodData({
                    title: 'Past 3 Months',
                    price: '6,129.31 (13.24%)',
                });
                break;
            case '1Y':
                setGraphData(accountData.year.chartDataPoints);
                setPeriodData({
                    title: 'Past Year',
                    price: '11,987.29 (32.20%)',
                });
                break;
            case 'ALL':
                setGraphData(accountData.all.chartDataPoints);
                setPeriodData({
                    title: 'All Time',
                    price: '23,981.14 (311.65%)',
                    change: '(311.65%)'
                });
                break;
            default:
                break;
        }
    }


    const handleScroll = event => {
        if (!showHeader && event.nativeEvent.contentOffset.y > deviceHeight / 24) {
            setShowHeader(true)
            props.navigation.setOptions({
                headerTitle: props => {
                    return (
                        <View style={styles.headerTitleContainer}>
                            <Text style={{ marginBottom: 4 }}>{investingAmount}</Text>
                            <Text style={{ color: '#97a4b2', fontSize: 12 }}>Investing</Text>
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

    return (
        <ScrollView ref={_scrollViewRef} scrollEnabled={scrollEnabled} contentContainerStyle={styles.container} scrollEventThrottle={16} onScroll={handleScroll}>
            <View style={styles.innerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Investing</Text>
                    <TouchableWithoutFeedback onPress={openRewardModal}>
                        <View style={styles.rewardContainer}>
                            <Feather name={'gift'} size={14} color={'#00c806'} />
                            <Text style={styles.rewardsText}>Rewards</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <Text style={styles.investingText}>{investingAmount}</Text>
                <View style={styles.changeamountContainer}>
                    <Entypo name={'triangle-up'} size={24} color={'#00c806'} />
                    <View style={styles.changeAmountTextContainer}>
                        <Text style={styles.changeDollarAmountText}>${periodData.price}</Text>
                        <Text style={styles.changeTimeText}>{periodData.title}</Text>
                    </View>
                </View>
                <View style={styles.graphContainer}>
                    <LineChart
                        style={{ width: '100%', height: '100%', }}
                        data={graphData}
                        svg={{ stroke: '#00c806', strokeWidth: 2 }}
                        contentInset={{ top: 0, bottom: 0 }}
                        showGrid={false}
                    />
                </View>
                <DateBar setChartData={setChartData}/>
                <View style={styles.graphBottomBorder}></View>
                <View style={styles.bpContainer}>
                    <Text>Buying Power</Text>
                    <View style={styles.bpAmountContainer}>
                        <Text style={styles.bpAmountText}>$782.24</Text>
                        <Feather name="chevron-right" size={20} color={'#97a4b2'} style={{ marginRight: -8 }} />
                    </View>
                </View>
                <HomeScreenNews />
            </View>
            <View style={styles.listViewContainer}>
                <Text style={styles.listTitleText}>Lists</Text>
                <List
                    emoji={"👾"}
                    listAmount={cyrptoData.length}
                    listName={'Cryptos to Watch'}
                >
                    <ListItem onDragStart={onDragStart} onDragEnd={onDragEnd} data={cyrptoData} parentRef={_scrollViewRef} />
                </List>
                <List
                    emoji={"⚡️"}
                    listAmount={stockData.length}
                    listName={'My First List'}
                >
                    <ListItem onDragStart={onDragStart} onDragEnd={onDragEnd} data={stockData} stock parentRef={_scrollViewRef} />
                </List>
            </View>
            <View style={styles.newListContainer}>
                <View style={styles.newListBox}>
                    <Text style={styles.newListIcon}>+</Text>
                </View>
                <Text style={styles.newListText}>Create New List</Text>
            </View>
            <FollowingContainer />
            <Text style={styles.disclosureText}>Disclosures</Text>
        </ScrollView>
    )
}

export default HomeScreen


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
        alignItems: 'center',
    },
    headerTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%'
    },
    title: {
        fontSize: 32,
        fontWeight: "400"
    },
    rewardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 14,
        backgroundColor: '#EBF9EA',
        paddingVertical: 8,
        borderRadius: 32
    },
    rewardsText: {
        color: '#00c806',
        fontSize: 13,
        marginLeft: 4,
        fontWeight: '700'
    },
    investingText: {
        fontSize: 32,
        fontWeight: '500',
        marginTop: 8,
        width: '100%',
        textAlign: 'left'
    },
    graphContainer: {
        width: deviceWidth,
        alignItems: 'center',
        height: 170,
        marginTop: 64,
        marginBottom: 24
    },
    graphBottomBorder: {
        marginTop: 14,
        height: 1,
        width: '100%',
        backgroundColor: '#ebeff4'
    },
    changeamountContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 18,
    },
    changeAmountTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 2
    },
    changeDollarAmountText: {
        fontWeight: '500',
        color: '#00c806'
    },
    changeTimeText: {
        fontSize: 13,
        marginLeft: 4
    },
    bpContainer: {
        width: '100%',
        marginVertical: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bpAmountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bpAmountText: {
        marginRight: 4
    },
    listViewContainer: {
        marginTop: 42,
        width: '100%',
    },
    listTitleText: {
        fontSize: 24,
        fontWeight: '500',
        marginLeft: '5%',
        marginBottom: 26
    },
    newListContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    newListBox: {
        paddingTop: 11,
        paddingBottom: 14,
        lineHeight: 0,
        paddingHorizontal: 14,
        borderRadius: 4,
        backgroundColor: '#EBF9EA'
    },
    newListIcon: {
        color: '#00c806',
        marginVertical: 0,
        paddingVertical: 0,
        fontSize: 38,
        fontWeight: '300'
    },
    newListText: {
        marginLeft: 16,
        fontSize: 15
    },
    disclosureText: {
        color: '#00c806',
        marginVertical: 32,
        textAlign: 'left',
        width: '90%'
    }
})
