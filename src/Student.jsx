import { useContext } from "react";
import { Sc, Sname } from "./Subteacher";


function Student(){
    var score=useContext(Sc);
    var name=useContext(Sname);
    console.log(score);
    console.log(name);

    return(
        <>
            <h1>Student Name: {name}</h1>
            <h2>Score: {score}</h2>
        </>
    )
}
export default Student;