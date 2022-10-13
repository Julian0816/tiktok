import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url, chanel, description, song, likes, messages, shares}) {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
        // if video playing
        // stop it...

        // otherwise if its not playing
        // play it...
    }

  return (
    <div className='video'>
        <video 
        onClick={handleVideoPress}
        className='video__player'
        loop
        ref={videoRef}
        src={url}></video>

        {/* VideoFooter */}
        <VideoFooter chanel={chanel} description={description} song={song}/>

        {/* VideoSidebar */}
        <VideoSidebar likes={likes} shares={shares} messages={messages}/>
        
    </div>
  )
}

export default Video