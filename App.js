/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      isVideoPlaying: false,
    };

    this.closeVideo = this.closeVideo.bind(this);
    this.selectVideo = this.selectVideo.bind(this);
  }

  closeVideo() {
    this.setState({
      isVideoPlaying: false,
    });
  }

  selectVideo() {
    this.setState({
      isVideoPlaying: true,
    });
  }

  renderVideo() {
    if (!this.state.isVideoPlaying) {
      return null;
    }

    const video = 'https://d270gkllvn2eew.cloudfront.net/wave/PDP_wave2_D01.mp4';

    return (
      <TouchableOpacity onPress={this.closeVideo} style={styles.video}>
        <Video
          source={{uri: video}}
          style={styles.video}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Pillowtalk</Text>
        <Text
          onPress={this.selectVideo}
          style={styles.welcome}
        >
          Click to play video
        </Text>
        {this.renderVideo()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
