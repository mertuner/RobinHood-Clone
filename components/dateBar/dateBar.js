import React, { useState, useContext, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { deviceHeight, deviceWidth } from '../../constants/dimensions';
import { ThemeContext } from '../../constants/theme';
import * as Haptics from 'expo-haptics';


const DateBar = React.memo(props => {

    const chartPeriods = ['1D', '1W', '1M', '3M', '1Y', 'ALL']
    
    
    const [selectedPeriod, setSelectedPeriod] = useState('1D');



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
                <View style={{backgroundColor: selectedPeriod === el ? '#00c806' : '#fff', ...styles.chartPeriod }}>
                    <Text style={{color: selectedPeriod === el ? '#fff' : '#00c806', ...styles.chartPeriodText } }>{el}</Text>
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
        width: '100%',
        marginTop: 12,
        marginBottom: 4,
        borderRadius: 7,
        paddingVertical: 7
    },
    chartPeriodText: {
        fontSize: 13,
        fontWeight: '700'
    },
    chartPeriod: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 6
    },
})

export default DateBar;
