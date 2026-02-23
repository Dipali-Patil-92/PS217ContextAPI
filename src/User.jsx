import { useLocation, useParams } from "react-router-dom"

export default function User(){
    var{fname,lname}=useParams();
    var location=useLocation();

    return(
        <>
            <h1>This from User Page</h1>
            <h3>User Name is {fname} {lname}</h3>
            <h5>Current Url: {location.pathname}</h5>
        </>
    )
}
