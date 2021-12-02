import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';


const list = props => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollapsing = () => {
        setIsCollapsed(!isCollapsed);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)

    }



    return (
        <View style={{...styles.container, marginBottom: isCollapsed ? 8 : 32}}>
            <View style={styles.titleContainer}>
                <View style={styles.titleLeftContainer}>
                <View style={styles.emojiContainer}>
                    <Text style={styles.emojiText}>{props.emoji}</Text>
                </View>
                <View style={styles.listNameContainer}>
                    <Text style={styles.listName}>{props.listName}</Text>
                    <Text style={styles.listAmountText}>{props.listAmount} items</Text>
                </View>
                </View>
                <TouchableWithoutFeedback onPress={handleCollapsing}>
                <View style={styles.chevronContainer}>
                    <Feather name={isCollapsed ? 'chevron-down' : 'chevron-up'} size={22} style={{ marginRight: -6 }} />
                </View>
                </TouchableWithoutFeedback>
            </View>
            <Collapsible collapsed={isCollapsed}>
                {props.children}
            </Collapsible>
        </View>
    )
}

export default list

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'flex-start',
        marginVertical: 0,
    },
    emojiContainer: {
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderRadius: 4,        
        backgroundColor: '#f2f4f9',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    titleContainer: {
        width: '88%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        marginLeft: '6%'
    },
    titleLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },      
    listNameContainer: {
        marginLeft: 16,
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    chevronContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 45,
        borderRadius: 22.5,
        borderWidth: 1,
        borderColor: '#eff4f9',
        paddingRight: 6
    },
    listName: {
        fontSize: 15,
    },
    emojiText: {
        fontSize: 24
    },
    listAmountText: {
        color: '#697277',
        marginTop: 6
    }
})
