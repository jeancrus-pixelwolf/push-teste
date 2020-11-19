import React, { Component } from "react";
import { withWonderPush } from "react-wonderpush";

export class EventToTrack extends Component {
  constructor(props) {
    super(props);
    this.fireEvent = this.fireEvent.bind(this);
  }

  fireEvent(e) {
    this.props.wonderPush.trackEvent("myEvent");
  }

  render() {
    return (
      <div className={"event myEvent"} onClick={this.fireEvent}>
        Click on this div will track event name myEvent
      </div>
    );
  }
}

export default withWonderPush(EventToTrack, { waitWonderPushReady: true });
