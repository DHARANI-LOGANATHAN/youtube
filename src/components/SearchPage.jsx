
import React from 'react';
import "./SearchPage.css";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

import TuneSharpIcon from '@mui/icons-material/TuneSharp';
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
       
        <TuneSharpIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      {/* <ChannelRow
      image="/rosepot1(1).png"
      Channel="CodeWithHarry"

      verified
      subs="1.5M"
      noOfVideos={382}
      description="Learn to code with CodeWithHarry"
      /> */}
      {/* <hr /> */}
      <VideoRow
        views="6.2M"
        subs="1.5M"
        description="Are you worried about placements/internships? Want to prepare for companies like Microsoft, Amazon & Google? Join ALPHA.
🔴 Alpha Placement Batch - https://bit.ly/3ELJjn2"
        timestamp="6 day ago"
        image="/1shot.png"
        title="Java OOPs in One Shot | Object Oriented Programming | Java Language | Placement Course"
      />

       <VideoRow
        views="5.2M"
        subs="2.5M"
        description="Important video for OOP interviews! The complete and in-depth explanation with real-world examples of #OOP principles such as Inheritance, Polymorphism, Encapsulation and Abstraction."
        timestamp="1 day ago"
        title="OOP 3 | Principles - Inheritance, Polymorphism, Encapsulation, Abstraction"
        image="/kunal.png"
      />
      <VideoRow
        views="1.2M"
        subs="50k"
        description="Java Tutorial-Complete OOPS Concept For Beginners In Tamil | That One Programmer"
        timestamp="1 day ago"
        image="/oops.jpg"
        title="OOPS Crash Course"
      />

       
      </div>
     
    
  );
}
export default SearchPage;
