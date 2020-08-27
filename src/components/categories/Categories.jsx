import React, {Component} from 'react';

export default class Categories extends Component {
  render() {
    const {children, title} = this.props;
    return (
      <div className='categories'>
        <h3 className='categories__title'>{title}</h3>
        {children}
      </div>
    );
  }
}
