import React from 'react';
import MarketItem from './MarketItem';

class Market extends React.Component {

  constructor(props){
    super(props);
    this.state = {items:[]};
  };

  render() {
    return (
      <div>
        <h2>Click to Add Item</h2>
          <button onClick={ ()=> {
            const items = this.state.items;
            items.push(<MarketItem key= {items.length} count= {items.length}/> );
            this.setState({items: items});
          }}>Click Here!</button>
        <div>
          {this.state.items.map(function(item) {
            return <p> {item} </p>
          })
          } 
      </div>
     </div>
    );
  }
}

export default Market;