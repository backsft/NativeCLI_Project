import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const dummy = [
  {
    id: 1,
    name: 'Sam',
    email: 'sam@yahoo.com',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Lily',
    email: 'lily@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'John',
    email: 'john@hotmail.com',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    name: 'Emma',
    email: 'emma@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: 5,
    name: 'Michael',
    email: 'michael@outlook.com',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 6,
    name: 'Sophia',
    email: 'sophia@yahoo.com',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: 7,
    name: 'David',
    email: 'david@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: 8,
    name: 'Olivia',
    email: 'olivia@hotmail.com',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    id: 9,
    name: 'James',
    email: 'james@yahoo.com',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    id: 10,
    name: 'Ava',
    email: 'ava@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
  {
    id: 11,
    name: 'Robert',
    email: 'robert@aol.com',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    id: 12,
    name: 'Mia',
    email: 'mia@yahoo.com',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    id: 13,
    name: 'William',
    email: 'william@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/13.jpg',
  },
  {
    id: 14,
    name: 'Isabella',
    email: 'isabella@outlook.com',
    image: 'https://randomuser.me/api/portraits/women/14.jpg',
  },
  {
    id: 15,
    name: 'Ethan hunt',
    email: 'ethan@yahoo.com',
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
  },
  {
    id: 16,
    name: 'Emily',
    email: 'emily@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/16.jpg',
  },
  {
    id: 17,
    name: 'Daniel',
    email: 'daniel@hotmail.com',
    image: 'https://randomuser.me/api/portraits/men/17.jpg',
  },
  {
    id: 18,
    name: 'Charlotte',
    email: 'charlotte@yahoo.com',
    image: 'https://randomuser.me/api/portraits/women/18.jpg',
  },
  {
    id: 19,
    name: 'Logan',
    email: 'logan@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/19.jpg',
  },
  {
    id: 20,
    name: 'Amelia',
    email: 'amelia@outlook.com',
    image: 'https://randomuser.me/api/portraits/women/20.jpg',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummy}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.email} numberOfLines={1}>{item.email}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    width: '48%',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  email: {
    fontSize: 12,
    color: '#666',
  },
});
