import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const moverListItem = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.company}>LSB Industries</Text>
            <View style={styles.bottomContainer}>
                <Text style={styles.ticker}>LXU</Text>
                <Text style={styles.percentage}>+48.55%</Text>
            </View>
        </View>
    )
}

export default moverListItem

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 180,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#edf0f4',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 16,
        paddingLeft: 12,
        marginRight: 12
    },
    bottomContainer: {
        width: '90%',
    }, 
    company: {
        fontSize: 16,
    }, 
    ticker: {
        fontSize: 26,
        color: '#00c806',
        fontWeight: '400',
        marginBottom: 8
    },
    percentage: {
        fontSize: 12,
        color: '#00c806',
        fontWeight: '500'
    }
})
