import React from 'react';
import { StyleSheet } from 'react-native';
import { RTLView, RTLText } from '../../localization/localizedComponents';
import { useLocalization } from '../../localiizationContext';
import LanguageSelector from '../components/LanguageSelector';

const HomeScreen = ({ navigation }) => {
  const { t } = useLocalization();

  return (
    <RTLView style={styles.container}>
      <RTLText style={styles.title}>{t('welcome')}</RTLText>
      {/* <LanguageSelector /> */}
      <RTLView style={styles.buttonContainer}>
        <RTLText
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          {t('goToProfile')}
        </RTLText>
        <RTLText
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}
        >
          {t('goToSettings')}
        </RTLText>
      </RTLView>
      <RTLView style={styles.buttonContainer1}>
        <RTLView style={styles.buttonWrapper}>
          <RTLText style={styles.loginButton} onPress={() => navigation.navigate('Get Started')}>
            {t('goToLogin')}
          </RTLText>
        </RTLView>
      </RTLView>
    </RTLView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    gap: 10,
  },
  buttonContainer1: {
    marginTop: 20,
    width: '100%',
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',  // Center button horizontally
    justifyContent: 'center',  // Center content vertically
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    color: '#fff',
    textAlign: 'center',
  },
  loginButton: {
    padding: 15,
    borderRadius: 10,
    // color: '#fff',
    textAlign: 'center',  // Center the text horizontally
    // alignSelf: 'stretch',  // Make the button stretch to fill container width
    textAlignVertical: 'center',  // Center text vertically (for Android)
  }
});

export default HomeScreen;