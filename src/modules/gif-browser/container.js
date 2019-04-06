import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row} from 'react-bootstrap';
import {AppBar } from 'material-ui';
import * as gifActions from './actions';
import GifListComponent from './gif-list/gif-list.component';
import * as scrollHelpers from '../common/scroll.helpers';

class GifBrowser extends React.Component {
  
  constructor(props) {
    super(props);

    const keyWords  = ['excited', 'dance', 'cheers', 'shocked','smug','happy','flying puppy'];

    this.state = {
      currentPage: 1,
      currentgifs: [],
      keyword: keyWords[Math.floor(Math.random()*keyWords.length)]
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.onscroll = this.handleScroll;
    this.props.getGifs(this.state.keyword,this.state.currentPage);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const {topGifs} = this.props;
    if (!topGifs.isLoading) {
      let percentageScrolled = scrollHelpers.getPercentageScrolledDown(window);
      if (percentageScrolled > 0.6) {
        const nextPage = this.state.currentPage + 1;
        this.props.getGifs(this.state.keyword,nextPage);
        this.setState({currentPage: nextPage});
      }
    }
  }

  render() {
    const {topGifs} = this.props;
    const gifs = topGifs.response;

    console.log('gifs',topGifs);

    return (
      <div>
        <AppBar title="Bump Code-test" />
        <Grid>
          <Row>
            <p>Search results for : {this.state.keyword}</p>
          </Row>
          <Row>
              <GifListComponent gifs={gifs} isLoading={topGifs.isLoading} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    topGifs: state.gifBrowser.topGifs
  }),
  { ...gifActions }
)(GifBrowser);
