import BbbMobileSdk from "bbb-mobile-sdk";

const InsideConference = (props) => {
  const { route } = props;
  const joinUrl = route.params.joinUrl;
  return (
    <BbbMobileSdk
      // join url 
      jUrl={joinUrl} onLeaveSession={() => console.log("exited")}
    />
  )
};

export default InsideConference;
