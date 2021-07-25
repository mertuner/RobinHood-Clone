import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';


const followingContainer = () => {
    return (
        <View style={styles.followingContainer}>
        <Text style={styles.followingTitleText}>Following</Text>
        <View style={styles.followingBox}>
        <View style={styles.listNameContainer}>
            <Text style={styles.listName}>Crypto</Text>
            <Text style={styles.listAmountText}>7 items</Text>
        </View>
        <Feather name="chevron-right" size={20} color={'#97a4b2'} style={{ marginRight: -8 }} />

        </View>
        <View style={styles.followingBox}>
        <View style={styles.listNameContainer}>
            <Text style={styles.listName}>IPO Access</Text>
            <Text style={styles.listAmountText}>1 item</Text>
        </View>
        <Feather name="chevron-right" size={20} color={'#97a4b2'} style={{ marginRight: -8 }} />
        </View>
    </View>
    )
}

export default followingContainer

const styles = StyleSheet.create({
    followingContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    followingBox: {
        flexDirection: 'row',
        marginLeft: '5%',
        width: '90%',
        paddingVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#edf0f4',
        borderBottomWidth: 0.5,
    },
    followingTitleText: {
        fontSize: 24,
        fontWeight: '500',
        marginLeft: '5%',
        marginBottom: 6,
        marginTop: 42
    },  
    listNameContainer: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    listName: {
        fontSize: 15,
    },
    listAmountText: {
        color: '#697277',
        marginTop: 6
    },
})
