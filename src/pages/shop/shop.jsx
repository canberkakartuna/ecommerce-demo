import React, { Component } from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { SHOP_DATA } from './collection';

class Shop extends Component {
  constructor(){
    super();

    this.state={
      collections: SHOP_DATA
    }
  }



  render(){
    return(
      <div>
        {this.state.collections.map(collection => {
          return(
            <CollectionPreview key={collection.id} items={collection.items} title={collection.title}/>
          )
        })}
      </div>
    )
  }
}

export default Shop;
