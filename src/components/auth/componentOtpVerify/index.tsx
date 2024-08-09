import React from 'react';

import {View} from 'react-native';

import {Button, Card, Text, TextInput} from 'react-native-paper';
import styles from '../../../resources/styles';

export default function ComponentOTPVerify() {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <Card mode="outlined">
        <Card.Title
          title="Welcome to fitness gym"
          subtitle="Please enter you credentials"
        />
        <Card.Content>
          <View>
            <Text>Enter your email</Text>
            <TextInput
              mode="flat"
              label="Email"
              value={text}
              onChangeText={t => setText(t)}
            />
            <Text style={styles.mt16}>Enter your password</Text>
            <TextInput
              mode="flat"
              label="Password"
              value={text}
              onChangeText={t => setText(t)}
            />
          </View>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained"> Sign In with password</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
