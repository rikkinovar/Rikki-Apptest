import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, FAB} from 'react-native-paper';
import type {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../../navigation/RootNavigator';
import {useNavigation} from '@react-navigation/native';
import ContactListContainer from './container/ContactListContainer';

type ContactNavigationProp = StackNavigationProp<
  StackParamList,
  'ContactListScreen'
>;

const ContactListScreen = () => {
  const {navigate} = useNavigation<ContactNavigationProp>();

  return (
    <View style={styles.container}>
      <ContactListContainer />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => {
          navigate('ContactFormScreen');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.green400,
  },
});

export default ContactListScreen;
