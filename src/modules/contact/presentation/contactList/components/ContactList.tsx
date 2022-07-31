/* eslint-disable no-sparse-arrays */
import React from 'react';
import {FlatList, View, Alert, StyleSheet} from 'react-native';
import {Action, State} from '../../../../../libraries/reducers';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../../../navigation/RootNavigator';
import {
  deleteContactRequest,
  getContactRequest,
} from '../../../data/contact.action';
import ContactItem from './ContactItem';
import {ActivityIndicator, Button, Colors} from 'react-native-paper';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {IContact} from '../../../domain/contactEntities';
import {useNavigation} from '@react-navigation/native';

interface Props {
  onCallApi: (action: Action) => {};
  navigation?: StackNavigationProp<StackParamList>;
  getContact: State;
  deleteContact: State;
}

const ContactList = (props: Props) => {
  const {onCallApi, getContact, deleteContact} = props;
  let row: Array<any> = [];
  let prevOpenedRow: any;

  const {navigate} = useNavigation<StackNavigationProp<StackParamList>>();

  React.useEffect(() => {
    console.log(getContact.data);
  }, [getContact]);

  React.useEffect(() => {
    onCallApi(getContactRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (deleteContact?.err?.message) {
      Alert.alert(deleteContact?.err?.message);
    }
  }, [deleteContact]);

  const renderItem = ({item, index}, onDelete, onUpdate) => {
    const closeRow = idx => {
      console.log('closerow');
      if (prevOpenedRow && prevOpenedRow !== row[idx]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[idx];
    };

    const renderRightActions = (_progress, _dragX, onDelete) => {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 16,
          }}>
          <View style={{flex: 1, paddingHorizontal: 4}}>
            <Button mode="contained" color="red" onPress={onDelete}>
              Delete
            </Button>
          </View>
          <View style={{flex: 1, paddingHorizontal: 4}}>
            <Button mode="contained" color={Colors.blue300} onPress={onUpdate}>
              Update
            </Button>
          </View>
        </View>
      );
    };

    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onDelete)
        }
        onSwipeableOpen={() => closeRow(index)}
        ref={ref => (row[index] = ref)}
        rightThreshold={-100}>
        <ContactItem key={index} {...item} />
      </Swipeable>
    );
  };

  const handleDelete = (item: IContact) => {
    Alert.alert(
      'Delete Confirmation',
      `Are you sure want to delete ${item.firstName}?`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            onCallApi(deleteContactRequest(item.id));
          },
          style: 'default',
        },
        ,
      ],
    );
  };

  const handleUpdate = (item: IContact) => {
    console.log('update');
    navigate('ContactFormScreen', {data: item});
  };

  return getContact.fetching ? (
    <ActivityIndicator color={Colors.blue400} animating />
  ) : (
    <FlatList
      keyExtractor={item => item.id}
      data={getContact.data}
      renderItem={({item, index}) =>
        renderItem(
          {item, index},
          () => handleDelete(item),
          () => handleUpdate(item),
        )
      }
      showsVerticalScrollIndicator={false}
      refreshing={getContact.fetching}
      onRefresh={() => onCallApi(getContactRequest())}
    />
  );
};

export default ContactList;

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#388e3c',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
    backgroundColor: 'plum',
    height: 20,
  },
  rightAction: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#dd2c00',
    flex: 1,
    justifyContent: 'flex-end',
  },
});
