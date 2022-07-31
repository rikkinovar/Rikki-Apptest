import {StyleSheet, View} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamList} from '../../../../navigation/RootNavigator';
import ContactFormContainer from './containers/ContactFormContainer';

type Props = StackScreenProps<StackParamList, 'ContactFormScreen'>;

const ContactFormScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <ContactFormContainer navigationProp={props} />
    </View>
  );
};

export default ContactFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  inputContainer: {
    marginBottom: 8,
  },
  footer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 16,
  },
  flex: {
    flex: 1,
  },
  marginRightSmall: {
    marginRight: 4,
  },
  marginLeftSmall: {
    marginLeft: 4,
  },
});
