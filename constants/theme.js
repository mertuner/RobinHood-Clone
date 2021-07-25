import React, {useState} from 'react';
import { AsyncStorage } from 'react-native';

export const themes = {
    light: {
        fontColor: '#000000',
        screenBg: '#FFFFFF',        
        modalBg: '#FFFFFF',
        dayBarSBg: '#12E6A6',
        searchBar: '#EAE8E8',
        dayBarNsBg: '#FFFFFF',
        themeBar: '#f4f8fc',
        setBar: '#EAE8E8',
        colorBarLight: '#FFFFFF',
        colorBarDark: '#EAE8E8',
        up: '#23d19a',
        down: '#F55D3E',
        tabbarS: '#292929',
        tabBarNS: '#D5D5D5',
        tickerFont: '#808080',
        border: '#e8e8e8',
        shadow: '#000000',
        boneColor: '#E1E9EE',
        highlightColor: '#F2F8FC',
        earningColor: '#66667f',
        placeholder: '#9e9e9e',
        dropDown: '#6a6a72',
        opacUp: '#c8f7e6',
        opacDown: '#f4d1cb'
    },
    dark: {
        fontColor: '#FFFFFF',
        screenBg: '#040e16',
        modalBg: '#0f151c',
        searchBar: '#1C1C1E',
        dayBarSBg: '#12E6A6',
        dayBarNsBg: '#040e16',
        themeBar: '#20262d',
        setBar: '#161c23',
        colorBarLight: '#161c23',
        colorBarDark: '#1c3654',
        up: '#23d19a',
        down: '#F55D3E',
        tabbarS: '#FFFFFF',
        tabBarNS: '#7B7B7B',
        tickerFont: '#808080',
        border: '#20262d',
        shadow: '#486ea0',
        boneColor: '#161c23',
        highlightColor: '#333333',
        earningColor: '#afafaf',
        placeholder: '#9e9e9e',
        dropDown: '#c9c9d6',
        opacUp: '#0b3528',
        opacDown: '#3f1912'
    }
}

export const ThemeContext = React.createContext(
    {
        currentTheme: themes.light,
        toggleTheme: () => {}
    }
  );

  export const ThemeContextProvider = props => {
      const [theme, setTheme] = useState(themes.light);
     
      const toggleHandler = theme => {
        //   console.log(theme, 'thh');
          setTheme(theme === 'dark' ? themes.dark : themes.light );
      }
      return (
          <ThemeContext.Provider value ={{currentTheme: theme, toggleTheme: toggleHandler}}>
              {props.children}
          </ThemeContext.Provider>
      )

  }