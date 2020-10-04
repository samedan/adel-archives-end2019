import React from 'react';
import ReactDOM from 'react-dom';

import Iframe from 'react-iframe';
var Spinner = require('react-spinkit');

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postsLoaded: [],
      loading: true
    };
  }

  componentDidMount() {
    console.log(this.props);
    console.log(this.props.location.state.post);
    // const { posts } = this.props;
    // const { posts } = this.props;
    // this.setState({ postsLoaded: posts });
    // console.log(post);
  }
  componentDidUpdate(prevProps) {
    console.log(this.props.location.state.post);
  }

  hideSpinner = () => {
    this.setState({
      loading: false
    });
  };

  render() {
    return (
      <div>
        <div>PostID {this.props.match.params.id}</div>
        <div>Routage {this.props.location.state.post.routage}</div>
        <div>Type {this.props.location.state.post.type}</div>
        <div>Version {this.props.location.state.post.version}</div>
        {/* <div>Lien {this.props.location.state.post.lien}</div> */}
        <div>Date {this.props.location.state.post.date}</div>
        <div className="container rsvp-wrapper">
          <div className="container rsvp-wrapper">
            {this.state.loading ? (
              <Spinner
                className="loading text-center"
                name="three-bounce"
                color="white"
                fadeIn="none"
              />
            ) : null}
            <Iframe
              url={this.props.location.state.post.lien}
              width="450px"
              height="450px"
              id="myId"
              className="myClassname"
              style={{ width: '100%' }}
              display="initial"
              position="relative"
              onLoad={this.hideSpinner}
              loading={true}
            />
            {/* <iframe
                src={this.props.location.state.post.lien}
                //   width={{100%}}
                style={{
                  maxWidth: 640,
                  width: '100%',
                  height: this.state.iFrameHeight,
                  overflow: 'auto'
                }}
                height="700"
                onLoad={this.hideSpinner}
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
