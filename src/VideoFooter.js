import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
            <h3>@jjjjjjulian</h3>
            <p>This is some description</p>
            <div className='videoFooter__ticker'>
                <MusicNoteIcon />
            </div>
        </div>
    </div>
  )
}

export default VideoFooter