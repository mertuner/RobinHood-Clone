import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { deviceWidth, deviceHeight } from '../constants/dimensions';
import HeadListItem from '../components/list/profileHeadListItem';
import ProfileSettingListItem from '../components/list/profileSettingListItem';

const ProfileScreen = props => {

    const [showHeader, setShowHeader] = useState(false);


    const settings = [
        {
            name: 'Free Stocks',
            desc: 'Invite Friends, Past Invites'
        },
        {
            name: 'Investing',
            desc: 'Balances, DRIP, Gold'
        },
        {
            name: 'Transfers',
            desc: 'Deposits, Withdrawals'
        },
        {
            name: 'Statements and History',
            desc: 'Documents, Taxes, Account Activity'
        },
        {
            name: 'Security and Privacy',
            desc: 'Password, Two-Factor Authentication, Data Sharing'
        },
        {
            name: 'Settings',
            desc: 'Notifications, Gold, Account'
        },
        {
            name: 'Help',
            desc: 'Support,Disclosures'
        },
    ]


    const investingAmount = '$32,465.54';


    const handleScroll = event => {
        if (!showHeader && event.nativeEvent.contentOffset.y > deviceHeight / 24) {
            setShowHeader(true)
            props.navigation.setOptions({
                headerTitle: props => {
                    return (
                        <View style={styles.headerTitleContainer}>
                            <Text style={{ marginBottom: 4 }}>{investingAmount}</Text>
                            <Text style={{ color: '#97a4b2', fontSize: 12 }}>Total Value</Text>
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
        <ScrollView contentContainerStyle={styles.container}  scrollEventThrottle={16} onScroll={handleScroll}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Total Value</Text>
                <Text style={styles.investingText}>{investingAmount}</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.headListContainer}>
                    <HeadListItem
                        color={'#F6CA71'} 
                        src={require('../assets/rb-icons/rb_gold.jpg')}
                        desc={'Get Gold for premium tools & research.'}
                        bottomText={'TRY ROBINHOOD GOLD'}
                    />
                    <HeadListItem
                        color={'#00c806'} 
                        src={require('../assets/rb-icons/reward.jpg')}
                        desc={'Invite friends, get a gift stock. Certain limitations apply.'}
                        bottomText={'GET IT NOW'}
                    />
                    <HeadListItem
                        color={'#00c806'} 
                        src={require('../assets/rb-icons/fb.jpg')}
                        desc={'See the most popular stocks on Robinhood.'}
                        bottomText={'VIEW LIST'}
                    />
                </View>
            </ScrollView>
            {
                settings.map((item, idx) => {
                    return (
                        <ProfileSettingListItem 
                            title={item.name}
                            desc={item.desc}
                            key={idx}
                        />
                    )
                })
            }
            <View style={styles.accountNoBox}>
                <Text style={styles.accountNoTitle}>Account No.</Text>
                <Text style={styles.accountNoText}>(RHS) 111222333</Text>
            </View>
            <Text style={styles.logOutText}>Log Out</Text>
        </ScrollView>
    )
}

export default ProfileScreen;

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
    titleContainer: {
        alignItems: 'flex-start',
        width: '88%',
        marginBottom: 6
    },
    headerTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headListContainer: {
        marginLeft: deviceWidth * 0.065,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 18,
        marginBottom: 6
    },
    accountNoBox: {
        width: '88%',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingVertical: 20,
    }, 
    title: {
        fontSize: 32,
        fontWeight: "500"
    },
    investingText: {
        fontSize: 32,
        fontWeight: '500',
        marginTop: 8,
        width: '100%',
        textAlign: 'left'
    },
    accountNoTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: '#697277',
    },
    accountNoText: {
        color: '#697277',
        marginTop: 6,
        fontSize: 13
    },
    logOutText: {
        marginTop: 48,
        marginBottom: 48,
        textAlign: 'center',
        color: '#00c806',
        fontWeight: '700'
    }
})