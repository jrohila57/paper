import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Field } from 'formik';
import * as Yup from 'yup';
import AppForm from '../../../components/common/form/AppForm';
import AppFormField from '../../../components/common/form/AppFormField';
import AppFormSubmitButton from '../../../components/common/form/AppFormSubmitButton';
import { Card, Divider, Subheading, Title } from 'react-native-paper';
import styles from '../../../resources/styles';
import { ComponentForgotPasswordProps } from '../../../resources/types';
import KeyboardAvoidingWrapper from '../../../components/common/keyboard/keyboardAvoidWrapper';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Email is required').label('Email'),
});

const initialValues = { email: '' };

const ComponentForgotPassword: React.FC<ComponentForgotPasswordProps> = ({ navigation }) => {
  return (
    <KeyboardAvoidingWrapper>
      <Card style={styles.card}>
        <Title style={styles.title}>Forgot Password</Title>
        <Subheading style={styles.subTitle}>Enter your email address to reset your password.</Subheading>
        <Card.Content>
          <AppForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: any) => console.log(values)}
          >
            <View style={styles.mt16}>
              <Text style={styles.fieldLabel}>Enter your email</Text>
              <Field
                component={AppFormField}
                name="email"
                placeholder="Email"
                autoCompleteType="email"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
            </View>
            <View style={styles.mt16}>
              <AppFormSubmitButton title="Submit" />
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

export default ComponentForgotPassword;
