import React from 'react';
import Moment from 'react-moment';

const imgStye = {
  borderRadius: "50%",
  width: "250px",
  height: "250px"
};

const gitChartStyle = {
  width: "1000px",
  height: "200px"
};

const mystyle = {
  color: "black",
  backgroundColor: "MediumAquaMarine",
  padding: "10px",
  fontFamily: "Arial"
};

const sectionStyles = {
  color: "white",
  backgroundColor: "Black",
  padding: "10px",
  fontFamily: "Arial"
};

const chartStyle = {
  color: "black",
  backgroundColor: "white",
  padding: "10px",
  fontFamily: "Arial"
};


const ProfileDetails = (props) => {
    return (
      <div style={mystyle}>
      <h2 style ={sectionStyles}> Profile Information</h2>
        <div style={sectionStyles}>
          {props.infoclean.avatar_url ? <div><h3>Avatar:</h3>
            <img src={props.infoclean.avatar_url}
                 alt="Profile"
                 style={imgStye}/></div> : null }
        </div>
        <hr></hr>
        <div style={sectionStyles}>
          {props.infoclean.name ? <div><h3>Name:</h3><p>{props.infoclean.name}</p></div> : null }
        </div>
        <hr></hr>
        <div style={sectionStyles}>
          {props.infoclean.bio ? <div><h3>Bio:</h3><p>{props.infoclean.bio}</p></div> : null }
        </div>
        <hr></hr>
        <div style={sectionStyles}>
          {props.infoclean.created_at ? <div><h3>Joined:</h3><p>{
          <Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</p></div> : null }
        </div>
        <hr></hr>
        <div style={sectionStyles}>
          {props.infoclean.blog ? <div><h3>Blog:</h3><p><a href={
             props.infoclean.blog.search("http") !== -1 ? props.infoclean.blog
            : "http://" +  props.infoclean.blog } target="_blank">{props.infoclean.blog}</a></p></div> : null }
        </div>
        <hr></hr>
        <div style={sectionStyles}>
          {props.infoclean.location ? <div><h3>Location:</h3><p>{props.infoclean.location}</p></div> : null }
        </div>
        <hr></hr>
        <div style={sectionStyles}>
          {props.infoclean.company ? <div><h3>Company:</h3><p>{props.infoclean.company}</p></div> : null }
        </div>
        <hr></hr>
        <div style={sectionStyles}>
          {props.infoclean.public_repos ? <div><h3>Public Repos:</h3><p>{props.infoclean.public_repos}</p></div> : null }
        </div>
        <hr></hr>
        <div style={sectionStyles}>
          {props.infoclean.followers ? <div><h3>Followers:</h3><p>{props.infoclean.followers}</p></div> : null }
        </div>
        <hr></hr>
        <div style={sectionStyles}>
          {props.infoclean.following ? <div><h3>Following:</h3><p>{props.infoclean.following}</p></div> : null }
        </div>
        <hr></hr>
        <div>
          {props.infoclean.html_url ? <div><p><a href={props.infoclean.html_url} target="_blank">View on GitHub</a></p></div> : null }
        </div>
        <hr></hr>
        <div style={chartStyle}>
          {props.infoclean.login ? <div>{ <img src={"http://ghchart.rshah.org/"+props.infoclean.login} alt="Github chart" style={gitChartStyle} />
        }<br/><a href="https://ghchart.rshah.org/" target="_blank">Source for GitHub Chart API</a></div> : null }
        </div>
        <hr></hr>
      </div>
    )
};
export default ProfileDetails;
