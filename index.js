import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  NativeModules,
  Platform
} from 'react-native';

class RNStartProject extends React.Component {
  
  onBackButtonPress() {
    if (Platform.OS === 'ios') {
      console.log('Back pressed')
      console.log(NativeModules.SomeController)
      NativeModules.SomeController.backPressed()
    }
    else {
      BackAndroid.exitApp()
    }
  }
  
  render() {
    var contents = this.props['scores'].map((score) => (
      <Text key={score.name}>
        {score.name}:{score.value}
      </Text>
    ));
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={() => this.onBackButtonPress()}>
        <Text>Close app</Text>
      </TouchableOpacity>
        <Text style={styles.highScoresTitle}>You are open React native project!</Text>
        <Text style={styles.scores}>{contents}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

// Module name
AppRegistry.registerComponent('RNStartProject', () => RNStartProject);