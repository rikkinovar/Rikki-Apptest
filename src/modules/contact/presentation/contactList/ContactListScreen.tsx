import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useContact} from '../../application/useContact';
import {IContact} from '../../domain/contactEntities';
import ContactItem from './components/ContactItem';
import {Colors, FAB} from 'react-native-paper';
import type {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../../navigation/RootNavigator';
import {useNavigation} from '@react-navigation/native';

type ContactNavigationProp = StackNavigationProp<
  StackParamList,
  'ContactListScreen'
>;

const ContactListScreen = () => {
  const {getContactList} = useContact();
  const [data, setData] = React.useState<IContact[]>([]);

  const {navigate} = useNavigation<ContactNavigationProp>();

  React.useEffect(() => {
    const fetchContact = async () => {
      const listContact = await getContactList();
      if (listContact) {
        setData(listContact);
      }
    };
    fetchContact().catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item}: {item: IContact}) => {
    return <ContactItem {...item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
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
