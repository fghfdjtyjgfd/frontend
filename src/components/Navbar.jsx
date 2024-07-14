import React from "react";
import { Link } from 'react-router-dom';
import style from '../style/Navbar.module.css'

function Navbar() {
    return (
        <nav >
            <div className={style.navbar}>
                <Link className={style.textMenu} to="/">Home</Link>
                <Link className={style.textMenu} to="/create">Create</Link>
            </div>
        </nav>
    )
}

export default Navbar;