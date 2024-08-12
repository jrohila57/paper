import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Field } from 'formik';
import * as Yup from 'yup';
import AppForm from '../../../components/common/form/AppForm';
import AppFormField from '../../../components/common/form/AppFormField';
import AppFormSubmitButton from '../../../components/common/form/AppFormSubmitButton';
import { Card, Subheading, Title } from 'react-native-paper';
import styles from '../../../resources/styles';
import { ComponentSignUpProps } from '../../../resources/types';
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required').label('Full Name'),
  email: Yup.string().email('Please enter valid email').required('Email is required').label('Email'),
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
const initialValues = { fullName: '', email: '', password: '', confirmPassword: '' };
const ComponentSignUp: React.FC<ComponentSignUpProps> = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Card mode="elevated">
          <Title style={styles.title}>Sign Up</Title>
          <Subheading style={styles.subTitle}>Enter your full name, email address and password.</Subheading>
          <Card.Content>
            <AppForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values: any) => console.log(values)}
            >
              <View style={styles.mt16}>
                <Text style={styles.fieldLabel}>Enter your Full Name</Text>
                <Field component={AppFormField} name="fullName" placeholder="Full Name" />
              </View>
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
                <Text style={styles.fieldLabel}>Confirm Your Password</Text>
                <Field
                  component={AppFormField}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  secureTextEntry
                  textContentType="password"
                />
              </View>
              <View style={styles.mt16}>
                <AppFormSubmitButton title="Submit" />
              </View>
            </AppForm>
          </Card.Content>
          <Card.Actions>
            <View style={styles.actionContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('sign-in')}>
                <Text style={styles.linkText}>Already have an account? Sign In</Text>
              </TouchableOpacity>
            </View>
          </Card.Actions>
        </Card>
      </View>
    </>
  );
};

export default ComponentSignUp;
