import { useNavigation } from "@react-navigation/native";
import BbbMobileSdk from "bbb-mobile-sdk";
import { useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';

const InsideConference = (props) => {
  const { route } = props;
  const navigation = useNavigation();
  const joinUrl = route.params.joinUrl;

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to leave the meeting?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => navigation.replace("Home") }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <BbbMobileSdk
      // join url 
      jUrl={joinUrl} 
      onLeaveSession={() => navigation.replace("Home")}
    />
  )
};

export default InsideConference;
