import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Field } from 'formik';
import * as Yup from 'yup';
import AppForm from '../../../components/common/form/AppForm';
import AppFormField from '../../../components/common/form/AppFormField';
import AppFormSubmitButton from '../../../components/common/form/AppFormSubmitButton';
import { Card, Subheading, Title } from 'react-native-paper';
import styles from '../../../resources/styles';
import { ComponentOTPSubmitProps } from '../../../resources/types';

const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .required('OTP is required')
    .min(6, 'OTP must be at least 6 characters')
    .max(6, 'OTP must be exactly 6 characters')
    .label('OTP'),
});

const initialValues = { otp: '' };

const ComponentOTPVerify: React.FC<ComponentOTPSubmitProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card mode="elevated">
        <Title style={styles.title}>Submit OTP</Title>
        <Subheading style={styles.subTitle}>Enter the OTP sent to your email/phone.</Subheading>
        <Card.Content>
          <AppForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: any) => console.log(values)}
          >
            <View style={styles.mt16}>
              <Text style={styles.fieldLabel}>Enter OTP</Text>
              <Field
                component={AppFormField}
                name="otp"
                placeholder="OTP"
                keyboardType="number-pad"
                textContentType="oneTimeCode"
              />
            </View>
            <View style={styles.mt16}>
              <AppFormSubmitButton title="Submit OTP" />
            </View>
          </AppForm>
        </Card.Content>
        <Card.Actions>
          <View style={styles.actionContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('sign-in')}>
              <Text style={styles.linkText}>Back to Sign In</Text>
            </TouchableOpacity>
          </View>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default ComponentOTPVerify;
