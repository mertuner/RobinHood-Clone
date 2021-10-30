import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ratingContainer = props => {

    const calculateWidth = (ratingNumber) => {
        return String(ratingNumber) + '%'
    }



    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.number} Analyst Ratings</Text>
            <View style={styles.innerContainer}>
                <View style={{ ...styles.recCircle, backgroundColor: props.bgColor }}>
                    <View style={styles.recCircleTextContainer}>
                        <Text style={{ ...styles.recText, color: props.color }}>{props.buy}</Text>
                        <Text style={{ ...styles.recTextPerc, color: props.color }}>%</Text>
                    </View>
                </View>
                <View style={styles.innerBarContainer}>
                    <View style={styles.barContainer}>
                        <View style={styles.bar}>
                            <View style={{ height: '100%', borderTopLeftRadius: 2, borderBottomLeftRadius: 2, width: calculateWidth(props.buy), backgroundColor: props.color }}>

                            </View>
                        </View>
                        <Text style={styles.barText}>{props.buy}% Buy</Text>
                    </View>
                    <View style={styles.barContainer}>
                        <View style={styles.bar}>
                            <View style={{ height: '100%', borderTopLeftRadius: 2, borderBottomLeftRadius: 2,  width: calculateWidth(props.hold), backgroundColor: '#000' }}>

                            </View>
                        </View>
                        <Text style={styles.barText}>{props.hold}% Hold</Text>
                    </View>
                    <View style={styles.barContainer}>
                        <View style={styles.bar}>
                            <View style={{ height: '100%', borderTopLeftRadius: 2, borderBottomLeftRadius: 2,  width: calculateWidth(props.sell), backgroundColor: '#000' }}>

                            </View>
                        </View>
                        <Text style={styles.barText}>{props.sell}% Sell</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 24
    },
    barContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 4
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
        borderBottomRightRadius: 2,
        borderTopLeftRadius: 2,
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
        fontWeight: '500',
        marginLeft: 6
    },
    recTextPerc: {
        fontSize: 16,
        fontWeight: '500'
    },
    barText: {
        textAlign: 'left',
        flex: 1,
        fontSize: 15
    }
})
