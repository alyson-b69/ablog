import React, {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Link } from "react-router-dom";
import "./Home.css"


const Home = () => {

    const [loading, setLoading] = useState(true);
    const [blogPosts, setBlogPosts] = useState([]);

    if (loading && !blogPosts.length) {
    firebase
      .firestore()
      .collection('Posts')
      .orderBy("id", "desc")
      .get()
      .then(snapshot => {
          let posts = [];
        snapshot.forEach(doc => {
            if (doc && doc.exists) {
                posts.push(doc.data());
            }
          });
        setBlogPosts(posts)
        setLoading(false);
      });



    }

    if (loading) {
        return <h1>Loading...</h1>;
      }
    

    return (
        <div className="blog-grid">          
                {blogPosts.map(blogPost => (
                    <section key={blogPost.slug} className="card">
          <img src={blogPost.coverImage} alt={blogPost.coverImageAlt} />
          <div className="card-content">
         <h2> <Link to={`/${blogPost.slug}`}>{blogPost.title}</Link></h2>
            <div className="metaPost">
              <div><i className="fa fa-user" aria-hidden="true"></i> {blogPost.author}</div>
              <div><i className="fa fa-calendar" aria-hidden="true"></i> {blogPost.datePretty}</div>
              <div><i className="fa fa-tag" aria-hidden="true"></i> {blogPost.tag}</div>
            </div>
              

              <div className="post-content"
              dangerouslySetInnerHTML={{
                __html: `${blogPost.content.substring(0, 200)}...`
              }}
            ></div>
            <button><Link to={`/${blogPost.slug}`}>Lire la suite</Link></button>
          </div>
        </section>
                ))}
        </div>
       
    )
}

export default Home;