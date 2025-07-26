import React from 'react'
import './Video.css';
import VideoCard from './VideoCard';

function Video() {
  return (
    <div className="video">
        <h2>Recommended</h2>
      <div className="video__videos">
        <VideoCard
        title="100% FREE AI Agent JARVIS for your Lifetime using Python | Livekit Tutorial in Tamil | AI Coach John"
        channel="AI Coach John(Tamil)"
        channelImage="/john.jpg" 
        views="1M views"
        timestamp="1 day ago"
        
        image="/jarvis.png" 

        />
        <VideoCard
        title="Best frontend and backend projects for resume"
        channel="Hitesh Choudhary"
        channelImage="/resumephoto.jpg" // image in public folder
        views="273k views"
        timestamp="1 years ago"
        image="/resume.png" // image in public folder
        />
        <VideoCard
        title="Scam in the placement process | Placement scam | Placement fraud | Placement scam in Tamil"
        channel="Digi Coder's"
        views="3M views"
        channelImage="/ytlogo.jpeg" // image in public folder
        timestamp="3 days ago"
        image="/2019.png" // image in public folder
        />
         <VideoCard
        title="Spring Boot | Installation and Setup | Episode 1 | Tamil | code io"
        channel="code io-Tamil"
        channelImage="/code.jpg" // image in public folder
        views="4.7k views"
        timestamp="6 days ago"
        image="/codeio.png" // image in public folder
        />
        <VideoCard
        title="#29 Constructor in Java | In Tamil | Java Tutorial Series | Error Makes Clever"
        channel="Error Makes Clever"
        views="1M views"
        channelImage="/channels4_profile.jpg" // image in public folder
        timestamp="3 days ago"
        image="/emc.jpg" // image in public folder
        />
        <VideoCard
        title="Hangman Game - Complete Resume guide in Tamil."
        channel="Aravind"
        channelImage="/aravind.jpg" // image in public folder
        views="273k views"
        timestamp="6 months ago"
        image="/python.jpg" // image in public folder
        />
        <VideoCard
        title="Java Tutorial-Complete OOPS Concept For Beginners In Tamil | That One Programmer"
        channel="That One Programmer"
        views="15k views"
        channelImage="/one.jpg" // image in public folder
        timestamp="1 year ago"
        image="/oops.jpg" // image in public folder
        />
         <VideoCard
        title="📌 Data Structures and Algorithms with JavaScript 🔥 | Ep. 1"
        channel="Ritik Prasad"
        channelImage="/data.jpg" // image in public folder
        views="4.7k views"
        timestamp="3 days ago"
        image="/dsa.jpg" // image in public folder
        />

      </div>
    </div>
  )
}

export default Video;
