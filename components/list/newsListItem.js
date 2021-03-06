import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'

const newsListItem = props => {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={{...styles.container, borderBottomColor: props.borderBottomColor }}>
            <View style={styles.titleContainer}>
                <View style={styles.sourceContainer}>
                    <Text style={{...styles.srcText, color: props.textColor}}>{props.source}</Text>
                    <Text style={{...styles.srcDate, color: props.textColor}}>{props.date}</Text>
                </View>
                {props.explore ? <View><Text style={styles.threeDots}>. . .</Text></View> : null}
            </View>
            <View style={styles.middleContainer}>
                <Text numberOfLines={3} style={{...styles.newsText, color: props.textColor}}>{props.content}</Text>
                <Image style={styles.img} source={{uri: props.uri}}/>
            </View>
            <Text style={{...styles.companyText, color: props.color}}>{props.company} {props.percentage}%</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default newsListItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(237, 240, 244, 0.7)',
        marginBottom: 16
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sourceContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    middleContainer: {
        flexDirection: 'row',
        marginVertical: 20,
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
        fontSize: 18
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 6
    },
    newsText: {
        width: '80%',
        lineHeight: 22,
        fontSize: 15
    },
    companyText: {
        fontSize: 12,
        fontWeight: '700',
    }
})
