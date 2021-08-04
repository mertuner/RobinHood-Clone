import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'

const headNews = props => {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.sourceContainer}>
                    <Text style={styles.srcText}>{props.source}</Text>
                    <Text style={styles.srcDate}>{props.date}</Text>
                </View>
                <View><Text style={styles.threeDots}>. . .</Text></View>
            </View>
            <View style={styles.middleContainer}>
                <Text numberOfLines={2} style={styles.newsText}>{props.content}</Text>
                <Image style={styles.img} source={{uri: props.uri}}/>
            </View>
            <Text style={styles.companyText}>{props.company} +{props.percentage}%</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default headNews

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingBottom: 18,
        // paddingTop: 18,
        // borderTopColor: '#edf0f4',
        // borderTopWidth: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(237, 240, 244, 0.7)',
        marginBottom: 16
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    sourceContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    middleContainer: {
        marginTop: 14,
        marginBottom: 20,
        justifyContent: 'space-between'
    },  
    srcText: {
        fontWeight: '700',
        marginRight: 6,
        fontSize: 13
    },
    srcDate: {
        fontWeight: '400',
        fontSize: 13
    },
    threeDots: {
        fontWeight: '800',
        fontSize: 18,
    },
    img: {
        width: '100%',
        height: 220,
        borderRadius: 6
    },
    newsText: {
        width: '100%',
        fontSize: 22,
        marginBottom: 12,
        lineHeight: 28
    },
    companyText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#00c806'
    }
})
