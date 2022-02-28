import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click_count: 0 };
  }

  render() {
    return (
      <button 
        className="square"
        onClick={ () => {
          // Update number of clicks in current square
          this.setState((state,props)=>({ click_count: state.click_count+1 }))
          // Notify about click count
          console.log(`User clicked a total of ${this.state.click_count} times in square ${this.props.square_id}`);
          // Make the Board handle the click
          this.props.onClick();
          }}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  renderSquare(i) {
    return <Square 
        square_id={i}
        value={this.state.squares[i]}
        onClick={()=>{this.handleClick(i)}}
      />;
  }

  handleClick(i) {
    const squares_arr = this.state.squares.slice();
    squares_arr[i] = 'X';
    this.setState({ squares: squares_arr });
    console.log(`Board's handleClick() has been called, new squares array is going to be set to: ${squares_arr}`);
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
