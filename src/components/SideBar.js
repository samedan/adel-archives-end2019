import React from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import Post from '../pages/post';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postsLoaded: []
    };
  }

  componentDidMount() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
    // console.log('propssidebar= ');
    // console.log(this.props.posts);
    const { posts } = this.props;
    this.setState({ postsLoaded: posts });
    // console.log('postsSidebar= ' + posts);
  }

  render() {
    return (
      <ul className="collapsible" style={{ width: 250 }}>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">filter_drama</i>DSI News{' '}
          </div>
          {this.state.postsLoaded !== null ? (
            this.state.postsLoaded.map(post => {
              if (post.type === 'DSI') {
                return (
                  <div className="collapsible-body" key={post._id}>
                    <Link
                      to={{
                        pathname: `/${post.type}/${post._id}`,
                        state: { post }
                      }}
                    >
                      <span>{post.version} X</span>
                    </Link>
                  </div>
                  //   </div>
                  // </li>
                );
              }
            })
          ) : (
            <p>Loading...</p>
          )}
        </li>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">place</i>DAF
          </div>
          {this.state.postsLoaded !== null ? (
            this.state.postsLoaded.map(post => {
              if (post.type === 'DAF') {
                return (
                  <div className="collapsible-body" key={post._id}>
                    <Link
                      to={{
                        pathname: `/${post.type}/${post._id}`,
                        state: { post }
                      }}
                    >
                      <span>{post.version} X</span>
                    </Link>
                  </div>
                  //   </div>
                  // </li>
                );
              }
            })
          ) : (
            <p>Loading...</p>
          )}
        </li>
      </ul>
    );

    // return (
    //   <ul className="collapsible" style={{ width: 250 }}>
    //     <li>
    //       <div className="collapsible-header">
    //         <i className="material-icons">filter_drama</i>First
    //       </div>
    //       <div className="collapsible-body">
    //         <span>Lorem ipsum dolor sit amet.</span>
    //       </div>
    //     </li>
    //     <li>
    //       <div className="collapsible-header">
    //         <i className="material-icons">place</i>Second
    //       </div>
    //       <div className="collapsible-body">
    //         <span>Lorem ipsum dolor sit amet.</span>
    //       </div>
    //     </li>
    //     <li>
    //       <div className="collapsible-header">
    //         <i className="material-icons">whatshot</i>Third
    //       </div>
    //       <div className="collapsible-body">
    //         <span>Lorem ipsum dolor sit amet.</span>
    //       </div>
    //     </li>
    //   </ul>
    // );
  }
}

export default Sidebar;
