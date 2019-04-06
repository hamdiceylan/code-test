import React from 'react';
import {connect} from 'react-redux';
import {Card, CardMedia} from 'material-ui';

const styles = {
  cardMedia: {
    maxHeight: 400,
  }
};

class GifCardComponent extends React.Component {
  
  render() {
    const {gif} = this.props;

    return (
      <Card style={styles.card}>
        <CardMedia style={styles.cardMedia}>
          <img style={styles.bgImage} src={gif.images.downsized.url} />
        </CardMedia>
      </Card>
    );
  }
}

export default connect()(GifCardComponent);