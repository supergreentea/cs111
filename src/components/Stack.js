import React, { Component } from 'react';
import Radium from 'radium';
class Stack extends React.Component {
  render() {
    return(
      <div className='animated bounceInDown' style={styles.container}>
        <span style={[styles.function, styles.boxshadow]}>
          {this.props.function}
        </span>
        <span style={[styles.rectangle, styles.boxshadow]}>
          <span>{this.props.content} + </span>
          <span style={[styles.function, styles.boxshadow, {padding: '0.5rem'}]}>{this.props.subfunction}</span>
        </span>
      </div>
    )
  }
}

var styles = {
  function: {
    fontSize: '100px'
  },
  subfunction: {
    color: '#ffbb33',
    padding: '0.5rem',
    borderRadius: '50%'
  },
  container: {
    margin: '1.5rem',
    transition: 'all 1s'
  },
  boxshadow: {
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
  },
  function: {
    padding: '1rem',
    fontSize: '2rem',
    borderRadius: '50%',
    backgroundColor: '#ffbb33',
    color: 'white'
  },
  rectangle: {
    fontSize: '2rem',
    padding: '1rem',
    marginLeft: '1rem',
    backgroundColor: '#33b5e5',
    color: 'white',
    ":hover": {
      backgroundColor: 'red'
    }
  }
}

export default Radium(Stack);