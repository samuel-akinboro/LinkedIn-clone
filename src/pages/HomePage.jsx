import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/HomePage.css'
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';

function HomePage() {
  const [showProfile, setShowProfile] = useState(false);
  const [showSort, setShowSort] = useState(false);
  return (
    <div className="home">
      <div className="home__container">
        <div className="left__col">
          <div className="left__col__container">
            <div className="user__detials">
              <div className="grey-cover"></div>
              <div className="profile__image">
                <img src="https://pyxis.nymag.com/v1/imgs/c22/b8d/28e2f9cef6a368b08210b53260a94e0933-19-drake.rvertical.w330.jpg" alt="" />
              </div>
              <h4>drake betney</h4>
              <p>Student at convenant university</p>
            </div>
            {showProfile && <div className="more__details">
              <div className="connection__details">
                <Link to="/">
                  <p>Connections <span>9</span></p>
                  <h5>Grow your network</h5>
                </Link>
                <Link to="/">
                  <p>Invitations <span>2</span></p>
                </Link>
              </div>
              <div className="connection__details">
                <Link to="/">
                  <p>Access exclusive tools & insights</p>
                  <h5>💎 Try Premium Free for 1 Month</h5>
                </Link>
              </div>
              <div className="connection__details">
                <Link to="/">
                  <h5>💼 My items</h5>
                </Link>
              </div>
              <div className="connection__details">
                <p style={{color: "rgb(25,25,25)"}}>Recent</p>
                <Link to="/">
                <p>📓 Front End Developer Group</p>
                <p>📓 AWS Cloud Computing (For Interested Parties & Users)</p>
                <p>📓 Bitcoin</p>
                <p>📓 User Experience Design (UX)</p>
                <p>📓 UI/UX User Experience Interactive Designer / Wireframes</p>
                </Link>
              </div>
              <div className="connection__details">
                <h5 style={{color: "#2E7CCB", fontWeight: "700"}}>Groups</h5>
                <Link to="/">
                <p>📓 Front End Developer Group</p>
                <p>📓 AWS Cloud Computing (For Interested Parties & Users)</p>
                <p>📓 Bitcoin</p>
                <p>📓 User Experience Design (UX)</p>
                <p>📓 UI/UX User Experience Interactive Designer / Wireframes</p>
                </Link>
              </div>
              <div className="connection__details">
                <h5 style={{color: "#2E7CCB", fontWeight: "700"}}>Groups <span><AddIcon style={{color: "#5A5958", fontSize: "1.8em", marginLeft: "15px"}} /></span></h5>
              </div>
              <div className="connection__details">
                <h5 style={{color: "#2E7CCB", fontWeight: "700"}}>Followed Hashtags</h5>
              </div>
            </div>}
          </div>
          <button style={{color: "#5A5958", fontSize: "14px", fontWeight: "500", width: "100%", textAlign: "center", padding: "1em 0"}} onClick={()=> setShowProfile(!showProfile)}>{showProfile ? "Show less" : "Show more"} {showProfile ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </button>
        </div>
        <div className="middle__col">
          <div className="middle__col__container">
            <div className="create__post">
              <div className="create__post__container">
                <div className="input__row">
                  <div className="profile__image">
                    <img src="https://pyxis.nymag.com/v1/imgs/c22/b8d/28e2f9cef6a368b08210b53260a94e0933-19-drake.rvertical.w330.jpg" alt="" />
                  </div>
                  <input type="text" placeholder="Start a post" />
                </div>
                <div className="more__post__type">
                  <div className="type">
                    <PanoramaOutlinedIcon style={{color: "70B5F9"}} /> Photo
                  </div>
                  <div className="type">
                    <YouTubeIcon style={{color: "7FC15E"}} /> Video
                  </div>
                  <div className="type">
                    <DateRangeIcon style={{color: "E7A33E"}} /> Event
                  </div>
                  <div className="type">
                    <ArtTrackIcon style={{color: "FC9295"}} /> Write article
                  </div>
                </div>
              </div>
              <div className="sorting" onClick={()=> setShowSort(!showSort)}>
                <div className="line"></div> <span className="grey-text">Sort by:</span><span>Top &#9660;</span>
                {showSort && 
                <ul>
                  <li className="active__sort">Top</li>
                  <li>Recent</li>
                </ul>}
              </div>
            </div>
            <div className="all__post__container">
              <div className="single__post">
                <div className="post__container">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right__col"></div>
      </div>
    </div>
  )
}

export default HomePage
