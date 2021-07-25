import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import  { deviceHeight, deviceWidth } from '../../constants/dimensions';

const searchBar = props => {
    return (
        <SearchBar
        platform= 'ios'
        containerStyle={{...styles.bar, backgroundColor: '#FFFFFF'}}
        inputContainerStyle = {{backgroundColor: '#f6f7f9', height: 32, marginLeft: 0}}
        placeholder={'Search companies...'}
        placeholderTextColor={'#97a4b2'}
        searchIcon = {() => <FontAwesome5 name={'search'} size={13} color={'#97a4b2'}/>}
        onClear={props.onClear}
        onChangeText={props.updateQuery}
        leftIconContainerStyle={{
          width: 18,
          height: 18,
          marginRight: -4
        }}
        // cancelButtonProps = {{
        //   color: context.currentTheme.up
        // }}
        value={props.query}
        inputStyle={{
          color: '#000',
          fontSize: 14,
        }}
        round
    />
    )
}

export default searchBar

const styles = StyleSheet.create({
    bar: {
        width: deviceWidth * 0.9,
    }
})
