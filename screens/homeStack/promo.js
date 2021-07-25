import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedback, Share } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/headerButton/headerButton';
import { Ionicons } from '@expo/vector-icons';
import { deviceWidth } from '../../constants/dimensions';
import * as WebBrowser from 'expo-web-browser';



const promo = props => {


    const learnMoreUrl = 'https://robinhood.com/us/en/support/articles/invite-friends-get-free-stock/';

    const closeModal = () => {
        props.navigation.goBack();
    }

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: `Join Robinhood with my link and we'll both a get free stock 🤝 https://join.robinhood.com/diamondhands`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };


    const handleLearnMore = async () => {
        await WebBrowser.openBrowserAsync(learnMoreUrl);
    }


    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    iconSet={Ionicons}
                    iconName={'close-outline'}
                    onPress={closeModal}
                    color={'#00c806'}
                />
            </HeaderButtons>,
            headerRight: () => <Text style={{ color: '#00c806', fontWeight: '600', fontSize: 15, marginRight: deviceWidth * 0.05 }}>Past</Text>
        }
        )
    }, [])


    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.topInnerContainer}>
                    <Image style={{ width: '70%', height: 245, marginTop: 16 }} source={require('../../assets/rb-images/promo.jpeg')} />
                    <View style={styles.innerContainer}>
                        <Text style={styles.title}>Invite a friend. Get a free stock.</Text>
                        <Text style={styles.titleDesc}>Invite friends to Robinhood. Once they sign up and link their bank account, you'll both a get a free stock.</Text>
                        <View style={styles.bulletContainer}>
                            <View style={styles.bulletTextContainer}>
                                <Image style={{ width: 18, height: 18, marginTop: 16, marginRight: '5%' }} source={require('../../assets/starburst-four-point.png')} />
                                <View>
                                    <Text style={styles.bulletTitle}>100% chance to get a free stock</Text>
                                    <Text style={styles.bulletDescription}>Each time a friend signs up and links their bank account, a new stock appears in your account (up to $500). Certain limitations apply. <TouchableWithoutFeedback onPress={handleLearnMore}><Text style={{ color: '#00c806', fontWeight: '700' }}>Learn more</Text></TouchableWithoutFeedback></Text>
                                </View>
                            </View>
                            <View style={styles.bulletTextContainer}>
                                <Image style={{ width: 18, height: 18, marginTop: 16, marginRight: '5%' }} source={require('../../assets/starburst-four-point.png')} />
                                <View>
                                    <Text style={styles.bulletTitle}>Unlimited invites</Text>
                                    <Text style={styles.bulletDescription}>Invite as many friends as you want and recieve up to $500 in free stocks.</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <TouchableWithoutFeedback>
                    <View style={{ ...styles.button, backgroundColor: '#00c806' }}>
                        <Text style={{ color: '#fff', fontWeight: '700', fontSize: 15 }}>Invite Contacts</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={onShare}>
                    <View style={{ ...styles.button, backgroundColor: '#fff' }}>
                        <Text style={{ color: '#00c806', fontWeight: '700', fontSize: 15 }}>Share link</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default promo;

export const screenOptions = navData => {
    return {
        title: 'Promo',
        headerShown: true,
        headerTitleStyle: {
            fontSize: 15,
            fontWeight: '400'
        },
        headerStyle: {
            backgroundColor: '#fff',
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            },
        },
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1
    },
    scrollViewContainer: {
        width: deviceWidth,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexGrow: 1
    },
    topInnerContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainer: {
        width: '100%',
        // flex: 1,
    },
    title: {
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 12
    },
    titleDesc: {
        lineHeight: 22,
        fontSize: 15
    },
    bulletContainer: {
        width: '90%',
    },
    bulletTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
    },
    bulletTitle: {
        fontSize: 15,
        fontWeight: '700'
    },
    bulletDescription: {
        fontSize: 15,
        lineHeight: 26,
    },
    footer: {
        width: deviceWidth,
        height: 160,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    button: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 14,
        marginTop: 8,
        borderRadius: 50
    }
})
