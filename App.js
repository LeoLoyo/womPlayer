import React from 'react';
import {MediastreamPlayer} from 'react-native-mediastream-player';
import {SafeAreaView} from 'react-native';

function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <MediastreamPlayer
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'orange',
        }}
//        id="5d9e2c829098c969310dda61"
  //      live={false}
        type="VOD"
        showControls
        autoPlay

	id="5e4c667a8c7ffa7067c05b34"
	live
        audio={false}
        environment="dev"
      />
    </SafeAreaView>
  );
}

export default App;

