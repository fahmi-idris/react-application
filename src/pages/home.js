import React, { Component } from 'react';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import axios from 'axios';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: '100%',
    marginBottom: '30px'
  },
  media: {
    height: 200,
  },
  link: {
    textDecoration: 'none'
  }
};

export default class About extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      items: []
    };
  
    this.renderData = this.renderData.bind(this);
  }
  
  componentDidMount(){
    let config = {
      headers: {'x-apikey': '5a16c8fc9c8d4dd23ab177a8'}
    };

    axios
      .get('https://event-60a2.restdb.io/rest/events', config)
      .then(({ data })=> {
        console.log(data);
        this.setState(
          { items: data }
        );
      })
      .catch((err)=> {
        console.log(err)
      })
  }

  renderData() {
    return this.state.items.map((item, index) => (
        <Card style={styles.card} key={index}>
          <CardMedia
            style={styles.media}
            image={item.image}
            title={item.title}
          />
          <CardContent>
            <Typography type="headline" component="h2">
              {item.title}
            </Typography>
            <Typography component="p">
              {item.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/event/detail/${item._id}`} style={styles.link}>
              <Button dense color="primary">
                Read More
              </Button>
            </Link>
          </CardActions>
        </Card>
    ));
  }

  render() {
    return (
      <div>
        {this.renderData()}
      </div>
    );
  }
}