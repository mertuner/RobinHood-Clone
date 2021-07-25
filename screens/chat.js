import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ChatScreen</Text>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})
