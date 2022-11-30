import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button, Text, TextInput, StyleSheet } from 'react-native';

const Home = () => {
  const [joinUrl, setJoinUrl] = useState("");
  const navigation = useNavigation();
  return (
    <>
      <Text>Join URL</Text>
      <TextInput
        style={styles.input}
        onChangeText={setJoinUrl}
        value={joinUrl}
      />
      <Button
        onPress={() => navigation.navigate("InsideConference", {
          joinUrl,
        })}
        title="JOIN"
        color="#841584"
        accessibilityLabel="Join Button"
      />
    </>
  )
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Home;
