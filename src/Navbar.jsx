import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <Link to='/'>Student</Link>
            <NavLink to='/home' >Home</NavLink>
            <NavLink to='/About' >About</NavLink>
            <NavLink to='/Contact' >Contact</NavLink>
            <NavLink to='/Student' >Stud</NavLink>
            <NavLink to='/User/Dipali/Patil' >User</NavLink>

            <a href="/">Hello</a>
        </>
    )
}