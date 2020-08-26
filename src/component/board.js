import React from 'react';
import Square from './square';
import './board.css';

export default class Board extends React.Component {

  renderSquare(i) {
    return ( 
    <Square
     value = {this.props.squares[i]}
     onClick = { () => this.props.onClick(i) }
    />
    )
  }

  render() {
  	return (
    	<div className="board">
      {
      	[0,1,2].map( (row) => {
				 return <div key={row} className="board-row">
            {
            	[1,2,3].map( (col) => {
          			return this.renderSquare(row * 3 +col);
          		})
            }
            </div>

      	})
      }
      </div>
    )
  }
}
