import React from 'react';
import Moment from 'react-moment';
import { Row, Col } from 'react-bootstrap';

const imgStyle = {
  borderRadius: "50%",
  width: "250px",
  height: "250px",
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
  padding: "10px",
  fontFamily: "sans-serif"
};

const titleStyle = {
  color: "black",
  padding: "30px",
  fontFamily: "sans-serif",
};


const ProfileDetails = (props) => {
    return (
      <Row className="show-grid">
        <Col xs={12} md={14} className="text-center">
        <div style={titleStyle}>
        <h1 class="font-weight-bold">Profile Information</h1>
        <div class="card-columns">
          <div class="card text-center" style={sectionStyles}>
            {props.infoclean.avatar_url ? <div>
              <img src={props.infoclean.avatar_url}
                   alt="Profile"
                   style={imgStyle}/></div> : null }
          </div>
          <div class="card text-dark" style={sectionStyles}>
            {props.infoclean.name ? <div><h4>Name</h4><p>{props.infoclean.name}</p></div> : null }
          </div>
          <div class="card text-dark" style={sectionStyles}>
            {props.infoclean.bio ? <div><h4>Bio</h4><p>{props.infoclean.bio}</p></div> : null }
          </div>
          <div class="card bg-info text-white" style={sectionStyles}>
            {props.infoclean.created_at ? <div><h4>Joined</h4><p>{
            <Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</p></div> : null }
          </div>
          <div class="card bg-info text-white" style={sectionStyles}>
            {props.infoclean.blog ? <div><h4>Blog</h4><p><a href={
               props.infoclean.blog.search("http") !== -1 ? props.infoclean.blog
              : "http://" +  props.infoclean.blog } target="_blank">{props.infoclean.blog}</a></p></div> : null }
          </div>
          <div class="card bg-info text-white" style={sectionStyles}>
            {props.infoclean.location ? <div><h4>Location</h4><p>{props.infoclean.location}</p></div> : null }
          </div>
          <div class="card bg-info text-white" style={sectionStyles}>
            {props.infoclean.company ? <div><h4>Company</h4><p>{props.infoclean.company}</p></div> : null }
          </div>
          <div class="card bg-info text-white" style={sectionStyles}>
            {props.infoclean.public_repos ? <div><h4>Public Repos</h4><p>{props.infoclean.public_repos}</p></div> : null }
          </div>
          <div class="card text-dark" style={sectionStyles}>
            {props.infoclean.followers ? <div><h4>Followers</h4><p>{props.infoclean.followers}</p></div> : null }
          </div>
          <div class="card text-dark" style={sectionStyles}>
            {props.infoclean.following ? <div><h4>Following</h4><p>{props.infoclean.following}</p></div> : null }
          </div>
          <div class="card" style={sectionStyles}>
            {props.infoclean.html_url ? <div><p><a href={props.infoclean.html_url} target="_blank">View on GitHub</a></p></div> : null }
          </div>
          </div>
          <div class="card" style={sectionStyles}>
            {props.infoclean.login ? <div>{ <img src={"http://ghchart.rshah.org/"+props.infoclean.login} alt="Github chart" style={gitChartStyle}/>
          }<br/><a href="https://ghchart.rshah.org/" target="_blank">Source for GitHub Chart API</a></div> : null }
          </div>
        </div>
        </Col>
      </Row>
    )
};
export default ProfileDetails;
