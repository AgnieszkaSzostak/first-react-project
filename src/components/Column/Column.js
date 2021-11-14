import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
// import Creator from '../Creator/Creator.js';
// eslint-disable-next-line no-unused-vars
import {settings} from '../../data/dataStore.js';


class Column extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    icon: PropTypes.node,
    title: PropTypes.node.isRequired,
  };
 
  render() {

    const {title, icon, cards} = this.props;
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
        {/* <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div> */}
        
      </section>
    );
  }
}

export default Column;
