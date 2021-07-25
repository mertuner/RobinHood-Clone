import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';


const profileSettingListItem = props => {
    return (
        <View style={styles.settingBox}>
        <View style={styles.settingNameContainer}>
            <Text style={styles.settingName}>{props.title}</Text>
            <Text style={styles.settingDescText}>{props.desc}</Text>
        </View>
        <Feather name="chevron-right" size={20} color={'#97a4b2'} style={{ marginRight: -8 }} />

    </View>
    )
}

export default profileSettingListItem

const styles = StyleSheet.create({
    settingBox: {
        flexDirection: 'row',
        width: '88%',
        paddingVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#edf0f4',
        borderBottomWidth: 0.5,
    },
    settingNameContainer: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    settingName: {
        fontSize: 15,
    },
    settingDescText: {
        color: '#697277',
        marginTop: 6
    },
})
