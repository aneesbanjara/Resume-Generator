import { Fragment, useEffect, useState } from "react";
import axios from "axios"

import Button from "../Button/Button";
import Counts from "../Counts/Counts";

import classes from './Resume.module.css'

import imgLogo from './../../assets/backLogo.png'
import emailLogo from '../../assets/email.png'
import locationLogo from '../../assets/location.png'
import twitterLogo from '../../assets/twitter.png'
import organizationLogo from '../../assets/business.png'
import createdAtLogo from '../../assets/joinedDate.png'
import websiteLogo from '../../assets/website.png'
import LogoProperties from "../LogoProperties/LogoProperties";


const Resume = (props) => {
  const [followersCount, setFollowersCount] = useState()
  const [followingCount, setFollowingCount] = useState()
  const [reposCount, setReposCount] = useState()
  const [isHireable, setIsHirable] = useState(false)

  const followersCountHandler = (userURL) => {
    axios.get(userURL).then((res) => {
      setFollowersCount(res.data.length)
    }).catch((e) => {
      setFollowersCount('N/A')
    })    
  }

  const followingCountHandler = (userURL) => {
    axios.get(userURL).then((res) => {
      setFollowingCount(res.data.length)
    }).catch((e) => {
      setFollowingCount('N/A')
    })       
  }

  const reposCountHandler = (userURL) => {
    axios.get(userURL).then((res) => {
      setReposCount(res.data.length)
    }).catch((e) => {
      setReposCount('N/A')
    })      
  }

  const d = new Date(props.data.joinedDate)
  const YYYY = d.getFullYear()
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const MM = months[d.getMonth()]
  const DD = d.getDate()

  if(props.data.hireable === true) {
    setIsHirable(true)
  }

  useEffect(() => {
    followersCountHandler(props.data.followers_url)
    followingCountHandler(props.data.following_url)
    reposCountHandler(props.data.repos_url)
  }, [])


  return(
    <Fragment>
      <div className={classes.backAndHire}>
        <div className={classes.div1}>
          <button className={classes.btn} onClick={props.onBack}><img src={imgLogo} alt="back button" /></button>
          {isHireable && (<Button>Hire Me</Button>)}
        </div>
        <div className={classes.avatarAndOthers}>
          <div className={classes.avatarWrapper}>
            <img src={props.data.avatar_url} alt="github user Avatar" className={classes.avatarImg}/>
          </div>
          <div className={classes.flexColumn}>
            <div className={classes.nameAndFollowers}>
              <h2>{props.data.name}</h2>
              <div className={classes.flexRow}>
                <Counts countNumber={followersCount} countType='Followers'/>
                <Counts countNumber={followingCount} countType='Following'/>
                <Counts countNumber={reposCount} countType='Repositories'/>
              </div>
            </div>
            <div className={classes.emailBioParent} >
              <div className={classes.paddingBoxes}>
                <div>
                  <div className={classes.flexColumnOfEmail}>
                    <div className={classes.flexRow}>
                      <img src={emailLogo} alt="email" />
                      <p className={classes.titleName}>Email</p>
                    </div>
                    <p className={classes.descriptions}>{props.data.email}</p>
                  </div>
                  <div className={classes.flexColumnOfEmail}>
                    <div className={classes.flexRow}>
                      <img src={locationLogo} alt="location" />
                      <p className={classes.titleName}>Location</p>
                    </div>
                    <p className={classes.descriptions}>{props.data.location}</p>
                  </div>
                  <div className={classes.flexColumnOfEmail}>
                    <div className={classes.flexRow}>
                      <img src={twitterLogo} alt="Twitter" />
                      <p className={classes.titleName}>Twitter</p>
                    </div>
                    <p className={classes.descriptions}>{props.data.twitter_username}</p>
                  </div>
                </div>
                <div>
                  <div className={classes.flexColumnOfEmail}>
                    <div className={classes.flexRow}>
                      <img src={organizationLogo} alt="Organization" />
                      <p className={classes.titleName}>Organization</p>
                    </div>
                    <p className={classes.descriptions}>{props.data.company}</p>
                  </div>
                  <div className={classes.flexColumnOfEmail}>
                    <div className={classes.flexRow}>
                      <img src={createdAtLogo} alt="joined date" />
                      <p className={classes.titleName}>Joined Date</p>
                    </div>
                    <p className={classes.descriptions}>{`${DD} ${MM}, ${YYYY}`}</p>
                  </div>
                  <div className={classes.flexColumnOfEmail}>
                    <div className={classes.flexRow}>
                      <img src={websiteLogo} alt="blog/website" />
                      <p className={classes.titleName}>Website</p>
                    </div>
                    <p className={classes.descriptions}>{props.data.blog}</p>
                  </div>
                </div>
              </div>
            <div className={classes.paddingBoxes}>
              <div>
                <p className={classes.descriptions}>Bio</p>
                <p className={classes.bioFont}>{props.data.bio}</p>
              </div>
            </div>
            </div>
        </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Resume;