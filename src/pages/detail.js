import React, { Component } from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import axios from 'axios';

const styles = {
    card: {
        maxWidth: '100%',
        marginBottom: '30px'
    },
    media: {
        height: 200,
    },
};

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: this.props.match.params.id,
        items: {}
    };

    this.renderData = this.renderData.bind(this);
  }

  componentDidMount(){
    let config = {
      headers: {'x-apikey': '5a16c8fc9c8d4dd23ab177a8'}
    };

    axios
      .get('https://event-60a2.restdb.io/rest/events/'+this.state.id, config)
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
    return (
        <Card style={styles.card}>
            <CardMedia
            style={styles.media}
            image={this.state.items.image}
            title={this.state.items.title}
            />
            <CardContent>
            <Typography type="headline" component="h2">
                {this.state.items.title}
            </Typography>
            <Typography component="p">
                {this.state.items.content}
            </Typography>
            </CardContent>
        </Card>
    )
  }

  render() {
    return (
      <div>
        {this.renderData()}
      </div>
    );
  }
}