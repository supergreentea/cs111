import React, { Component } from 'react';
import Stack from './Stack';
import Radium from 'radium';
import autoBind from 'react-autobind';

class StackDemo extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
		this.state = {
			step: 0,
			stackContent: [
				<Stack function='f(0)' content='0' subfunction='f(0)' />
			],
			topReached: false
		};
	}

	handleClick = () => {
		let currentContent = this.state.stackContent;
		const step = this.state.step;
		if (step === 5) {
			this.setState({
				topReached: true
			})
		}
		if (this.state.topReached) {
			currentContent = currentContent.slice(0, currentContent.length - 1);
			this.setState({
				stackContent: currentContent
			})
			return;
		}
		currentContent.push(<Stack function={`f(${this.state.step + 1})`} content='5' subfunction='f(5)' />);
		this.setState({
			stackContent: currentContent,
			step: step + 1
		})
	}

  render() {
    return(
			<div style={styles.outercontainer}>
				<div>
					<div style={styles.container}>
					{this.state.stackContent}
				</div>
				</div>
				<div>
					<i key='nextIcon' onClick={this.handleClick} style={styles.nextIcon} className="fas fa-arrow-alt-circle-right"></i>
				</div>
			</div>
    )
  }
}

var styles = {
	outercontainer: {
		display: 'flex',
		justifyContent: 'center'
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column-reverse'
	},
	nextIcon: {
		fontSize: '5rem',
		color: '#00C851',
		marginTop: '0.1em',
		":hover": {
			cursor: 'pointer',
			opacity: 0.8
		}
	}
}

export default Radium(StackDemo);