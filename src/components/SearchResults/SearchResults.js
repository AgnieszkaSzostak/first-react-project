import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
// import {settings} from '../../data/dataStore.js';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
 
  };

  render() {

    const {cards} = this.props;
    
    return (
      <section className={styles.component}>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;