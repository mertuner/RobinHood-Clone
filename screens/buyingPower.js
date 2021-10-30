import React, {useEffect} from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { deviceWidth, deviceHeight } from '../constants/dimensions';
import { Entypo } from '@expo/vector-icons';

const BuyingPowerScreen = props => {


    const stockUpColor = '#00c806';

    useEffect(() => {
        props.navigation.setOptions({
            headerBackImage: () => <Entypo name={'chevron-thin-left'} size={22} color={stockUpColor}/>
        })
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                    <View style={styles.topContainer}>
                        <Text style={styles.name}>Buying Power</Text>
                        <Text style={styles.amount}>$1296.79</Text>
                    </View>
            </ScrollView>
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
        flex: 1
    },
    scrollViewContainer: {
        width: deviceWidth,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexGrow: 1,
    },
    topContainer: {
        alignItems: 'flex-start',
        marginLeft: '6%',
        marginTop: 8
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
})
