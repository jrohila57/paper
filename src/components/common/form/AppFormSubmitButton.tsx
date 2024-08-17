import React from 'react';
import { useFormikContext } from 'formik';
import { Button } from 'react-native-paper';

interface AppFormSubmitButtonProps {
  title: string;
}

const AppFormSubmitButton = ({ title }: AppFormSubmitButtonProps) => {
  const { handleSubmit, isValid } = useFormikContext();
  return (
    <Button mode="contained-tonal" onPress={() => handleSubmit()} disabled={!isValid}>
      {title}
    </Button>
  );
};

export default AppFormSubmitButton;
