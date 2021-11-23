import {connect} from 'react-redux';
import SearchResults from './SearchResults.js';
import {filteredCardsForSearchResults} from '../../redux/cardsRedux.js';


const mapStateToProps = (state, props) => ({
  cards: filteredCardsForSearchResults(state, props.id),
});
  

export default connect(mapStateToProps)(SearchResults);
  