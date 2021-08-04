import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const morningStarContainer = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Bulls Say</Text>
                    <Text style={styles.morningStar}>Morningstar</Text>
                </View>
                <Text numberOfLines={4} style={styles.content}>Between greater smartphone penetration in emerging markets and repeat sales to current
                customers, Apple has plenty of opportunity to reap the rewards of its iPhone business.

                Apple's iPhone and iOS operating system have consistently been rated at the head of
                the pack in terms of customer loyalty, engagement, and security, which bodes well for long-term customer retention.

                We think Apple is still innovating with introductions of Apple Pay, Apple Watch,
            Apple TV, and AirPods; each of these could drive incremental revenue, but more crucially help to retain iPhone users over time.</Text>
                <Text style={styles.showMore}>Show More</Text>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Bulls Say</Text>
                    <Text style={styles.morningStar}>Morningstar</Text>
                </View>
                <Text numberOfLines={4} style={styles.content}>Between greater smartphone penetration in emerging markets and repeat sales to current
                customers, Apple has plenty of opportunity to reap the rewards of its iPhone business.

                Apple's iPhone and iOS operating system have consistently been rated at the head of
                the pack in terms of customer loyalty, engagement, and security, which bodes well for long-term customer retention.

                We think Apple is still innovating with introductions of Apple Pay, Apple Watch,
            Apple TV, and AirPods; each of these could drive incremental revenue, but more crucially help to retain iPhone users over time.</Text>
                <Text style={styles.showMore}>Show More</Text>
            </View>
        </ScrollView>
    )
}

export default morningStarContainer

const styles = StyleSheet.create({
    container: {
        marginTop: 42,
        marginLeft: '6%',
        paddingRight: '12%',
        paddingBottom: 8
    },
    innerContainer: {
        height: 186,
        width: 340,
        paddingHorizontal: 16,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderRadius: 6,
        marginRight: 6,
        paddingVertical: 18,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: {
            height: 1,
            width: 1.5
        },  
        shadowRadius: 4,  
        elevation: 3,
    },
    titleContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        // fontSize: 16,
        fontWeight: '600'
    },
    morningStar: {
        fontSize: 13,
        color: '#697277'
    },
    content: {
        textAlign: 'left',
        lineHeight: 24,
        fontSize: 15
    },
    showMore: {
        fontSize: 12,
        fontWeight: '500',
        color: '#00c806'
    }
})
