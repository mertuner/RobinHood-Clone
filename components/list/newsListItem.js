import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const newsListItem = props => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.sourceContainer}>
                    <Text style={styles.srcText}>{props.source}</Text>
                    <Text style={styles.srcDate}>{props.date}</Text>
                </View>
                <View><Text style={styles.threeDots}>. . .</Text></View>
            </View>
            <View style={styles.middleContainer}>
                <Text style={styles.newsText}>{props.content}</Text>
                <Image style={styles.img} source={{uri: props.uri}}/>
            </View>
            <Text style={styles.companyText}>{props.company} +{props.percentage}%</Text>
        </View>
    )
}

export default newsListItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 18,
        // paddingTop: 18,
        // borderTopColor: '#edf0f4',
        // borderTopWidth: 1,
        borderTopWidth: 1,
        borderTopColor: '#edf0f4',
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
        fontWeight: '300',
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
        color: '#00c806'
    }
})
