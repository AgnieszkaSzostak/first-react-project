import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore.js';


class Column extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    icon: PropTypes.node,
    title: PropTypes.node.isRequired,
    addCard: PropTypes.func,
  };
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };
  render() {

    const {title, cards, icon, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title} >{title}
          <span className={styles.icon}>
            <Icon name={icon}></Icon>
          </span>
        </h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
        
      </section>
    );
  }
}

export default Column;
