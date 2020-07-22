import React, { useState } from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import "./Create.css"
import CKEditor from 'ckeditor4-react';

const labelStyles = {
  display: "block",
  marginBottom: 4
};

const inputStyles = {
  width: "100%",
  height: "2rem",
  lineHeight: "2rem",
  verticalAlign: "middle",
  fontSize: "1rem",
  marginBottom: "1.5rem",
  padding: "0 0.25rem"
};

const Create = ({ history }) => {
  const [author, setAuthor] = useState("Alyson.B");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [tag, setTag] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [coverImageAlt, setCoverImageAlt] = useState("");
  const [content, setContent] = useState("Write here");

  const generateDate = () => {
    const now = new Date();
    const options = { month: "numeric", day: "numeric", year: "numeric" };

    const year = now.getFullYear();

    let month = now.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }

    let day = now.getDate();
    if (day < 10) {
      day = `0${day}`;
    }

    return {
      formatted: `${year}-${month}-${day}`,
      pretty: now.toLocaleDateString("en-GB", options)
    };
  };

  const createPost = () => {



      const date = generateDate();

    const id = Date.now() 
    
    const newPost = {
      author,
      title,
      dateFormatted: date.formatted,
      datePretty: date.pretty,
      id : id,
      slug,
      tag,
      coverImage,
      coverImageAlt,
      content
      };


      firebase
      .firestore()
      .collection('Posts')
      .doc(`${id}`)
      .set(newPost)
      .then(() => history.push(`/`));

  };

  

  return (
    <div className="create-content">
      <h1>Créer un post</h1>
      <section style={{ margin: "2rem 0" }}>
      <label style={labelStyles} htmlFor="author-field">
          Auteur
        </label>
        <input
          style={inputStyles}
          id="author-field"
          type="text"
          value={author}
          onChange={({ target: { value } }) => {
            setAuthor(value);
          }}
        />

        <label style={labelStyles} htmlFor="title-field">
          Titre
        </label>
        <input
          style={inputStyles}
          id="title-field"
          type="text"
          value={title}
          onChange={({ target: { value } }) => {
            setTitle(value);
          }}
        />

        <label style={labelStyles} htmlFor="slug-field">
          Slug URL
        </label>
        <input
          style={inputStyles}
          id="slug-field"
          type="text"
          value={slug}
          onChange={({ target: { value } }) => {
            setSlug(value);
          }}
        />

        <label style={labelStyles} htmlFor="tag-field">
          Etiquettes
        </label>
        <input
          style={inputStyles}
          id="tag-field"
          type="text"
          value={tag}
          onChange={({ target: { value } }) => {
            setTag(value);
          }}
        />

        <label style={labelStyles} htmlFor="cover-image-field">
          url de l'image
        </label>
        <input
          style={inputStyles}
          id="cover-image-field"
          type="text"
          value={coverImage}
          onChange={({ target: { value } }) => {
            setCoverImage(value);
          }}
        />

        <label style={labelStyles} htmlFor="cover-image-alt-field">
          Text alternatif de l'image
        </label>
        <input
          style={inputStyles}
          id="cover-image-alt-field"
          type="text"
          value={coverImageAlt}
          onChange={({ target: { value } }) => {
            setCoverImageAlt(value);
          }}
        />

        <label style={labelStyles} htmlFor="content-field">
          Contenu
        </label>
        {/* <textarea
          style={{ ...inputStyles, height: 200, verticalAlign: "top" }}
          id="content"
          type="text"
          value={content}
          onChange={({ target: { value } }) => {
            setContent(value);
          }}
        /> */}
        
       <CKEditor
              config={ {
        toolbar: [
            { name: 'document', items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
            { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
            { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
            { name: 'forms', items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
            { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
            { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
                               '-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
            { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
            { name: 'insert', items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
            { name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
            { name: 'colors', items : [ 'TextColor','BGColor' ] },
            { name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About' ] }
            ]
              }}
                    data={content}
                    onChange={(evt) => {
                    setContent(evt.editor.getData());
          }}                  
                /> 

<br/>

        <div style={{ textAlign: "right" }}>
          <button
         
            onClick={createPost}
          >
            Créer
          </button>
        </div>
      </section>
    </div>
  );
};

export default Create;