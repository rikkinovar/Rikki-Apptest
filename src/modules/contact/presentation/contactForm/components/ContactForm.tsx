import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {Action, State} from '../../../../../libraries/reducers';
import {StackParamList} from '../../../../../navigation/RootNavigator';
import {
  addContactRequest,
  updateContactRequest,
} from '../../../data/contact.action';
import {ICreateContacParams} from '../../../domain/contactEntities';

interface Props {
  onCallApi: (action: Action) => {};
  navigationProp: StackScreenProps<StackParamList, 'ContactFormScreen'>;
  addContact: State;
  updateContact: State;
}

const ContactForm = (props: Props) => {
  const {navigationProp, addContact, updateContact, onCallApi} = props;
  const {navigation, route} = navigationProp;

  const [firstname, setFirstname] = React.useState(
    route.params.data?.firstName || '',
  );
  const [lastname, setLastname] = React.useState(
    route.params.data?.lastName || '',
  );
  const [age, setAge] = React.useState<number>(route.params.data?.age || 0);
  const [photo, setPhoto] = React.useState(route.params.data?.photo || '');

  const isValid = firstname && lastname && age && photo;

  const handleSubmit = () => {
    if (route.params.data) {
      const param: ICreateContacParams = {
        firstName: firstname,
        lastName: lastname,
        age,
        photo,
      };
      onCallApi(updateContactRequest(param, route.params.data.id));
    } else {
      const param: ICreateContacParams = {
        firstName: firstname,
        lastName: lastname,
        age,
        photo,
      };
      onCallApi(addContactRequest(param));
    }
    navigation.reset({
      index: 0,
      routes: [{name: 'ContactListScreen'}],
    });
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
              navigation.reset({
                index: 0,
                routes: [{name: 'ContactListScreen'}],
              });
            }}>
            Cancel
          </Button>
        </View>
        <View style={[styles.flex, styles.marginLeftSmall]}>
          <Button
            disabled={addContact.fetching || !isValid || updateContact.fetching}
            loading={addContact.fetching || updateContact.fetching}
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
