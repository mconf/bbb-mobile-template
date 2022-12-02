import { useNavigation } from "@react-navigation/native";
import BbbMobileSdk from "bbb-mobile-sdk";

const InsideConference = (props) => {
  const { route } = props;
  const navigation = useNavigation();
  const joinUrl = route.params.joinUrl;
  return (
    <BbbMobileSdk
      // join url 
      jUrl={joinUrl} 
      onLeaveSession={() => navigation.replace("Home")}
    />
  )
};

export default InsideConference;
