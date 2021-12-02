import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { deviceHeight, deviceWidth } from '../../constants/dimensions';
import { ScrollView } from 'react-native';
import Message from '../../components/list/message';



const MessageScreen = props => {

    const [companyInfo, setCompanyInfo] = useState({...props.route.params.info})

    const getRandomRgb = () => {
        let num = Math.round(0xffffff * Math.random());
        let r = num >> 16;
        let g = num >> 8 & 255;
        let b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }

    const [shadowColor, setShadowColor] = useState(getRandomRgb())


    useEffect(() => {
        props.navigation.setOptions({
            headerBackImage: () => <Entypo style={{ marginLeft: '6%', padding: 6 }} name={'chevron-thin-left'} size={22} color={'#000'} />,
            headerTitle: props => {
                return (
                    <View style={styles.headerTitleContainer}>
                        <View style={{ ...styles.tickerContainer, backgroundColor: shadowColor}}>
                            <View style={{ width: '100%', height: '100%', borderRadius: 50, top: -2, left: -2, backgroundColor: '#000', position: 'absolute', zIndex: -1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.ticker}>{companyInfo.ticker}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 4}}>
                        <Text style={{ color: '#000', fontSize: 14}}>{companyInfo.company}</Text>
                        <Entypo style={{ marginLeft: 2 }} name={'chevron-right'} size={14} color={'#97a4b2'} />
                        </View>
                    </View>
                )
            }
        })
    }, [])




    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.innerContainer}>
                <Message ticker={companyInfo.ticker}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default MessageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollViewContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: deviceWidth,
        flexGrow: 1
    },
    innerContainer: {
        width: deviceWidth * 0.94
    },  
    headerTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tickerContainer: {
        width: 40,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ticker: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 12
    },
})

export const screenOptions = navData => {
    return {
        title: navData.route.params?.title ? navData.route.params.title : '',
        headerBackTitleVisible: false,
        headerStyle: {
            height: deviceHeight / 8
        }
    }
}