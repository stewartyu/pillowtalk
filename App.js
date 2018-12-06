/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Video from 'react-native-video';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.videos = [
      {
        thumbnail: `https://s3.amazonaws.com/casper-sleep-spa-958020687612-us-east-1/pillowtalk/pillow-thumbnail.jpg`,
        url: `https://s3.amazonaws.com/casper-sleep-spa-958020687612-us-east-1/pillowtalk/pillow.mp4`,
      },
      {
        thumbnail: `https://s3.amazonaws.com/casper-sleep-spa-958020687612-us-east-1/pillowtalk/sheets-thumbnail.jpg`,
        url: `https://s3.amazonaws.com/casper-sleep-spa-958020687612-us-east-1/pillowtalk/sheets.mp4`,
      },
    ];

    this.state = {
      isVideoPlaying: false,
      currentVideo: 0,
    };

    this.closeVideo = this.closeVideo.bind(this);
    this.selectVideo = this.selectVideo.bind(this);
  }

  closeVideo() {
    this.setState({
      isVideoPlaying: false,
    });
  }

  selectVideo(i) {
    this.setState({
      isVideoPlaying: true,
      currentVideo: i,
    });
  }

  renderVideo() {
    if (!this.state.isVideoPlaying) {
      return null;
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.closeVideo} style={styles.video}>
          <Video
            source={{uri: this.videos[this.state.currentVideo].url}}
            style={styles.video}
          />
        </TouchableOpacity>
      </View>
    );
  }

  renderList() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Pillowtalk</Text>
        <View style={styles.image}>
          {this.videos.map((video, i) => {
            return (
              <TouchableOpacity
                key={video.thumbnail}
                onPress={this.selectVideo.bind(this, i)}
                style={styles.image}
              >
                <Image
                  source={{uri: video.thumbnail}}
                  style={styles.image}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }

  render() {
    return this.state.isVideoPlaying ? this.renderVideo() : this.renderList();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: '100%',
    height: '62.5%',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
