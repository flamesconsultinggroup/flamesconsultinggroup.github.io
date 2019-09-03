import React from "react";
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import PropTypes from "prop-types"


export default class event_card extends React.Component {

  render(){
    return (
      <Card style={{
        minWidth: 300,
        maxWidth: 500,
      }}>
        <CardContent>
          <h3 className="text-center">
            {this.props.eventName}
          </h3>
          <h3 className="text-center">
            Location: {this.props.eventLocation}
          </h3>
          <h3 className="text-center">
            Date: {this.props.eventDate}
          </h3>
          <h3 className="text-center">
            Time: {this.props.eventTime}
          </h3>
            <Button>
              <a href={this.props.linkTo}><h3 className="text-center">Click to RSVP</h3></a>
            </Button>
          </CardContent>
        </Card>
    )
  }
}
