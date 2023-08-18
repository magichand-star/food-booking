import React, { useContext } from 'react'
import { View } from 'react-native'
import styles from './styles'
import ThemeContext from '../../../ui/ThemeContext/ThemeContext'
import { theme } from '../../../utils/themeColors'
import TextDefault from '../../Text/TextDefault/TextDefault'

function TitleComponent(props) {
  const themeContext = useContext(ThemeContext)
  const currentTheme = theme[themeContext.ThemeValue]

  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <TextDefault
          numberOfLines={1}
          textColor={currentTheme.fontMainColor}
          H4
          bold>
          {props.title}
        </TextDefault>
        <TextDefault
          numberOfLines={1}
          textColor={currentTheme.fontSecondColor}
          H5
          bold>
          {props.subTitle}
        </TextDefault>
      </View>
      <View style={styles.rightContainer}>
        <TextDefault
          textColor={
            props.error === true
              ? currentTheme.titleTextError
              : currentTheme.titleComponentText
          }
          style={{
            backgroundColor:
              props.error === true
                ? currentTheme.textErrorColor
                : currentTheme.titleComponentBackground
          }}
          H5
          bold
          center>
          {props.status}
        </TextDefault>
      </View>
    </View>
  )
}

export default TitleComponent
