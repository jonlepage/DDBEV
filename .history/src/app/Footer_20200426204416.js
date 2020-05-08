import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Typography } from 'antd';
import './Footer.css';
const { Text } = Typography;
class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			coord: [0, 0],
		};
	}

	componentDidMount() {
		document.addEventListener('mousemove', this.updateCoord);
	}

	componentWillUnmount() {
		document.removeEventListener('mousemove', this.updateCoord);
	}

	/**@param {MouseEvent} e */
	updateCoord = (e) => {
		this.setState({
			coord: [e.clientX, e.clientY],
		});
	};

	render() {
		return (
			<Box display='flex' justifyContent='flex-end' bgcolor='grey.900'>
				<Box display='flex'>
					<Box px={1} mx={1}>
						x:
						<Text className={'coord'} code>
							{~~this.state.coord[0]}
						</Text>
						y:
						<Text className={'coord'} code>
							{~~this.state.coord[1]}
						</Text>
					</Box>
					<Box px={1} mx={1} bgcolor='grey.800'>
						action info
					</Box>
					<Box px={1} mx={1} bgcolor='grey.800'>
						loading
					</Box>
				</Box>
				<Box
					display='flex'
					flexGrow={1}
					justifyContent='flex-end'
					alignItems='flex-start'
				>
					<Box px={1} mx={1} bgcolor='grey.800'>
						© 2020 Jon.L .All Rights Reserved
					</Box>
					<Box px={1} mx={1} bgcolor='grey.800'>
						-Github
					</Box>
				</Box>
			</Box>
		);
	}
}

export default view(Footer);
