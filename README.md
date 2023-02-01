#  bbb-mobile-template

## Code dependencies

### Versions

    $ node -v
    v16.x.y

### 
    $ npm install expo-cli -g

#### for android:
    $ java --version
    openjdk 11
    
You have to set the Android variables for you environment: 
 - `export ANDROID_HOME=$HOME/Android/Sdk`
 - `export PATH=$PATH:$ANDROID_HOME/tools` 



## How to run
     $ expo init my-app --template @mconf/bbb-mobile-template
     $ expo run:android  
     $ expo run:ios

## Using the sdk in your app
    import BbbMobileSdk from "bbb-mobile-sdk";
    
Pass the joinUrl of your meeting in the jUrl prop, and what to do when the user leave the meeting to the onLeaveSession callback:

    <BbbMobileSdk
      jUrl={joinUrl} 
      onLeaveSession={() => navigation.replace("Home")}
    />
    
See https://github.com/mconf/bbb-mobile-template/blob/master/src/screens/InsideConference/index.js for an example.
