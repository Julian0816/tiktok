import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video() {
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
        src='https://v16-webapp.tiktok.com/d893e0a5063b22d771031bd44920faa8/63483333/video/tos/useast2a/tos-useast2a-ve-0068c004/656a7c5d04c3478e878e96518bf8974c/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=916&bt=458&cs=0&ds=3&ft=kLO5qyjGZmo0PwNMmBkVQk92miHKJdmC0&mime_type=video_mp4&qs=0&rc=NWZmPDRnZzRnNDtlMzY1OEBpM3ZrZDM6ZnI6ZzMzNzczM0AxYF80NTY1NTUxMV5iL2ExYSNwcW5ncjQwNTBgLS1kMTZzcw%3D%3D&l=20221013094609010214029018242AF2B2&btag=80000'></video>

        {/* VideoFooter */}
        <VideoFooter />

        {/* VideoSidebar */}
        <VideoSidebar />
        
    </div>
  )
}

export default Video