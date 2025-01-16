import React from 'react';
import { StyleSheet } from 'react-native';
import { RTLView, RTLText } from '../../localization/localizedComponents';
import { useLocalization } from '../../localiizationContext';

const ProfileScreen = () => {
  const { t } = useLocalization();

  return (
    <RTLView style={styles.container}>
      <RTLText style={styles.title}>{t('profileTitle')}</RTLText>
      <RTLText style={styles.text}>{t('profileDescription')}</RTLText>
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
    button: {
      backgroundColor: '#4CAF50',
      padding: 15,
      borderRadius: 10,
      color: '#fff',
      textAlign: 'center',
    },
  });

  export default ProfileScreen;