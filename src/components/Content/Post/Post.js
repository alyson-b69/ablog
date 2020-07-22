import React, {useState} from 'react';
import NoMatch from "../NoMatch/NoMatch";
import firebase from 'firebase/app';
import 'firebase/firestore';
import './Post.css'

const Post = ({ match }) => {
    const slug = match.params.slug;

    const [loading, setLoading] = useState(true);
    const [currentPost, setCurrentPost] = useState([]);

    // const postDoesNotExist = !currentPost;

    if (loading && !currentPost.length) {
        firebase
          .firestore()
          .collection('Posts')
          .where("slug", "==", slug)
          .get()
          .then(snapshot => {
              let posts = [];
            snapshot.forEach(doc => {
                if (doc && doc.exists) {
                    posts.push(doc.data());
                }
              });
            setCurrentPost(posts)
            setLoading(false);
            
          });  
        }

    if (loading) {
        return <h1>Loading...</h1>;
      }
    
       if(!currentPost.length){
         return <NoMatch />
      }


      return (
        <>
{currentPost.map(currentPost => (
  <div className="single-post" key={currentPost.id}> 
    <div className="single-img">
              <img src={currentPost.coverImage} alt={currentPost.coverImageAlt}></img>
      </div>
      <h1>{currentPost.title}</h1>
      <div className="metaPost">
              <div><i className="fa fa-user" aria-hidden="true"></i> {currentPost.author}</div>
              <div><i className="fa fa-calendar" aria-hidden="true"></i> {currentPost.datePretty}</div>
              <div><i className="fa fa-tag" aria-hidden="true"></i> {currentPost.tag}</div>
      </div>

      
      <div className="single-content" dangerouslySetInnerHTML={{ __html: currentPost.content }}></div>
      </div>
))}
    </>
      
);
};

export default Post;