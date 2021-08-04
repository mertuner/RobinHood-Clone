import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const statsContainer = (props) => {

    const listItems = [
        ['Open',
            'Volume'],
        ['High',
            'Avg Vol'],
        ['Low',
            'Mkt Cap'],
        ['52 Wk High',
            'P/E Ratio'],
        ['52 Wk Low',
            'Div/Yield']
    ]



    const ListElement = (props) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{props.title}</Text>
                <Text style={styles.itemAmount}>145.81</Text>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Stats</Text>
            {listItems.map((item, idx) => {
                return (
                    <View style={styles.row} key={idx}>
                        <ListElement title={item[0]}/>
                        <ListElement title={item[1]}/>
                    </View>

                )
            })}
        </View>
    )
}

export default statsContainer

const styles = StyleSheet.create({
    container: {
        width: '88%',
        marginLeft: '6%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
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
    itemTitle: {
        color: '#697277',
        fontSize: 13,
    },
    itemAmount: {
        fontSize: 15
    },
    title: {
        fontSize: 24,
        marginTop: 46,
        marginBottom: 16,
        fontWeight: '500'
    }
})
