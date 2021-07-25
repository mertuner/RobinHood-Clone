import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import { deviceWidth, deviceHeight } from '../constants/dimensions';

const CashScreen = () => {


    const handleLearnMore = () => {
        return
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.topInnerContainer}>
                    <Image style={{ width: '100%', height: 335 }} source={require('../assets/rb-images/wallet.jpeg')} />
                    <Text style={styles.title}>Cash Management</Text>
                    <Text style={styles.titleDescription}>Spend, get your paycheck,pay bills, invest, earn interest, and more-no catch, no commitment</Text>
                        <View style={styles.bulletContainer}>
                            <View style={styles.bulletTextContainer}>
                                <Image style={{ width: 60, height: 60, marginRight: '5%' }} source={require('../assets/rb-icons/flower.jpeg')} />
                                <View style={{flexShrink: 1}}>
                                    <Text style={styles.bulletTitle}>Earn 0.30% APY</Text>
                                    <Text style={styles.bulletDescription}>
                                        Your cash is moved to banks in our program that pay you 0.30% APY.* Like all variable rates, this could go up or down over time.
                                    <TouchableWithoutFeedback onPress={handleLearnMore}>
                                            <Text style={{ color: '#00c806', fontWeight: '400' }}> Learn more</Text></TouchableWithoutFeedback></Text>
                                </View>
                            </View>
                            <View style={styles.bulletTextContainer}>
                                <Image style={{ width: 60, height: 60, marginRight: '5%' }} source={require('../assets/rb-icons/lock.jpeg')} />
                                <View style={{flexShrink: 1}}>
                                    <Text style={styles.bulletTitle}>FDIC Insurance</Text>
                                    <Text style={styles.bulletDescription}>Your cash is in the program banks is also eligible for up to $1.25 million of FDIC insurance, or up to $250K per bank, subject to FDIC rules.<TouchableWithoutFeedback onPress={handleLearnMore}><Text style={{ color: '#00c806', fontWeight: '400' }}> Learn more</Text></TouchableWithoutFeedback></Text>
                                </View>
                            </View>
                            <View style={styles.bulletTextContainer}>
                                <Image style={{ width: 60, height: 60, marginRight: '5%' }} source={require('../assets/rb-icons/card.jpg')} />
                                <View style={{flexShrink: 1}}>
                                    <Text style={styles.bulletTitle}>Full Flexibility</Text>
                                    <Text style={styles.bulletDescription}>Get direct deposit, pay bills, and use your Robinhood debit card virtually anywhere MAstercard® is accepted around the world.<TouchableWithoutFeedback onPress={handleLearnMore}><Text style={{ color: '#00c806', fontWeight: '400' }}> Learn more</Text></TouchableWithoutFeedback></Text>
                                </View>
                            </View>
                            <View style={styles.bulletTextContainer}>
                                <Image style={{ width: 60, height: 60, marginRight: '5%' }} source={require('../assets/rb-icons/printer.jpg')} />
                                <View style={{flexShrink: 1}}>
                                    <Text style={styles.bulletTitle}>75,000+ ATMs</Text>
                                    <Text style={styles.bulletDescription}>Don't pay fees at any of the 75,000+ ATMs in our network.<TouchableWithoutFeedback onPress={handleLearnMore}><Text style={{ color: '#00c806', fontWeight: '400' }}> Learn more</Text></TouchableWithoutFeedback></Text>
                                </View>
                        </View>
                    </View>
                </View>
                <View style={styles.disclosureContainer}>
                    <Text style={{color: '#86919e', fontSize: 13, lineHeight: 24}}><Text style={{color: '#69707a', fontWeight: '600'}}>*Cash Management is added feature to your Robinhood Financial LLC brokerage account. </Text>
                        The Annual Percentage Yield (APY) paid by program banks is 0.30% as of March of,16,2020. APY might change
                        at any time and at the program banks' discretion. Neither Robinhood Financial, LLC nor any its
                        affiliates are banks. The debit card is issued by Sutton Bank, member FDIC, pursuant to licence by MasterCard®
                        International, Incorporated. Please keep in mind other fees may still apply. You can check out
                        our <Text style={{color: '#00c806'}}>Free Schedule</Text> to learn more. Robinhood Financial LLC, member SIPC and FINRA.
                    </Text>
                    <Text style={styles.disclosureText}>Disclosures</Text>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <TouchableWithoutFeedback>
                    <View style={{ ...styles.button, backgroundColor: '#00c806' }}>
                        <Text style={{ color: '#fff', fontWeight: '700', fontSize: 15 }}>Get Started</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default CashScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: deviceWidth,
        height: deviceHeight / 20,
        zIndex: 12,
        backgroundColor: '#fff',
    },
    scrollViewContainer: {
        width: deviceWidth,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexGrow: 1
    },
    topInnerContainer: {
        width: '90%',
        marginTop: 64,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 34,
        fontWeight: '500'
    },
    titleDescription: {
        width: '90%',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        lineHeight: 28
    },
    bulletContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 10
    },
    bulletTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
    },
    bulletTitle: {
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 6
    },
    bulletDescription: {
        fontSize: 15,
        lineHeight: 26,
    },
    disclosureContainer: {
        width: '90%',
        flexShrink: 1,
        marginTop: 32
    },
    disclosureText: {
        color: '#00c806',
        marginVertical: 32,
        fontWeight: '500',
        textAlign: 'left',
        width: '90%'
    },
    footer: {
        width: deviceWidth,
        height: 84,
        justifyContent: 'flex-start',
        alignItems: 'center',
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
