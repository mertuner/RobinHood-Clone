import React from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { deviceWidth } from '../../constants/dimensions'

const alsoOwnContainer = () => {

    const handlePress = () => {
        return

    }

    return (
        
            <View style={styles.container}>
                <Text style={styles.title}>People Also Own</Text>
                <Text style={styles.content}>This list is based on the portfolios of people on
                RobinHood who own AAPL. It's not an investment recommendation.
            </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <View style={styles.innerScrollContainer}>
                    <TouchableWithoutFeedback onPress={handlePress}>
                        <View style={styles.itemContainer}>
                            <Text style={styles.company}>Tesla</Text>
                            <View style={styles.bottomContainer}>
                                <Text style={{ ...styles.ticker, color: '#00c806' }}>TSLA</Text>
                                <Text style={{ ...styles.percentage, color: '#00c806' }}>+0.81%</Text>
                            </View>
                        </View>
                        </TouchableWithoutFeedback>      
                        <TouchableWithoutFeedback onPress={handlePress}>
                        <View style={styles.itemContainer}>
                            <Text style={styles.company}>Nvidia</Text>
                            <View style={styles.bottomContainer}>
                                <Text style={{ ...styles.ticker, color: '#00c806' }}>NVDA</Text>
                                <Text style={{ ...styles.percentage, color: '#00c806' }}>+2.14%</Text>
                            </View>
                        </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={handlePress}>
                        <View style={styles.itemContainer}>
                            <Text style={styles.company}>GameStop</Text>
                            <View style={styles.bottomContainer}>
                                <Text style={{ ...styles.ticker, color: '#00c806' }}>GME</Text>
                                <Text style={{ ...styles.percentage, color: '#00c806' }}>+3.11%</Text>
                            </View>
                        </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={handlePress}>
                        <View style={styles.itemContainer}>
                            <Text style={styles.company}>Uber</Text>
                            <View style={styles.bottomContainer}>
                                <Text style={{ ...styles.ticker, color: '#00c806' }}>UBER</Text>
                                <Text style={{ ...styles.percentage, color: '#00c806' }}>+0.27%</Text>
                            </View>
                        </View>
                        </TouchableWithoutFeedback>
                    </View>

                </ScrollView>
            </View>
    )
}

export default alsoOwnContainer

const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
    },
    itemContainer: {
        width: 140,
        height: 180,
        borderRadius: 6,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowOffset: {
            height: 4,
            width: 1.5
        },
        shadowRadius: 4,
        elevation: 3,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop: 24,
        paddingBottom: 18,
        paddingLeft: 16,
        marginRight: 12,
        marginTop: 24,
        marginBottom: 8
    },
    bottomContainer: {
        width: '90%',
    },
    innerScrollContainer: {
        marginLeft: deviceWidth * 0.065,
        flexDirection: 'row'
    },
    title: {
        fontSize: 24,
        marginBottom: 12,
        fontWeight: '500',
        marginTop: 32,
        marginLeft: '6%'
    },
    content: {
        marginLeft: '6%',
        width: '88%',
        textAlign: 'left',
        lineHeight: 22,
        fontSize: 15
    },
    company: {
        fontSize: 13
    },
    ticker: {
        fontSize: 15,
        fontWeight: '700',
        paddingBottom: 8
    },
    percentage: {
        fontSize: 14,
        fontWeight: '700'
    }
})
