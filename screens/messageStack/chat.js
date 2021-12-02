import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { deviceHeight, deviceWidth } from '../../constants/dimensions';
import MessageItem from '../../components/list/messageItem';

const ChatScreen = props => {
    const [showHeader, setShowHeader] = useState(false);


    const chatData = [
        {
            company: 'NVIDIA',
            ticker: 'NVDA',
            message: `Awesome! 😀 Because you owned 0.350699 shares of NVDA on 6/9, you've recieved a dividend payment of $0.06`,
            isRead: true,
            date: '5d'
        },
        {
            company: 'Duolingo',
            ticker: 'DUOL',
            message: `Duolingo Inc. (DUOL) has plans to go public. You can now find DUOL in the IPO Access list.`,
            isRead: false,
            date: '6d'

        },
        {
            company: 'Disney',
            ticker: 'DIS',
            message: `OK! 😁 Your order to sell 1.000387 shares of DIS has been filled at an average price of $175.93 per share.
            Your order is complete.`,
            isRead: false,
            date: '6d'
        },
        {
            company: 'Ford Motor',
            ticker: 'F',
            message: `Good news! 🤗 Your order to sell 1 share of F has been filled at an average price of $15.00 per share.`,
            isRead: true,
            date: '6d'
        },
        {
            company: 'BioNTech SE',
            ticker: 'BNTX',
            message: `Good news! 🤗 Your order to sell 1.150139 shares of BNTX has been filled at an average price of $211.50 per share.
            Your order is complete.`,
            isRead: false,
            date: '1w'
        },
        {
            company: 'Tesla',
            ticker: 'TSLA',
            message: `Awesome! 🤗 Your order to sell 0.500769 shares of TSLA has been filled at an average price of $597.44 per share.
            Your order is complete.
            `,
            isRead: true,
            date: '1w'
        },
        {
            company: 'PayPal',
            ticker: 'PYPL',
            message: `Fantastic! 🎊 Your order to sell 0.60059 shares of PYPL has been filled at an average price of $272.12 per share.
            Your order is complete.`,
            isRead: false,
            date: '1w'
        },
        {
            company: 'AMD',
            ticker: 'AMD',
            message: `Good news! 😁 Your order to sell 1 share of AMD has been filled at an average price of $80.73 per share.
            Your order is complete.`,
            isRead: false,
            date: '2w'
        },
        {
            company: 'Amazon',
            ticker: 'AMZN',
            message: `Awesome! 😎 Your order to sell 0.076646 shares of AMZN has been filled at an average price of $3,391.96 per share.
            Your order is complete.`,
            isRead: true,
            date: '2w'
        },
        {
            company: 'Apple',
            ticker: 'AAPL',
            message: `Yay! 😊 Your order to sell 2.000531 shares of AAPL has been filled at an average price of $130.40 per share.`,
            isRead: true,
            date: '2w'
        },
    ]


    const goToMessage = (company, ticker) => {
        props.navigation.navigate('Message', {
            info: {
                company: company,
                ticker: ticker
            }
        })
    }



    const handleScroll = event => {
        if (!showHeader && event.nativeEvent.contentOffset.y > deviceHeight / 24) {
            setShowHeader(true)
            props.navigation.setOptions({
                headerTitle: props => {
                    return (
                        <Text style={{ color: '#000', fontSize: 15 }}>Messages</Text>
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

    const getRandomRgb = () => {
        let num = Math.round(0xffffff * Math.random());
        let r = num >> 16;
        let g = num >> 8 & 255;
        let b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }


    return (
        <ScrollView scrollEventThrottle={16} contentContainerStyle={styles.container} onScroll={handleScroll}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Messages</Text>
            </View>
            {chatData.map((item, idx) => {
                return (
                    <TouchableWithoutFeedback key={idx} onPress={() => goToMessage(item.company, item.ticker)}>
                        <View>
                            <MessageItem
                                isRead={item.isRead}
                                company={item.company}
                                ticker={item.ticker}
                                message={item.message}
                                shadowColor={getRandomRgb()}
                                date={item.date}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                )
            })}
        </ScrollView>
    )
}

export default ChatScreen;

export const screenOptions = navData => {
    return {
        title: navData.route.params?.title ? navData.route.params.title : '',
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '90%',
        marginBottom: 12
    },
    title: {
        fontSize: 32,
        fontWeight: "500",
        marginLeft: '6.5%',
    },
})
