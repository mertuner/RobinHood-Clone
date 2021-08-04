import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ratingContainer = () => {

    const calculateWidth = (ratingNumber, analystNumber) => {
        const fullWidth = 100;
        return String((ratingNumber * fullWidth) / analystNumber) + '%'
    }



    return (
        <View style={styles.container}>
            <Text style={styles.title}>44 Analyst Ratings</Text>
            <View style={styles.innerContainer}>
                <View style={styles.recCircle}>
                    <View style={styles.recCircleTextContainer}> 
                    <Text style={styles.recText}>75</Text>
                    <Text style={styles.recTextPerc}>%</Text>
                    </View>
                </View>
                <View style={styles.innerBarContainer}>
                    <View style={styles.barContainer}>
                        <View style={styles.bar}>
                            <View style={{height: '100%', width: calculateWidth(36, 44), backgroundColor: '#00c806'}}> 

                            </View>
                        </View>
                        <Text style={styles.barText}>75% Buy</Text>
                    </View>
                    <View style={styles.barContainer}>
                        <View style={styles.bar}>
                        <View style={{height: '100%', width: calculateWidth(6, 44), backgroundColor: '#000'}}> 

</View>
                        </View>
                        <Text style={styles.barText}>18% Hold</Text>
                    </View>
                    <View style={styles.barContainer}>
                        <View style={styles.bar}>
                        <View style={{height: '100%', width: calculateWidth(2, 44), backgroundColor: '#000'}}> 

</View>
                        </View>
                        <Text style={styles.barText}>7% Sell</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ratingContainer

const styles = StyleSheet.create({
    container: {
        width: '88%',
        marginLeft: '6%',

    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    recCircle: {
        width: 85,
        height: 85,
        borderRadius: 50,
        backgroundColor: '#E5F8E3',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 24
    },
    barContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    innerBarContainer: {
        height: 75,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flex: 1,
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        fontWeight: '500',
        marginTop: 32
    },
    bar: {
        height: 8,
        borderRadius: 2,
        flex: 2.5,
        marginRight: 8,
        backgroundColor: '#ebeff4',
        justifyContent: 'flex-start'
    },
    recCircleTextContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },  
    recText: {
        fontSize: 32,
        color: '#00c806',
        fontWeight: '500',
        marginLeft: 6
    },
    recTextPerc: {
        fontSize: 16,
        color: '#00c806',
        fontWeight: '500'
    },
    barText: {
        textAlign: 'left',
        flex: 1,
        fontSize: 15
    }
})
