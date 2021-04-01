import React from 'react';



export default function Link({when, auth, title, url}) {

    return(
        <div>
            <fieldset>
                <legend style={{backgroundColor: 'yellow'}}>{auth}</legend>
                <p>{title}</p>
                <a href={url} target="_blank" rel="noreferrer">Link to article</a>
                <br/>
                <p>*<small>{when}</small>*</p>
            </fieldset>
        </div>
    )
  }


