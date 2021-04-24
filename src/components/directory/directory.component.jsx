import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss';

// import childern from '../modern-wears-clothing-image/childern.jpg'
import Jean from '../../assets/images/jeans.jpg';
import MaleShirt from '../../assets/images/maleshirt.jpg';
import Jacket from '../../assets/images/jacket.jpg';
import Sneakers from '../../assets/images/sneakers.jpg';
import Woman from '../../assets/images/woman.jpg';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'jean',
          imageUrl: Jean,
          id: 1,
        },
        {
          title: 'jecket',
          imageUrl: Jacket,
          id: 2,
        },
        {
          title: 'SNEAKERS',
          imageUrl: Sneakers,
          id: 3,
        },
        {
          title: 'WOMENS',
          imageUrl: Woman,
          size: 'large',
          id: 4,
        },
        {
          title: 'MENS',
          imageUrl: MaleShirt,
          size: 'large',
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
       <div >{ console.log(this.state.imageUrl)}</div>;
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
