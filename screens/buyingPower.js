import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { deviceWidth, deviceHeight } from '../constants/dimensions';
import { Entypo } from '@expo/vector-icons';

const BuyingPowerScreen = props => {


    const stockUpColor = '#00c806';

    useEffect(() => {
        props.navigation.setOptions({
            headerBackImage: () => <Entypo name={'chevron-thin-left'} style={{marginLeft: '6%'}} size={22} color={stockUpColor} />
        })
    }, [])



    const handleLearnMore = () => {
        return
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.topContainer}>
                        <Text style={styles.name}>Buying Power</Text>
                        <Text style={styles.amount}>$3.88</Text>
                        <View style={{ flexShrink: 1 }}>
                            <Text style={styles.description}>Buying Power represents the total value of assets you can purchase.
                        <TouchableWithoutFeedback onPress={handleLearnMore}>
                                    <Text style={{ color: '#00c806', fontWeight: '700' }}> Learn more</Text>
                                </TouchableWithoutFeedback>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.middleContainer}>
                        <View style={styles.fullWidthItemContainer}>
                            <Text style={styles.itemTitle}>Brokerage Cash</Text>
                            <Text style={styles.itemAmount}>$3.88</Text>
                        </View>
                        <View style={{...styles.fullWidthItemContainer, borderBottomWidth: 0}}>
                            <Text style={styles.itemTitle}>Buying Power</Text>
                            <Text style={{ ...styles.itemAmount, fontWeight: '600' }}>$3.88</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Check eligibility for more buying power</Text>
                <TouchableWithoutFeedback>
                    <View style={{ ...styles.button, backgroundColor: '#00c806' }}>
                        <Text style={{ color: '#fff', fontWeight: '700', fontSize: 15 }}>Deposit Funds</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default BuyingPowerScreen;


export const screenOptions = navData => {
    return {
        title: '',
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
        flex: 1,
    },
    scrollViewContainer: {
        width: deviceWidth,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexGrow: 1,
    },
    innerContainer: {
        width: deviceWidth * 0.88,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topContainer: {
        width: '100%',
        alignItems: 'flex-start',
        marginTop: 8,
    },
    name: {
        fontSize: 32,
        fontWeight: '500',
    },
    amount: {
        fontSize: 32,
        fontWeight: '500',
        marginTop: 2,
        textAlign: 'left',
        marginRight: 8
    },
    description: {
        fontSize: 15,
        lineHeight: 26,
        marginTop: 8,
    },
    middleContainer: {
        width: '100%',
        marginTop: 48
    },
    fullWidthItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 12,
        marginBottom: 12,
        borderBottomWidth: 0.5,
        borderColor: 'rgba(237, 240, 244, 0.7)'
    },
    itemTitle: {
        color: '#697277',
        fontSize: 13,
    },
    itemAmount: {
        fontSize: 15
    },
    footer: {
        width: deviceWidth,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20
    },
    footerText: {
        color: '#F6CA71',
        fontWeight: '600'
    },
    button: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 14,
        marginTop: 16,
        borderRadius: 50
    }
})
