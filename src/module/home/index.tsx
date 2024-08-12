import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from '../../resources/styles';
import { Button, Card, Subheading, Title } from 'react-native-paper';
import { ComponentHomeProps } from '../../resources/types';

const ComponentHome: React.FC<ComponentHomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card mode="elevated">
        <Title style={styles.title}>Welcome</Title>
        <Subheading style={styles.subTitle}>Getting started by Sign in or Sign up </Subheading>
        <Card.Content>
          <View style={styles.container} />
        </Card.Content>
        <Card.Actions>
          <View style={styles.actionContainer}>
            <View style={styles.mt16}>
              <TouchableOpacity onPress={() => navigation.navigate('sign-in')}>
                <Button mode="contained-tonal">Sign In</Button>
              </TouchableOpacity>
            </View>
            <View style={styles.mt16}>
              <TouchableOpacity onPress={() => navigation.navigate('sign-up')}>
                <Button mode="contained-tonal">Sign Up</Button>
              </TouchableOpacity>
            </View>
          </View>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default ComponentHome;
