import React, { useState, useRef, useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableHighlight, View, TouchableWithoutFeedback } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { LineChart } from 'react-native-svg-charts';
import { deviceWidth } from '../../constants/dimensions';
import * as Haptics from 'expo-haptics';



const listItem = props => {


    const maxTextLength = 11;

    const cyrptoDownColor = '#FF5A87';
    const cryptoUpColor = '#8FC83D';
    const stockUpColor = '#00c806';
    const stockDownColor = '#FF5000';

    const activeItemStyle = {
        width: '100%',
        marginLeft: 0,
        backgroundColor: 'rgba(255,255,255,0.8)',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,  
        elevation: 5,
    }

    // const [itemStyle, setItemStyle] = useState(initialItemStyle)


    // const [activationDistance, setActivationDistance] = useState(100);

    const [data, setData] = useState(props.data);


    const onDragStart = () => {
        // setItemStyle({
        //     width: '100%',
        //     marginLeft: 0
        // });
        props.onDragStart();
    }


    const onDragEnd = ({data}) => {
        setData(data);
        // setItemStyle(initialItemStyle);
        props.onDragEnd();

    }



//#f2f4f9


    const renderItem = ({ item, index, drag, isActive }) => (
        <TouchableHighlight onLongPress={drag} underlayColor={!isActive ? '#f2f4f9' : '#fff'}>
            <View style={isActive ? {...styles.itemContainer, ...activeItemStyle} : {...styles.itemContainer}}>
                <View style={isActive ? {...styles.itemInnerContainer, width: '91%'}: {...styles.itemInnerContainer}}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.tickerText}>{item.ticker.toUpperCase()}</Text>
                        <Text style={styles.nameText} >{item.name.length > maxTextLength ? item.name.slice(0,12) + '...' : item.name}</Text>
                    </View>
                    <View style={styles.graphContainer}>
                        <LineChart
                            style={{ width: '100%', height: '100%', }}
                            data={item.intradayData}
                            svg={{ stroke: (props.stock && item.up) ? stockUpColor : (props.stock) ? stockDownColor : item.up ? cryptoUpColor : cyrptoDownColor, strokeWidth: 1.5 }}
                            contentInset={{ top: 0, bottom: 0 }}
                            showGrid={false}
                        />
                    </View>
                    <View style={{...styles.priceContainer, backgroundColor: (props.stock && item.up) ? stockUpColor : (props.stock) ? stockDownColor : item.up ? cryptoUpColor : cyrptoDownColor}}>
                        <Text style={styles.priceText}>{'$' + item.price}</Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>

    );

    return (
            <DraggableFlatList
                simultaneousHandlers={props.parentRef}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                onDragEnd={onDragEnd}
                onDragBegin={onDragStart}
                onPlaceholderIndexChange={index => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)                }
                dragItemOverflow
                activationDistance={18}
            />
    )
}

export default listItem

const styles = StyleSheet.create({
    itemContainer: {
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#edf0f4',
        borderBottomWidth: 0.5,
        // backgroundColor: '#fff',
        width: '90%',
        marginLeft: '5%',
    },
    itemInnerContainer: {
        width: '100%',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nameContainer: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: '100%',
        width: '30%'
    },
    graphContainer: {
        height: '100%',
        width: '25%',
        marginRight: 36
    },
    priceContainer: {
        // width: '25%',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceText: {
        color: '#fff',
        fontSize: 15
    },
    tickerText: {
        fontSize: 15
    },
    nameText: {
        color: '#697277',
        fontSize: 13,
        marginTop: 6
    }
})


//8EC83D -- crypto-up
//FF5A87 -- ceypto-down