import React,{useEffect} from "react";

const Restaurentmenu=()=>{
    useEffect(()=>{
       fetchMenu();
    },[])

    const fetchMenu = async()=>{
            const data =await fetch("")
    }


    return(
        <div className="">
            <h1>Name of the Restaurent</h1>
            <h1>Menu</h1>
            <ul>
                <li>Biryani</li>
                <li>Barger</li>
                <li>Drink</li>
            </ul>

        </div>
    )
}
export default Restaurentmenu;