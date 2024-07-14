import React, { useState, useEffect } from "react";
import style from '../style/Create.module.css';
import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


function Update() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const params = useParams();
      const [data, setData] = useState(false);

      const navigate = useNavigate();

      useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/books"+ "/" + params.id)
                if (response.status === 200) {
                    if (response.statusText === "OK") {
                        setData(response.data)
                        console.log(params.id);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
        return () => {}
    }, []);

      const onUpdate = async (data) => {
        try {
            const response = await axios.put("http://127.0.0.1:8000/api/books"+ "/" + params.id, data)
            if (response.status === 200) {
                setData(response.data)
                navigate("/")
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
      }

    return (
        <>
            <div>
                <h1>Update book</h1>
                <form onSubmit={handleSubmit(onUpdate)} className={style.container}>
                    <div className={style.input}>
                        <label>Title</label>
                        <input 
                        defaultValue={data.title}
                        className={`${errors.title && "error"}`}
                        placeholder="title" 
                        {...register("title", {
                            required: { value: true, message: "Title is required"},
                            min: { value: 1, message: "Genre is required"}
                        })} />
                        {errors.title && <div className={style.error}>{errors.title.message}</div>}
                    </div>

                    <div className={style.input}>
                        <label>Author</label>
                        <input 
                        defaultValue={data.author}
                        className={`${errors.author && "error"}`}
                        placeholder="author" 
                        {...register("author", {
                            required: { value: true, message: "Author is required"},
                            min: { value: 1, message: "Genre is required"}
                        })} />
                        {errors.author && <div className={style.error}>{errors.author.message}</div>}
                    </div>

                    <div className={style.input}>
                        <label>Genre</label>
                        <input 
                        defaultValue={data.genre}
                        className={`${errors.genre && "error"}`}
                        placeholder="genre" 
                        {...register("genre", {
                            required: { value: true, message: "Genre is required"},
                            min: { value: 1, message: "Genre is required"}
                        })} />
                        {errors.genre && <div className={style.error}>{errors.genre.message}</div>}
                    </div>

                    <div className={style.input}>
                        <label>Year of publication</label>
                        <input 
                        defaultValue={data.year_of_publication}
                        type="number"
                        className={`${errors.title && "error"}`}
                        placeholder="year of publication" 
                        {...register("year_of_publication", {
                            required: { value: true, message: "Year of publication is required"},
                            min: { value: 1, message: "Genre is required"}
                        })} />
                        {errors.year_of_publication && <div className={style.error}>{errors.year_of_publication.message}</div>}
                    </div>
                    <button type='submit' className="submit">Update</button>
                </form>
            </div>
        </>
    )
}

export default Update;