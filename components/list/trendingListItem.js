import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'

const trendingListItem = props => {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={styles.listItemContainer}>
            <Image style={styles.img} source={props.src}/>
            <Text style={styles.listName}>{props.listName}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default trendingListItem

const styles = StyleSheet.create({
    listItemContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        paddingLeft: 8,
        paddingRight: 16,
        borderColor: '#edf0f4',
        borderWidth: 1,
        borderRadius: 25,
        marginRight: 6
    },
    img: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 6
    },
    listName: {
        fontSize: 15,
    }
})
