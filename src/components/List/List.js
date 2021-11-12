import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore.js';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} link={this.props.image}/>
        <div className={styles.description}>
          {this.props.description}
        </div>
        <div className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
      </section>
    )
  }
}

export default List;
