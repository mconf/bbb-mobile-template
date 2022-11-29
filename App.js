import BbbMobileSdk from "bbb-mobile-sdk";

const App = () => {
  return (
    <BbbMobileSdk
      // join url 
      jUrl={"https://live-oc002.elos.dev/bigbluebutton/api/join?fullName=User+1319332&meetingID=random-7103063&password=mp&redirect=true&checksum=fca7b978fe28fa0ead2a9c02bee974cb9d18f750"}
      onLeaveSession={() => console.log("exited")}
    />
  )
};

export default App;
