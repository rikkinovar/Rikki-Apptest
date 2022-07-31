import React from 'react';
import {FlatList} from 'react-native';
import {Action, State} from '../../../../../libraries/reducers';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../../../navigation/RootNavigator';
import {getContactRequest} from '../../../data/contact.action';
import ContactItem from './ContactItem';
import {ActivityIndicator, Colors} from 'react-native-paper';

interface Props {
  onCallApi: (action: Action) => {};
  navigation?: StackNavigationProp<StackParamList>;
  getContact: State;
}

const ContactList = (props: Props) => {
  const {onCallApi, getContact} = props;

  React.useEffect(() => {
    console.log(getContact.data);
  }, [getContact]);

  React.useEffect(() => {
    onCallApi(getContactRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return getContact.fetching ? (
    <ActivityIndicator color={Colors.blue400} animating />
  ) : (
    <FlatList
      keyExtractor={item => item.id}
      data={getContact.data}
      renderItem={({item, index}) => <ContactItem key={index} {...item} />}
      showsVerticalScrollIndicator={false}
      refreshing={getContact.fetching}
      onRefresh={() => onCallApi(getContactRequest())}
    />
  );
};

export default ContactList;
