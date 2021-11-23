import {connect} from 'react-redux';
import SearchResults from './SearchResults.js';
import {filteredCardsForSearchResults} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => {
    
  const searchString = props.match.params.id;
  return {
    cards: filteredCardsForSearchResults(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResults);
  