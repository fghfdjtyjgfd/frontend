import React from "react";
import style from '../style/Create.module.css';
import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Create() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const navigate = useNavigate();

      const onCreate = async (data) => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/books", data)
            if (response.status === 200) {
                navigate("/")
            }
        } catch (error) {
            console.log(error);
        }
      }

    return (
        <>
            <div className={style.outter}>
                <h1>Create book</h1>
                <form onSubmit={handleSubmit(onCreate)} className={style.container}>
                    <div className={style.insideContainer}>
                        <div className={style.input}>
                            <label>Title</label>
                            <input 
                            defaultValue=""
                            className={`${errors.title && "error"}`}
                            placeholder="  title" 
                            {...register("title", {
                                required: { value: true, message: "Title is required"},
                                min: { value: 1, message: "Title is required"}
                            })} />
                            {errors.title && <div className={style.error}>{errors.title.message}</div>}
                        </div>

                        <div className={style.input}>
                            <label>Author</label>
                            <input 
                            defaultValue=""
                            className={`${errors.author && "error"}`}
                            placeholder="  author" 
                            {...register("author", {
                                required: { value: true, message: "Author is required"},
                                min: { value: 1, message: "Author is required"}
                            })} />
                            {errors.author && <div className={style.error}>{errors.author.message}</div>}
                        </div>

                        <div className={style.input}>
                            <label>Genre</label>
                            <input 
                            defaultValue=""
                            className={`${errors.genre && "error"}`}
                            placeholder="  genre" 
                            {...register("genre", {
                                required: { value: true, message: "Genre is required"},
                                min: { value: 1, message: "Genre is required"}
                            })} />
                            {errors.genre && <div className={style.error}>{errors.genre.message}</div>}
                        </div>

                        <div className={style.input}>
                            <label>Year of publication</label>
                            <input 
                            defaultValue=""
                            type="number"
                            className={`${errors.title && "error"}`}
                            placeholder="  year of publication" 
                            {...register("year_of_publication", {
                                required: { value: true, message: "Year of publication is required"},
                                min: { value: 1, message: "Year of publication is required"}
                            })} />
                            {errors.year_of_publication && <div className={style.error}>{errors.year_of_publication.message}</div>}
                        </div>
                    </div>
                    <button type='submit' className={style.submit}>Create</button>
                </form>
            </div>
        </>
    )
}

export default Create;