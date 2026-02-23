import { createContext } from "react";
import Student from "./Student";
// import Classteacher from "./Classteacher";

const Sc=createContext();
const Sname=createContext();

function Subteacher(){

    return(
        <>
            {/* <Classteacher score="69"/> */}

           <Sc.Provider value={"69"}> 
                <Sname.Provider value={"Hardik"}>
                     <Student/>
                </Sname.Provider>
            </Sc.Provider>
            
        </>
    )
}
export default Subteacher;
export {Sc,Sname};