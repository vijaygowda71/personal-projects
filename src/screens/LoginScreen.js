import React, { useState } from 'react';
import { StyleSheet , useWindowDimensions} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useLocalization } from '../../localiizationContext';
import { RTLView,RTLText,RTLTouchableOpacity,RTLTextInput } from '../../localization/localizedComponents';



const LoginScreen = () => {
  const { t } = useLocalization();
  return(
  <RTLView style={styles.formContainer}>
    <RTLTextInput
      placeholder={t('enterEmail')}
      placeholderTextColor="#aaa"
      style={styles.input}
    />
    <RTLTextInput
      placeholder={ t('enterPassword')}
      placeholderTextColor="#aaa"
      secureTextEntry
      style={styles.input}
    />
    <RTLText style={styles.forgotPassword}>{t('forgotPassword')}</RTLText>
    <RTLTouchableOpacity style={styles.button}>
      <RTLText style={styles.buttonText}>{t('login')}</RTLText>
    </RTLTouchableOpacity>
  </RTLView>
);
}

const SignUpScreen = () => {
  const {t} = useLocalization()
  return(
  <RTLView style={styles.formContainer}>
    <RTLTextInput
      placeholder={t('enterName')}
      placeholderTextColor="#aaa"
      style={styles.input}
    />
    <RTLTextInput
      placeholder={t('enterEmail')}
      placeholderTextColor="#aaa"
      style={styles.input}
    />
    <RTLTextInput
      placeholder=  {t('enterPassword')}  
      placeholderTextColor="#aaa"
      secureTextEntry
      style={styles.input}
    />
    <RTLTouchableOpacity style={styles.button}>
      <RTLText style={styles.buttonText}>{t('signUp')}</RTLText>
    </RTLTouchableOpacity>
  </RTLView>
);
}

const LoginPage = () => {
  const layout = useWindowDimensions();
  const { isRTL, t } = useLocalization();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'login', title: t('login') },
    { key: 'signup', title: t('signUp') },
  ]);

  const renderScene = SceneMap({
    login: LoginScreen,
    signup: SignUpScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={styles.tabView}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={styles.indicator}
          style={styles.tabBar}
          labelStyle={styles.tabLabel}
          activeColor="red"
          inactiveColor="#aaa"
          tabStyle={isRTL ? { flexDirection: 'row-reverse' } : null}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBar: {
    backgroundColor: '#f5f5f5',
  },
  indicator: {
    backgroundColor: 'red',
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  forgotPassword: {
    color: 'red',
    marginBottom: 15,
    fontSize: 14,
    textAlign: 'right',
    width: '100%',
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LoginPage;
