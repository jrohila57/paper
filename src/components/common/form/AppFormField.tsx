import React from 'react';
import { Text, TextInput } from 'react-native-paper';
import styles from '../../../resources/styles';

const AppFormField = (props: any) => {
  const {
    placeholder,
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];
  return (
    <>
      <TextInput
        mode="outlined"
        placeholder={placeholder}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        style={styles.textField}
        autoCapitalize="sentences"
        autoCorrect={false}
        value={value}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorColor}>{errors[name]}</Text>}
    </>
  );
};

export default AppFormField;
