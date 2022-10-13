import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    //BEM naming convention
    <div className="app">
        <div className='app__videos'>
          <Video 
          url='https://v16-webapp.tiktok.com/c8d1a603b11dde39ce374c3e8b36434b/63484108/video/tos/maliva/tos-maliva-ve-0068c799-us/4e0d09f7ac4343818c162c56d25a02eb/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=3044&bt=1522&cs=0&ds=3&ft=kLO5qyjGZmo0P-_XmBkVQQvkmiHKJdmC0&mime_type=video_mp4&qs=0&rc=OmU1ZzU8Z2lkOmY3ZGk4ZEBpam10bWQ6ZnZoOjMzZzczNEAxNC0uXjEuNTIxMWE2Y2I2YSNlL24vcjRvbi9gLS1kMS9zcw%3D%3D&l=2022101310463801021402902521312FD7&btag=80000'
          channel='jjjjulian'
          description='Hey! MY MERN FRONT-END WORS'
          song='99 problems but REACT AINT ONE!'
          likes={123}
          messages={456}
          shares={789}
          />
          <Video 
          url='https://v16-webapp.tiktok.com/6fb6ab4441090848b7de105ec24a2fb6/63484173/video/tos/useast2a/tos-useast2a-ve-0068c001/15f8ad9619344ee4ad1eac64bf9a6789/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1624&bt=812&cs=0&ds=3&ft=kLO5qyjGZmo0PC-XmBkVQ_sfmiHKJdmC0&mime_type=video_mp4&qs=0&rc=ODY6Njo7OzxoNzRnMzNmNkBpajs0ZWlvZjs3MzMzNTczM0AzM2FfNS5jNjExNl8yYzFhYSNzazJyaGAtamxgLS0wMTZzcw%3D%3D&l=20221013104835010190218066182F955D&btag=80000'
          channel='jjjjulian'
          description='This is a different component'
          song='99 problems but REACT AINT ONE!'
          likes={999}
          messages={654}
          shares={812}
          />
        </div>
        
        {/* app container */}
        {/* videos */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}
    </div>
  );
}

export default App;
