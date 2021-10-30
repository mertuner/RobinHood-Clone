import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Collapsible from 'react-native-collapsible';


const aboutContainer = (props) => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleCollapsing = () => {
        setIsCollapsed(!isCollapsed);
    }

    console.log(isCollapsed)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>About {props.company}</Text>
            {isCollapsed ? <Text style={styles.content} numberOfLines={3}>{props.about}</Text> : null}
            <Collapsible collapsed={isCollapsed}>
                <Text style={styles.content}>{props.about}</Text>
            </Collapsible>
            <TouchableWithoutFeedback onPress={handleCollapsing}>
                <Text style={{ ...styles.showMore, color: props.color }}>{isCollapsed ? 'Show More' : 'Show Less'}</Text>
            </TouchableWithoutFeedback>
            <View style={styles.hr}></View>
            {props.ceo !== undefined ? <>
            <View style={styles.fullWidthItemContainer}>
                <Text style={styles.itemTitle}>CEO</Text>
                <Text style={styles.itemAmount}>{props.ceo}</Text>
            </View>
            <View style={styles.fullWidthItemContainer}>
                <Text style={styles.itemTitle}>Headquarters</Text>
                <Text style={styles.itemAmount}>{props.headquarters}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>Founded</Text>
                    <Text style={styles.itemAmount}>{props.founded}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>Employees</Text>
                    <Text style={styles.itemAmount}>{props.employees}</Text>
                </View>
            </View>
            </> : null}
        </View>
    )
}

export default aboutContainer

const styles = StyleSheet.create({
    container: {
        width: '88%',
        marginLeft: '6%',
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        fontWeight: '500',
        marginTop: 32
    },
    content: {
        textAlign: 'left',
        lineHeight: 24,
        fontSize: 15
    },
    showMore: {
        fontSize: 13,
        fontWeight: '600',
        marginTop: 12
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemContainer: {
        width: '47%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 12,
        marginBottom: 12,
        borderBottomWidth: 0.5,
        borderColor: 'rgba(237, 240, 244, 0.7)'
    },
    fullWidthItemContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 12,
        marginBottom: 12,
        borderBottomWidth: 0.5,
        borderColor: 'rgba(237, 240, 244, 0.7)'
    },
    itemTitle: {
        color: '#697277',
        fontSize: 13,
    },
    itemAmount: {
        fontSize: 15
    },
    hr: {
        borderWidth: 0.5,
        height: 1,
        width: '88%',
        borderColor: 'rgba(237, 240, 244, 0.7)',
        marginBottom: 12,
        marginTop: 18
    }
})
