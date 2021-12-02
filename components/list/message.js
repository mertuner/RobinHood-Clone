import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'

const message = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#7b8289', marginBottom: 14, marginLeft: 8, width: '100%', textAlign: 'center', fontSize: 13 }}>
                Oct 13, 1:31 PM
            </Text>
            <View style={styles.topContainer}>
                <View style={styles.imageContainer}>
                    <Image style={{ width: 17, height: 17, marginRight: 2 }} source={require('../../assets/rb-icons/RbMessageLogo.jpg')} />
                </View>
                <View style={styles.messageContainer}>
                    <Text style={{ lineHeight: 24, fontSize: 15 }}>
                        Yay! 🎊 Your order to sell to close 1 contract of {props.ticker} $300.00 Call 11/19 has been filled for an average price of $43.00 per contract.
                    </Text>
                    <Text style={{ marginTop: 24 }}>
                        Your order is complete.
                    </Text>
                    <TouchableWithoutFeedback>
                        <View style={styles.button}>
                            <Text style={{ fontWeight: '700', fontSize: 15 }}>View Order</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <Text style={{ color: '#7b8289', marginLeft: 41, marginTop: 6 }}>
                1:31 PM
            </Text>
        </View>
    )
}

export default message

const styles = StyleSheet.create({
    container: {
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    messageContainer: {
        flexShrink: 1,
        marginLeft: 8,
        backgroundColor: '#F6F8FA',
        paddingHorizontal: 14,
        paddingBottom: 10,
        paddingTop: 12,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        borderBottomRightRadius: 16
    },
    imageContainer: {
        width: 33,
        height: 33,
        borderRadius: 16.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 14,
        marginTop: 16,
        borderRadius: 50,
        borderWidth: 0.5,
        backgroundColor: 'transparent'
    }
})
