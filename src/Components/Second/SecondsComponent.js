import {useEffect , useState} from "react";

const Seconds=({minutes,setminutes})=>{

    const [seconds,setseconds]=useState();

    useEffect(()=>{
        console.log(seconds);
        if (seconds===0) {
            setminutes(0);
        }
    },[seconds,setminutes])

    useEffect(()=>{
        setseconds(minutes*60);
    },[minutes])

    useEffect(()=>{
        const countdown=
        setInterval(()=>{setseconds(prevState=> prevState-1)},1000);

        return ()=>clearInterval(countdown);

    },[]);

    return <h1>{`${seconds} ` }second</h1>
}
export default Seconds;