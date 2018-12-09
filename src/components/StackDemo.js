import React, { Component } from 'react';
import Stack from './Stack';
import Radium from 'radium';

class StackDemo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 0
		};
	}
  render() {
    return(
      <div style={styles.container}>
				{/* <Stack function='f(5)' content='5' subfunction='f(4)' />
				<Stack function='f(5)' content='5' subfunction='f(4)' />
				<Stack function='f(5)' content='5' subfunction='f(4)' />
				<Stack function='f(5)' content='5' subfunction='f(4)' />
				<Stack function='f(5)' content='5' subfunction='f(4)' /> */}
				<Stack function='f(5)' content='5' subfunction='f(4)' />
				<i key='nextIcon' style={styles.nextIcon} className="fas fa-arrow-alt-circle-right"></i>
      </div>
    )
  }
}

var styles = {
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	nextIcon: {
		fontSize: '3rem',
		color: 'green',
		":hover": {
			fontSize: '3.5rem',
			cursor: 'pointer'
		}
	}
}

export default Radium(StackDemo);