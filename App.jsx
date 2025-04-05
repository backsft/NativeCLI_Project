import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!firstName.trim() || !lastName.trim()) {
      setError('Both First Name and Last Name are required!');
      setSubmittedName('');
      return;
    }

    const fullName = `${firstName.trim()} ${lastName.trim()} ${address.trim()}`;
    setSubmittedName(fullName);
    setFirstName('');
    setLastName('');
    setAddress('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Input Test</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />

      <Button title="Submit" onPress={handleSubmit} />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {submittedName ? (
        <Text style={styles.result}>Result: {submittedName}</Text>
      ) : null}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});
