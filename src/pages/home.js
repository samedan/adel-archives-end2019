import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import PostForm from '../components/PostForm';

const Home = ({ posts }) => {
  // const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(false);
  const [editingPost, setEditingPost] = useState({
    _id: null,
    type: '',
    version: '',
    routage: '',
    lien: '',
    annonceurs: ''
  });

  // // get all users
  // const getPosts = async () => {
  //   try {
  //     setLoading(true);
  //     const res = await axios.get('/bien_archives');

  //     if (res) {
  //       setPosts(res.data);
  //       setLoading(false);
  //     } else {
  //       setLoading(true);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   // axios
  //   //   .get('/bien_archives')
  //   //   .then(res => {
  //   //     console.log(res.data);
  //   //     setPosts(res.data);
  //   //   })
  //   //   .catch(err => console.error(err));
  //   getPosts();
  // }, []);

  // function editPost(post) {
  //   setEditingPost(post);
  // }
  // function deletePost(id) {
  //   axios
  //     .delete(`/biens/${id}`)
  //     .then(() => {
  //       const postsUpdated = posts.filter(p => p._id !== id);
  //       setPosts(postsUpdated);
  //     })
  //     .catch(err => console.error(err));
  // }

  // function addPost(post) {
  //   if (posts.find(p => p._id === post._id)) {
  //     // this post exists
  //     const index = posts.findIndex(p => p._id === post._id);
  //     console.log('post= ' + post);
  //     const postsUpdated = [...posts];
  //     postsUpdated.splice(index, 1, post);
  //     setPosts(postsUpdated);
  //   } else {
  //     // new post
  //     const postsUpdated = [post, ...posts];
  //     setPosts(postsUpdated);
  //   }
  // }
  // console.log('postsHome= ' + posts);

  // const getNumberOfPosts = () => {
  //   axios
  //     .get(`/${limit}`)
  //     .then((res => setPosts(res.data)).catch(err => console.error(err)));
  // };

  return (
    <Fragment>
      <p>Home</p>
    </Fragment>
    //   {loading ? (
    //     <div className="progress">
    //       <div className="indeterminate"></div>
    //     </div>
    //   ) : (
    //     <div className="row">
    //       <div className="col s6">
    //         <PostForm addPost={addPost} editingPost={editingPost} />
    //       </div>
    //       <div className="col s3 push-in">
    //         <p>Limit number of posts:</p>
    //         <input
    //           type="number"
    //           value={limit}
    //           onChange={event => setLimit(event.target.value)}
    //         />
    //         <button
    //           onClick={getNumberOfPosts}
    //           className="waves-effect waves-light btn"
    //         >
    //           Set
    //         </button>
    //       </div>
    //     </div>
    //   )}

    //   <div className="row">
    //     {posts.map(post => (
    //       <div className="col s6" key={post._id}>
    //         <div className="card">
    //           <div className="card-content">
    //             <div className="card-title">{post.type}</div>
    //             <p className="timestamp">{post.version}</p>
    //             <p>{post.routage}</p>
    //             <p>{post.annonceurs.join(', ')}</p>
    //             <p>
    //               <a href={post.lien} target="_blank">
    //                 Lien
    //               </a>
    //             </p>
    //             <div className="card-action">
    //               <a href="#" onClick={editPost.bind(null, post)}>
    //                 Edit
    //               </a>
    //               <a
    //                 href="#"
    //                 onClick={deletePost.bind(null, post._id)}
    //                 className="delete-btn"
    //               >
    //                 Delete
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </Fragment>
  );
};

export default Home;
