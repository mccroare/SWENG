import React from 'react';
import Moment from 'react-moment';

import { Panel } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

const SortedList = (props) => {
  if (props.repitems) {
    return (
        <div>
          {props.repitems.map((repitem, index) =>
                <Panel class="card" style={{ backgroundColor:"white"}} key={repitem.id}>
                    <Panel.Heading style={{ backgroundColor: "00FFFF", fontFamily:"sans-serif" }}>
                        <Row className="show-grid" >
                      <Col xs={52} md={9}>
                        <Panel.Title componentClass="h1">
                        <a href={repitem.html_url} target="_blank"><h3 class="font-weight-bold">{index + 1} {repitem.name}</h3></a>
                        </Panel.Title>
                      </Col>
                      <Col xs={12} md={3}>
                        Started <Moment from={new Date()}>{repitem.created_at}</Moment>
                      </Col>
                    </Row>

                </Panel.Heading>
                    <Panel.Body style={{ backgroundColor: "00FFFF" }}>
                  <div>
                    <b>Description: </b>{repitem.description}
                  </div>
                  <div>
                    <b>Language: </b>{repitem.language}
                  </div>
                  <div>
                    <b>Watchers: </b>{repitem.watchers_count}
                  </div>
                  <div>
                    <b> Forks: </b>{repitem.forks_count}
                  </div>

                </Panel.Body>
                <hr></hr>
              </Panel>
          )}
        </div>
      )
  } else { return null;}
  };

export default SortedList;
