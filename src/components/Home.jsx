import React, { useEffect, useState} from "react";
import axios from 'axios';
import style from '../style/Home.module.css'
import Blog from './blog'
import { useNavigate, useParams } from "react-router-dom";

function Home() {
    const [blog, setBlog] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

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
            const response = await axios.delete("http://127.0.0.1:8000/api/books"+ "/" + params.id)
            if (response.status === 200) {
                if (response.statusText === "OK") {
                    navigate("/")
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
                
                {blog.map((item, index) => {
                    return (
                        <div className={style.blog}>
                            <Blog 
                                key={index+1}
                                id={index+1}
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