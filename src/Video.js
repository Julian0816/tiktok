import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';

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
        src='https://v16-webapp.tiktok.com/afa1cfb79582e3865a596818c796e642/63475f6b/video/tos/alisg/tos-alisg-pve-0037c001/0fee704b44ad4bf7bd9174a4f5214e82/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3076&bt=1538&cs=0&ds=3&ft=kLO5qyjGZmo0P4dymBkVQ6NwmiHKJdmC0&mime_type=video_mp4&qs=0&rc=Nzg7ZjY4aTw1aDU0Nzw3OkBpandmOGc6Zm11ZjMzODczNEBgLl5gLzViNi8xYmEyLmAxYSNhaTY2cjRfMGJgLS1kMS1zcw%3D%3D&l=20221012184410010217095233260018EC&btag=80000'></video>

        {/* VideoFooter */}
        {/* VideoSidebar */}

        <VideoFooter />
    </div>
  )
}

export default Video