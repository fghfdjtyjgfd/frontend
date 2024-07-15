import React from "react";
import {Link} from 'react-router-dom';
import '../style/index.css'

function Blog(probs) {

    function handleClick() {
        probs.onDelete(probs.id)
    }

    return (
        <>
            <div className="blog">
                <h4>Title : {probs.title}</h4>
                <h4>Author : {probs.author}</h4>
                <h4>Genre : {probs.genre}</h4>
                <h4>Year of publication : {probs.year}</h4>
                <button onClick={handleClick} className="delete">DELETE</button>
                <Link to={`update/${probs.id}`} className="update">UPDATE</Link>
            </div>
        </>
    )
}

export default Blog;