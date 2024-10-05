import { useEffect,useState } from "react"

const Useeffect=()=>{

    let [data,setData] = useState("")
    let [data1,setData1] = useState("")

    // With blank dependency Array
    // useEffect(()=>{
    //     console.log(data)
    //     console.log(data1)
    // },[])

    // With Array as an argument
    useEffect(()=>{
        console.log(data)
        console.log(data1)
    },[data, data1])

    return(
        <>
          <center>
        <br/><br/>
        <input type="text" value={data} onChange={(e)=>{setData(e.target.value)}} 
            placeholder="Enter Data">
        </input>
        <br/><br/>
        <input type="text" value={data1} onChange={(e)=>{setData1(e.target.value)}} 
            placeholder="Enter Data1">
        </input>
        </center>
        </>
    )
}

export default Useeffect;