import React from 'react';
import {Row, Col} from 'react-bootstrap';
import GifCard from '../gif-card/gif-card.component';
import LoaderComponent from '../../common/loader.component';

const styles = {
  gifColumn: {
    marginBottom: 20
  }
}
const GifListComponent = ({gifs, isLoading}) => {
  const gifColumns = gifs ? gifs.data.map(gif => (
    <Col style={styles.gifColumn} key={gif.id} xs={12} sm={4} md={3} lg={3}>
      <GifCard gif={gif} />
    </Col>
  )) : null;
  
  return (
    <Row>
      {gifColumns}
      <LoaderComponent isLoading={isLoading} />
    </Row>
  );
}

export default GifListComponent;
