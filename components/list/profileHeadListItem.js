import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

const profileHeadListItem = props => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={props.src}/>
            <View style={styles.textContainer}>
                <Text style={styles.descText}>{props.desc}</Text>
                <Text style={{...styles.bottomText, color: props.color}}>{props.bottomText}</Text>
            </View>
        </View>
    )
}

export default profileHeadListItem;

const styles = StyleSheet.create({
    container: {
        width: 310,
        height: 160,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#edf0f4',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight: 16,
    },
    textContainer: {
        justifyContent: 'space-between',
        flexShrink: 1,
        height: 110,
        alignItems: 'flex-start',
        paddingTop: 8
    },  
    descText: {
        fontSize: 18,
        lineHeight: 24
    },
    bottomText: {
        fontSize: 13,
        fontWeight: '700'
    },
    img: {
        width: 60,
        height: 110,
        resizeMode: 'contain',
        marginRight: 16
    }
})
