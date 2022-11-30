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
