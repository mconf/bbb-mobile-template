import BbbMobileSdk from "bbb-mobile-sdk";
import { useNavigation } from "@react-navigation/native";

const InsideConference = (props) => {
  const { route } = props;
  const joinUrl = route.params.joinUrl;
  const navigation = useNavigation();

  return (
    <BbbMobileSdk
      // join url 
      jUrl={joinUrl}
      onLeaveSession={() => navigation.replace("Home")}
    />
  )
};

export default InsideConference;
