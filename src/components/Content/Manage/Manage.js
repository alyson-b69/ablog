import React, {useState} from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import "./Manage.css"

const Manage = () => {

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
    

return(
<div className="manage-content">
    <h1>Manage posts</h1>
    <p>Bonjour </p>
    <div className="modif-btn">
        <button>Editer</button>
        <button>Supprimer</button>
    </div>
    
    <table className="tab-modif">
    <thead> 
        <tr>
            <th> </th>
            <th>TITRE</th>
            <th> AUTEUR </th>
            <th> CATEGORIE </th>
            <th> DATE </th>          
        </tr>
        
    </thead>
    <tbody>
    {blogPosts.map(blogPost => (
    
        
        <tr key={blogPost.id}> 
            <td><input type="checkbox" id={blogPost.id}></input></td>
            <td> {blogPost.title} </td>
            <td> {blogPost.author} </td>
            <td> {blogPost.tag} </td> 
            <td> {blogPost.datePretty} </td>
        </tr>
     
    ))}
    </tbody>
    </table>

</div>

)   

}

export default Manage;