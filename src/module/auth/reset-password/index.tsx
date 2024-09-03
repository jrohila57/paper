import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Field } from 'formik';
import * as Yup from 'yup';
import AppForm from '../../../components/common/form/AppForm';
import AppFormField from '../../../components/common/form/AppFormField';
import AppFormSubmitButton from '../../../components/common/form/AppFormSubmitButton';
import { Card, Divider, Subheading, Title } from 'react-native-paper';
import styles from '../../../resources/styles';
import { ComponentResetPasswordProps } from '../../../resources/types';
import KeyboardAvoidingWrapper from '../../../components/common/keyboard/keyboardAvoidWrapper';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required')
    .label('Confirm Password'),
});

const initialValues = { password: '', confirmPassword: '' };

const ComponentResetPassword: React.FC<ComponentResetPasswordProps> = ({ navigation }) => {
  return (
    <KeyboardAvoidingWrapper>
      <Card style={styles.card}>
        <Title style={styles.title}>Reset Password</Title>
        <Subheading style={styles.subTitle}>Enter your new password.</Subheading>
        <Card.Content>
          <AppForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: any) => console.log(values)}
          >
            <View style={styles.mt16}>
              <Text style={styles.fieldLabel}>Enter your new Password</Text>
              <Field
                component={AppFormField}
                name="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
            </View>
            <View style={styles.mt16}>
              <Text style={styles.fieldLabel}>Confirm your new Password</Text>
              <Field
                component={AppFormField}
                name="confirmPassword"
                placeholder="Confirm Password"
                secureTextEntry
                textContentType="password"
              />
            </View>
            <View style={styles.mt16}>
              <AppFormSubmitButton title="Reset Password" />
            </View>
          </AppForm>
        </Card.Content>
        <Card.Actions>
          <View style={styles.actionContainer}>
            <Divider />
            <TouchableOpacity onPress={() => navigation.navigate('sign-in')}>
              <Text style={styles.linkText}>Back to Sign In</Text>
            </TouchableOpacity>
          </View>
        </Card.Actions>
      </Card>
    </KeyboardAvoidingWrapper>
  );
};

export default ComponentResetPassword;
