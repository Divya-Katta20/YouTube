import { upload } from '@testing-library/user-event/dist/upload';
import '../styles/addvideo.css'
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
const AddVideo = () => {
    let navigate = useNavigate()
    let thumbnail = useRef(null)
    let title = useRef(null)
    let channel = useRef(null)
    let views = useRef(null)
    
    let upload = (e)=>{
        e.preventDefault() //prevents the page from reloading
        let data = {
            thumnnail:thumbnail.current.value,
            title:title.current.value,
            channel:channel.current.value,
            views:views.current.value
        }
        fetch('http://localhost:4000/videos',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('video uploaded successfully')
        navigate('/')
    }

    return ( 
        <div className="addVideo">
            <div className='formdiv'>
            <form action="" onSubmit={upload}>
                <p>Add Video</p>

                <label htmlFor="thumnnail">Thumbnail</label><br/>
                <input ref={thumbnail} type="url" placeholder="enter Thumbnail url" /><br/>
                
                <label htmlFor="title">Title</label><br/>
                <input ref={title} type="text" placeholder="enter Title  of the video" /><br/>
                
                <label htmlFor="channel">Channel</label><br/>
                <input ref={channel} type="text" placeholder="enter Channel" /><br/>
                
                <label htmlFor="views">Views</label><br/>
                <input ref={views} type="text" placeholder="enter Views" /><br/>
                
                <button>Upload Video</button>
            </form>
            </div>
        </div>
     );
}
 
export default AddVideo;