import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
// import {settings} from '../../data/dataStore.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';


class Column extends React.Component {
  // state = {
  //   cards: this.props.columns.cards || [],
  // }
  // static propTypes = {
  //   cards: PropTypes.array,
    
  // }
  render() {
    return (
      <section className={styles.component}>
          <h3 className={styles.title} >{this.props.title}
            <span className={styles.icon}>
              <Icon name={this.props.icon}></Icon>
            </span>
          </h3>
          {/* <div>
            {this.state.cards.maps(({key, ...cardProps}) => (
              <Card key={key} {...cardProps} />
            ))}
          </div> */}
      
            
      </section>
    )
  }
}
// console.log('state.cards', state.cards);
export default Column;
