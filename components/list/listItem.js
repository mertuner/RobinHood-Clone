import React, { useState, useRef, useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableHighlight, View, } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { LineChart } from 'react-native-svg-charts';
import { deviceWidth } from '../../constants/dimensions';
import * as Haptics from 'expo-haptics';
import { stockData, cryptoData } from '../../data/dumb';



const listItem = props => {


    const maxTextLength = 11;

    const cryptoDownColor = '#FF5A87';
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


    const [data, setData] = useState(props.data);


    const onDragStart = () => {
        props.onDragStart();
    }


    const onDragEnd = ({data}) => {
        setData(data);
        props.onDragEnd();

    }


    const handleNavigation = (ticker, type) => {
        
        let companyData = null;
        let coinData = null;

        for(let company of stockData){
            if(company.ticker === ticker){
                companyData = company;
            }
        }
        for(let crypto of cryptoData){
            if(crypto.ticker === ticker){
                coinData = crypto;
            }
        }
        if(type === 'crypto'){
            props.navigation.navigate('CryptoDetail', {
                info: {
                    ...coinData
                }
            })
        }
        else {
            props.navigation.navigate('CompanyDetail', {
                info: {
                    ...companyData
                }
            })
        }
    }



    const renderItem = ({ item, index, drag, isActive }) => (
        <TouchableHighlight onLongPress={drag} underlayColor={!isActive ? '#f2f4f9' : '#fff'} onPress={() => handleNavigation(item.ticker, item.type)} style={{width: deviceWidth}}>
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
                            svg={{ stroke: (props.stock && item.up) ? stockUpColor : (props.stock) ? stockDownColor : item.up ? cryptoUpColor : cryptoDownColor, strokeWidth: 1.3 }}
                            contentInset={{ top: 6, bottom: 6 }}
                            showGrid={false}
                        />
                    </View>
                    <View style={{...styles.priceContainer, backgroundColor: (props.stock && item.up) ? stockUpColor : (props.stock) ? stockDownColor : item.up ? cryptoUpColor : cryptoDownColor}}>
                        <Text style={styles.priceText}>{'$' + item.price}</Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>

    );

    return (
            <DraggableFlatList
                simultaneousHandlers={props.parentRef}
                scrollEnabled={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                onDragEnd={onDragEnd}
                onDragBegin={onDragStart}
                onPlaceholderIndexChange={index => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
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
        borderBottomColor: 'rgba(237, 240, 244, 0.7)',
        borderBottomWidth: 0.5,
        width: '88%',
        marginLeft: '6%',
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
        width: '24%',
        marginRight: 36
    },
    priceContainer: {
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


