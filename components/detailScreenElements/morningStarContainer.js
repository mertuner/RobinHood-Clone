import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const morningStarContainer = (props) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Bulls Say</Text>
                    <Text style={styles.morningStar}>Morningstar</Text>
                </View>
                <Text numberOfLines={4} style={styles.content}>{props.bullsSay}</Text>
                <Text style={{...styles.showMore, color: props.color}}>Show More</Text>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Bears Say</Text>
                    <Text style={styles.morningStar}>Morningstar</Text>
                </View>
                <Text numberOfLines={4} style={styles.content}>{props.bearsSay}</Text>
                <Text style={{...styles.showMore, color: props.color}}>Show More</Text>
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
        fontWeight: '700'
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
        fontSize: 13,
        fontWeight: '600',
    }
})
