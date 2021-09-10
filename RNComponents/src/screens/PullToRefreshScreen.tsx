import React, { useContext, useState } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {

  const { theme:{ colors, dividerColor, dark } } = useContext(ThemeContext);

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Hola Mundo');
    }, 1500)
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl 
          refreshing={ refreshing }
          onRefresh={ onRefresh }
          progressViewOffset={ 10 }
          progressBackgroundColor={ dividerColor }
          colors={ [ colors.text ] }
          style={{ backgroundColor: '#5856D6' }}
          tintColor={ dark ? 'white' : 'black' }
        />
      }
    >
      <View style={ styles.globalMargin } >
        <HeaderTitle title="Pull to Refresh" />

        {
          data && <HeaderTitle title={ data } />
        }
      </View>
    </ScrollView>
  )
}
