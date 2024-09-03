import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import styles from '../../../resources/styles';

const KeyboardAvoidingWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
