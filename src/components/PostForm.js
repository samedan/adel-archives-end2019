import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

function PostForm({ addPost, editingPost }) {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    type: '',
    version: '',
    routage: '',
    lien: '',
    annonceurs: ''
  });

  useEffect(() => {
    setPost(editingPost);
  }, [editingPost]);

  const onChange = event => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setLoading(true);
    if (post._id) {
      //   delete post.annonceurs;
      // array from string

      if (post.annonceurs) {
        console.log('array= ' + post.annonceurs);
        post.annonceurs = String(post.annonceurs);
        console.log('String= ' + post.annonceurs);
        // post.annonceurs = annonceursString;
      }
      const postToEdit = post;
      console.log('postToedit= ' + postToEdit);
      axios
        .put(`/biens/edit/${post._id}`, postToEdit)
        .then(res => {
          console.log(res.data);
          addPost(res.data);
          setPost({
            type: '',
            version: '',
            routage: '',
            lien: '',
            annonceurs: ''
          });
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    } else {
      //Add
      axios
        .post('/', post)
        .then(res => {
          console.log(res.data);
          addPost(res.data);
          setPost({
            type: '',
            version: '',
            routage: '',
            lien: '',
            annonceurs: ''
          });
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }
  };
  return (
    <Fragment>
      {!loading ? (
        <form className="push-in" onSubmit={onSubmit}>
          <div className="input-field">
            <select
              htmlFor="type"
              name="type"
              value={post.type}
              onChange={onChange}
              style={{ display: 'block' }}
              className="selectField"
            >
              <option value="0">* Type</option>
              <option value="DAF">DAF</option>
              <option value="DMK">DMK</option>
              <option value="DRH">DRH</option>
              <option value="DSI">DSI</option>
            </select>
          </div>
          {/* <label htmlFor="type">Type</label> */}
          {/* <small className="form-text">Give us an idea of type</small>

          {/* <div className="input-field">
            <label htmlFor="type">Type</label>
            <input
              type="text"
              name="type"
              value={post.type}
              onChange={onChange}
              className="validate"
            />
          </div> */}
          <div className="input-field">
            <label htmlFor="version">Version</label>
            <input
              type="text"
              name="version"
              value={post.version}
              onChange={onChange}
              className="validate"
            />
          </div>
          <div className="input-field">
            <label htmlFor="routage">Routage</label>
            <input
              type="text"
              name="routage"
              value={post.routage}
              onChange={onChange}
              className="validate"
            />
          </div>
          <div className="input-field">
            <label htmlFor="lien">Lien</label>
            <input
              type="text"
              name="lien"
              value={post.lien}
              onChange={onChange}
              className="validate"
            />
          </div>
          <div className="input-field">
            <label htmlFor="annonceurs">Annonceurs</label>
            <input
              type="text"
              name="annonceurs"
              value={post.annonceurs}
              onChange={onChange}
              className="validate"
            />
          </div>

          <button type="submit" className="waves-effect waves-light btn">
            {post._id ? 'Update' : 'Add'}
          </button>
        </form>
      ) : (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      )}
    </Fragment>
  );
}

export default PostForm;
