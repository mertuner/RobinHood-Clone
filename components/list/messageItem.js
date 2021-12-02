import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const messageItem = props => {
    return (
        <View style={styles.container}>
            <View style={{ ...styles.isReadContainer }}>
                <View style={{ ...styles.isReadDot, backgroundColor: props.isRead ? '#fff' : '#00c806' }}>
                </View>
            </View>
            <View style={styles.innerContainer}>
                <View style={{ ...styles.tickerContainer, backgroundColor: props.shadowColor }}>
                    <View style={{ width: '100%', height: '100%', borderRadius: 50, top: -2, left: -2, backgroundColor: '#000', position: 'absolute', zIndex: -1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.ticker}>{props.ticker}</Text>
                    </View>
                </View>
                <View style={{ flexShrink: 1 }}>
                    <View style={styles.contentContainer}>
                        <View style={styles.companyContainer}>
                            <Text style={{ ...styles.company, fontWeight: props.isRead ? '400' : '700' }}>{props.company}</Text>
                            <Text style={{ ...styles.date, color: props.isRead ? '#697277' : '#000' }}>{props.date}</Text>
                        </View>
                        <Text style={{ color: props.isRead ? '#697277' : '#000' }} numberOfLines={1}>{props.message}</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default messageItem

const styles = StyleSheet.create({
    container: {
        width: '95%',
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    innerContainer: {
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        flexShrink: 1,
        width: '100%',
        borderBottomColor: 'rgba(237, 240, 244, 0.7)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tickerContainer: {
        width: 48,
        height: 48,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    contentContainer: {
        width: '100%',

    },
    companyContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 6

    },
    isReadContainer: {
        width: '6%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    isReadDot: {
        width: 8,
        height: 8,
        borderRadius: 50,
    },
    ticker: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 12
    },
    date: {
        fontWeight: '500',
        fontSize: 13
    }
})
