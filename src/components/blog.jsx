import React from "react";
import {Link} from 'react-router-dom';
import '../style/index.css'

function Blog(probs) {

    function handleClick() {
        probs.onDelete(probs.id)
    }

    return (
        <>
            <div>
                <h2>Title : {probs.title}</h2>
                <h3>Author : {probs.author}</h3>
                <h3>Genre : {probs.genre}</h3>
                <h3>Year of publication : {probs.year}</h3>
                <p>ID : {probs.id}</p>
                <button onClick={handleClick} className="submit">DELETE</button>
                <Link to={`update/${probs.id}`} className="submit">UPDATE</Link>
            </div>
        </>
    )
}

export default Blog;