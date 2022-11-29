import BbbMobileSdk from "bbb-mobile-sdk";

const App = () => {
  return (
    <BbbMobileSdk
      // join url 
      jUrl={} onLeaveSession={() => console.log("exited")}
    />
  )
};

export default App;
