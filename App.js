// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   Platform,
//   UIManager,
//   LayoutAnimation,
//   View,
//   Text,
//   TouchableOpacity,
//   Image
// } from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
// import { LocalizationProvider, useLocalization } from './localiizationContext';
// import { RTLView, RTLText } from './localization/localizedComponents';
// import { I18n } from 'i18n-js';

// if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
//   UIManager.setLayoutAnimationEnabledExperimental(true);
// }

// const languages = [
//   { value: 'en', label: 'English' },
//   { value: 'ja', label: 'Japanese' },
//   { value: 'fr', label: 'French' },
//   { value: 'ars', label: 'Arabic' },
// ];

// const LanguageSelector = () => {
//   const [isFocus, setIsFocus] = useState(false);
//   const { locale, changeLanguage, t, isRTL } = useLocalization();

//   useEffect(() => {
//     // Trigger smooth layout animation on RTL change
//     const config = {
//       duration: 300,
//       update: { type: LayoutAnimation.Types.easeInEaseOut, property: LayoutAnimation.Properties.opacity },
//       delete: { type: LayoutAnimation.Types.easeInEaseOut, property: LayoutAnimation.Properties.scaleXY },
//     };
//     LayoutAnimation.configureNext(config);
//   }, [isRTL]);

//   return (
//     <RTLView style={styles.container}>
//       <RTLView style={styles.content}>
//         <RTLText style={styles.heading}>🌐 Language Selector</RTLText>
//         <RTLText style={styles.text}>{t('welcome')} {t('name')}</RTLText>
//         <RTLText style={styles.subtext}>Current Language: {locale}</RTLText>
//         <Image source={require('../my-app-localization/app.png')} style={{transform: [{scaleX: isRTL ? -1 : 1}] , height:100, width:100}}/>

//         <RTLView style={styles.dropdownContainer}>
//           <Dropdown
//             style={[styles.dropdown, isFocus && { borderColor: '#4CAF50' }]}
//             placeholderStyle={styles.placeholderStyle}
//             selectedTextStyle={[
//               styles.selectedTextStyle,
//               { textAlign: isRTL ? 'right' : 'left' },
//             ]}
//             inputSearchStyle={styles.inputSearchStyle}
//             iconStyle={styles.iconStyle}
//             data={languages}
//             maxHeight={300}
//             labelField="label"
//             valueField="value"
//             placeholder={!isFocus ? 'Select language' : '...'}
//             value={locale}
//             onFocus={() => setIsFocus(true)}
//             onBlur={() => setIsFocus(false)}
//             onChange={item => {
//               changeLanguage(item.value);
//               setIsFocus(false);
//             }}
//           />
//         </RTLView>
//       </RTLView>
//     </RTLView>
//   );
// };

// const App = () => {
//   return (
//     <LocalizationProvider>
//       <LanguageSelector />
//     </LocalizationProvider>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9f9f9',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     alignItems: 'flex-start',
//   },
//   content: {
//     width: '100%',
//     alignItems: 'flex-start',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 10,
//     color: '#555',
//   },
//   subtext: {
//     fontSize: 16,
//     marginBottom: 20,
//     color: '#888',
//   },
//   dropdownContainer: {
//     width: '100%',
//     marginTop: 10,
//   },
//   dropdown: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     backgroundColor: '#fff',
//   },
//   placeholderStyle: {
//     fontSize: 16,
//     color: '#888',
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//     color: '#333',
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//     borderColor: '#ddd',
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
// });

// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LocalizationProvider } from './localiizationContext';
import LanguageSelector from '../my-app-localization/src/components/LanguageSelector';
import HomeScreen from '../my-app-localization/src/screens/HomeScreen';
import ProfileScreen from '../my-app-localization/src/screens/ProfileScreen';
import SettingsScreen from '../my-app-localization/src/screens/SettingScreen';
import LoginScreen from '../my-app-localization/src/screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <LocalizationProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: true,
          })}
        >
          <Stack.Screen 
            name="Language" 
            component={LanguageSelector}
            options={{ title: '🌐 Select Language' }}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Get Started" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </LocalizationProvider>
  );
};

export default App;
