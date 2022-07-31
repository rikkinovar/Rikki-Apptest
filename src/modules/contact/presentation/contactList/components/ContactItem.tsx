import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {IContact} from '../../../domain/contactEntities';
import {Avatar, Colors} from 'react-native-paper';

type Props = IContact;

const ContactItem = (props: Props) => {
  const {firstName, lastName, photo, age} = props;

  const getInitialName = () => {
    let result = '';
    if (firstName.length) {
      result += firstName[0];
    }
    if (lastName.length) {
      result += lastName[0];
    }

    return result;
  };

  return (
    <View style={styles.containerItem}>
      {photo !== 'N/A' ? (
        <Avatar.Image source={{uri: photo}} size={50} />
      ) : (
        <Avatar.Text
          label={`${getInitialName()}`}
          size={50}
          style={{backgroundColor: Colors.grey500}}
          color={Colors.white}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{`${firstName} ${lastName}`}</Text>
        <Text style={styles.subtitle}>{`Age: ${age}`}</Text>
      </View>
    </View>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    marginTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey300,
  },
  textContainer: {marginLeft: 8},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.grey800,
  },
  subtitle: {
    fontSize: 12,
  },
});
