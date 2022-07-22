import React, { Component } from 'react';
import * as VideoExpress from "@vonage/video-express";

import request from '../api/request';
import './home.css';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: null,
      call: false,
      session :"Session key",
      token: "Vonage Token",
      screen: false
    }
    this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      }
    };
  }

  async startRoom() {
   

    if(this.state.token){
    const room = new VideoExpress.Room({
      apiKey: 'Vonage Api Key',
      sessionId: this.state.session,
      token: this.state.token,
      managedLayoutOptions: {
        layoutMode: "active-speaker",
      }
    });
    this.setState({ room: room })
    const m = {
      publisherOptions: {
        targetElement: "publisherContainer",
        publisherProperties: {
          resolution: "720x468",
          publishAudio: true,
          publishVideo: true,
          mirror: false,
          audioBitrate: 15,
          audioFallbackEnabled: true,
        },
      },
    }
    if (this.state.room) {
      this.setState({call: true})
      await this.state.room.join(m)
    }}
    console.log(this.state.call)
  }

  logout= () => {
    this.state.room.leave();
    this.setState({call: false, role: null})
  }
  shareScreen= () =>{
    if(this.state.screen){
      this.state.room.stopScreensharing();
      this.setState({screen: false})
    }
    else{
      this.state.room.startScreensharing();
      this.setState({screen: true})
    }
  }

  onError = (err) => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  }

  render() {
    return (
      <>
        {!this.state.call &&
          <div>
            <button onClick={() => this.startRoom()}> Join Call</button>
          </div>

        }
        {this.state.call &&
        <div>
          <button type="submit" onClick={this.logout}>Logout</button>
          <button type="submit" onClick={this.shareScreen}>Share Screen</button>
        </div>
        }

      </>
    );
  }
}

export default Home;
