import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {deviceWidth} from '../../constants/dimensions';
import { FontAwesome5, Feather } from '@expo/vector-icons';


const homeScreenNews = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.contentContainer}>
                <View style={styles.titleContainer}>
                    <FontAwesome5 name={"book-reader"} size={14} color={'#97a4b2'}/>
                    <Text style={styles.newsSource}>Benzinga</Text>
                    <Text style={styles.dateText}>16h</Text>
                </View>
                <View style={styles.headLineContainer}>
                <Text style={styles.headLineText}>Unusual Options Activity Insight: General Electric</Text>
                </View>
                <View>
                <View style={styles.viewMoreContainer}>
                <Text style={styles.viewMoreText}>View Article</Text>
                <Feather name="chevron-right" size={20} color={'#00c806'} style={{marginRight: -8}}/>
                                    
                </View>
                </View>
            </View>
            </View>

        </View>
    )
}

export default homeScreenNews

const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        backgroundColor: '#ebeff4',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    innerContainer: {
        width: '97%',
        height: 195,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 4,
        marginVertical: 6
    },
    contentContainer: {
        height: '100%',
        paddingVertical: '4%',
        width: '90%',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },  
    viewMoreContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    headLineContainer: {
        flex: 1,
        marginTop: 12,
        width: '80%'

    },  
    newsSource: {
        fontWeight: '600',
        marginHorizontal: 8,
        color: '#97a4b2'
    },
    dateText: {
        color: '#97a4b2'
    },
    headLineText: {
        fontSize: 16,
        lineHeight: 24,
    },
    viewMoreText: {
        color: '#00c806',
        fontSize: 13
    }
})
