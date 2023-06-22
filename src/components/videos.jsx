import { useEffect, useState } from "react";
import '../styles/video.css'
const Videos = () => {
    let [videos,setVideo] = useState([])
    let[shorts,setShorts] = useState([])
    useEffect(()=>{
        let fetchData = async()=>{
            let response=await fetch('http://localhost:4000/videos')
            let data=await response.json()
            setVideo(data)
            let response1=await fetch('http://localhost:4000/shorts')
            let data1=await response1.json()
            setShorts(data1)
            // let response=await fetch('http://localhost:4000/youtube')
            // let data=await response.json()
            // setVideo(data.videos)
            // setShorts(data.shorts)
        }
        fetchData()
    },[]) //if u want to refersh automatically then remove [] this
   
    let removeVideo=(id,name)=>{
        fetch(`http://localhost:4000/videos/${id}`,{
            method:'DELETE'
        })
        alert(`${name} video got removed`)
        // let result = Videos.filter((x)=>x.id!==id)
        // setVideo(result)
        // alert(`${name} got deleted`)
    }
    return ( 
        
        <div className="Videos">
            <div className="feature"> <h1>Feature Videos</h1></div>
           
            <div className="videodata">
            {
                videos.map((data)=>{
                    return (
                        <div className="video">
                            <img src={data.thumnnail} alt="" />
                            <div className="videodetails">
                            <h3>{data.title}</h3>
                            <h4>{data.channel}</h4>
                            <h5>{data.views}</h5>
                            <a onClick={()=>removeVideo(data.id,data.channel)}>Remove</a>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className="shorts">
                <h1>Shorts</h1>
                <div className="container">
                    {
                       shorts.map((data1)=>{
                            return(
                                <div className="shortsdata">
                                    <img src={data1.thumnails} alt="" />
                                    <h2>{data1.titles}</h2>
                                    <h4>{data1.view}</h4>
                                </div>
                            )
                       })
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Videos;