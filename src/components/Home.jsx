import React, { useEffect, useState} from "react";
import axios from 'axios';
import style from '../style/Home.module.css'
import Blog from './blog'


function Home() {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/books")
                if (response.status === 200) {
                    if (response.statusText === "OK") {
                        setBlog(response.data)
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
        return () => {}
    }, []);

    async function deleteBlog(id) {
        try {
            const response = await axios.delete("http://127.0.0.1:8000/api/books"+ "/" + id)
            if (response.status === 200) {
                const response = await axios.get("http://127.0.0.1:8000/api/books")
                if (response.status === 200) {
                    if (response.statusText === "OK") {
                        setBlog(response.data)
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>List of books</h1>
            <div className={style.container}>
                {blog.map((item) => {
                    return (
                        <div className={style.blog}>
                            <Blog 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                author={item.author}
                                genre={item.genre}
                                year={item.year_of_publication}
                                onDelete={deleteBlog}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Home;