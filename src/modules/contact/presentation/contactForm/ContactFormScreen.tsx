import {StyleSheet, View} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamList} from '../../../../navigation/RootNavigator';
import {Button, TextInput} from 'react-native-paper';

type Props = StackScreenProps<StackParamList, 'ContactFormScreen'>;

const ContactFormScreen = (props: Props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        label="First Name"
        placeholder="First Name"
        mode="outlined"
      />
      <TextInput
        style={styles.inputContainer}
        label="Last Name"
        placeholder="Last Name"
        mode="outlined"
      />
      <TextInput
        style={styles.inputContainer}
        label="Age"
        placeholder="Age"
        mode="outlined"
      />
      <TextInput
        style={styles.inputContainer}
        label="Photo URL"
        placeholder="Photo URL"
        mode="outlined"
      />
      <View style={styles.footer}>
        <View style={{flex: 1, marginRight: 4}}>
          <Button
            mode="outlined"
            onPress={() => {
              navigation.goBack();
            }}>
            Cancel
          </Button>
        </View>
        <View style={{flex: 1, marginLeft: 4}}>
          <Button
            mode="contained"
            onPress={() => {
              navigation.goBack();
            }}>
            Save
          </Button>
        </View>
      </View>
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
});
