import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Field } from 'formik';
import * as Yup from 'yup';
import AppForm from '../../../components/common/form/AppForm';
import AppFormField from '../../../components/common/form/AppFormField';
import AppFormSubmitButton from '../../../components/common/form/AppFormSubmitButton';
import { Card, Divider, Subheading, Title } from 'react-native-paper';
import styles from '../../../resources/styles';
import { ComponentSignInProps } from '../../../resources/types';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Email is required').label('Email'),
  password: Yup.string().required('Password is required').label('Password'),
});

const initialValues = { email: '', password: '' };

const ComponentSignIn: React.FC<ComponentSignInProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Title style={styles.title}>Sign In</Title>
        <Subheading style={styles.subTitle}>Enter your email address and password.</Subheading>
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
              <Text style={styles.fieldLabel}>Enter your Password</Text>
              <Field
                component={AppFormField}
                name="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
            </View>
            <View style={styles.mt16}>
              <AppFormSubmitButton title="Sign In" />
            </View>
          </AppForm>
        </Card.Content>
        <Card.Actions>
          <View style={styles.actionContainer}>
            <Divider />
            <TouchableOpacity onPress={() => navigation.navigate('forgot-password')}>
              <Text style={styles.linkText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('sign-up')}>
              <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
          </View>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default ComponentSignIn;
