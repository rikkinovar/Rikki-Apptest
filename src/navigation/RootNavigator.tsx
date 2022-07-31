import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ContactListScreen from '../modules/contact/presentation/contactList/ContactListScreen';
import {IContact} from '../modules/contact/domain/contactEntities';
import ContactFormScreen from '../modules/contact/presentation/contactForm/ContactFormScreen';

export type StackParamList = {
  ContactListScreen: undefined;
  ContactFormScreen: {data: IContact | undefined};
};

const Stack = createStackNavigator<StackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactListScreen">
        <Stack.Screen
          name="ContactListScreen"
          options={{title: 'Contact List'}}
          component={ContactListScreen}
        />
        <Stack.Screen
          name="ContactFormScreen"
          options={{title: 'Contact Form'}}
          component={ContactFormScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
