import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {Action, State} from '../../../../../libraries/reducers';
import {StackParamList} from '../../../../../navigation/RootNavigator';
import {addContactRequest} from '../../../data/contact.action';
import {ICreateContacParams} from '../../../domain/contactEntities';

interface Props {
  onCallApi: (action: Action) => {};
  navigationProp: StackScreenProps<StackParamList, 'ContactFormScreen'>;
  addContact: State;
}

const ContactForm = (props: Props) => {
  const {navigationProp, addContact, onCallApi} = props;
  const {navigation} = navigationProp;

  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [age, setAge] = React.useState<number>(0);
  const [photo, setPhoto] = React.useState('');

  const isValid = firstname && lastname && age && photo;

  const handleSubmit = () => {
    const param: ICreateContacParams = {
      firstName: firstname,
      lastName: lastname,
      age,
      photo,
    };
    onCallApi(addContactRequest(param));
    navigation.goBack();
  };

  return (
    <>
      <TextInput
        style={styles.inputContainer}
        label="First Name"
        placeholder="First Name"
        mode="outlined"
        value={firstname}
        onChangeText={text => setFirstname(text)}
      />
      <TextInput
        style={styles.inputContainer}
        label="Last Name"
        placeholder="Last Name"
        mode="outlined"
        value={lastname}
        onChangeText={text => setLastname(text)}
      />
      <TextInput
        style={styles.inputContainer}
        label="Age"
        placeholder="Age"
        mode="outlined"
        keyboardType="numeric"
        value={age.toString()}
        onChangeText={text => setAge(Number(text))}
        maxLength={2}
      />
      <TextInput
        style={styles.inputContainer}
        label="Photo URL"
        placeholder="Photo URL"
        mode="outlined"
        value={photo}
        onChangeText={text => setPhoto(text)}
      />
      <View style={styles.footer}>
        <View style={[styles.flex, styles.marginRightSmall]}>
          <Button
            mode="outlined"
            onPress={() => {
              navigation.goBack();
            }}>
            Cancel
          </Button>
        </View>
        <View style={[styles.flex, styles.marginLeftSmall]}>
          <Button
            disabled={addContact.fetching || !isValid}
            loading={addContact.fetching}
            mode="contained"
            onPress={handleSubmit}>
            Save
          </Button>
        </View>
      </View>
    </>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
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
