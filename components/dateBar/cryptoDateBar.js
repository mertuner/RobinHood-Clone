import React, { useState, useContext, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { deviceHeight, deviceWidth } from '../../constants/dimensions';
import { ThemeContext } from '../../constants/theme';
import * as Haptics from 'expo-haptics';


const CyrptoDateBar = React.memo(props => {

    const chartPeriods = ['LIVE', '1D', '1W', '1M', '3M', '1Y', '5Y']
    
    
    const [selectedPeriod, setSelectedPeriod] = useState('LIVE');



    const theme = useContext(ThemeContext).currentTheme;




    const timePeriodsHandler = period => {
        if (selectedPeriod !== period) {
            setSelectedPeriod(period);
            props.setChartData(period);
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)

        }
    }

    const chartViews = chartPeriods.map((el, i) => {
        return (
            <TouchableWithoutFeedback key={i} onPress={() => timePeriodsHandler(el)}>
                <View style={{...styles.chartPeriod, paddingLeft: el === 'LIVE' ? 0 : 8, paddingRight: el === '5Y' ? 0 : 8}}>
                    {el === 'LIVE' ? <View style={{width: 6, height: 6, borderRadius: 50, backgroundColor: selectedPeriod === 'LIVE' ? props.color : '#a0a0a0'}}/> : null}
                    <View style={styles.chartPeriodInnerView}>
                    <Text style={{color: selectedPeriod === el ? props.color : '#fff', letterSpacing: el==='LIVE'? 4: 0, fontWeight: el==='LIVE'?'400': '700',  ...styles.chartPeriodText } }>{el}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    })

    return (
        <View style={styles.bar}>
            {chartViews}
        </View>
    )
}
)

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        width: '100%',
        marginTop: 12,
        marginBottom: 4,
        borderRadius: 7,
        paddingVertical: 7,
    },
    chartPeriodText: {
        fontSize: 13,
    }, 
    chartPeriod: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    chartPeriodInnerView: {
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 6,
    }
})

export default CyrptoDateBar;
