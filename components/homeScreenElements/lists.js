import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { stockData, cyrptoData } from '../../data/dumb';
import List from '../../components/list/list';
import ListItem from '../../components/list/listItem';


const lists = props => {


    const onDragStart = () => {
        setScrollEnabled(false);
    }

    const onDragEnd = () => {
        setScrollEnabled(true);
    }


    return (
        <View style={styles.listViewContainer}>
        <Text style={styles.listTitleText}>Lists</Text>
        <List
            emoji={"👾"}
            listAmount={cyrptoData.length}
            listName={'Cryptos to Watch'}
        >
            <ListItem onDragStart={onDragStart} onDragEnd={onDragEnd} data={cyrptoData} parentRef={props.parentRef} />
        </List>
        <List
            emoji={"⚡️"}
            listAmount={stockData.length}
            listName={'My First List'}
        >
            <ListItem onDragStart={onDragStart} onDragEnd={onDragEnd} data={stockData} stock parentRef={props.parenRef} />
        </List>
    </View>
    )
}

export default lists

const styles = StyleSheet.create({
    listViewContainer: {
        marginTop: 42,
        width: '100%',
    },
    listTitleText: {
        fontSize: 24,
        fontWeight: '500',
        marginLeft: '5%',
        marginBottom: 26
    },
})
