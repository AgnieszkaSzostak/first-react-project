import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore.js';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    icon: PropTypes.node,
  };

  static defaultProps = {
    icon: settings.search.icon,
  };

  render() {

    const {cards, icon} = this.props;
    
    return (
      <section className={styles.component}>
        <h3 className={styles.title} >
          <span className={styles.icon}>
            <Icon name={icon}></Icon>
          </span>
        </h3>
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