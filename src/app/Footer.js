import React from 'react';
import { Box } from '@material-ui/core';
import { view } from '@risingstack/react-easy-state';
import { Typography } from 'antd';

const { Text } = Typography;

const Footer = () => {
	// const { coor } = Store_Global.MOUSE;
	return (
		<Box display='flex' justifyContent='flex-end' bgcolor='grey.900'>
			<Box display='flex'>
				<Box px={1} mx={1}>
					x:
					<Text className={'coord'} code>
						{'~~coor.x'}
					</Text>
					y:
					<Text className={'coord'} code>
						{'~~coor.y'}
					</Text>
				</Box>
				<Box px={1} mx={1} bgcolor='grey.800'>
					{'Action'}
				</Box>
				<Box px={1} mx={1} bgcolor='grey.800'>
					select:{'Store_Grids._selectedId'}
				</Box>

				<div style={{ background: '#282828' }}>
					{/* [Page:{_currentSelect}] &gt;&gt; CLASS &gt; fileName */}
				</div>
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
};

export default view(Footer);

// class Footer extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			coord: [0, 0],
// 		};
// 	}

// 	componentDidMount() {
// 		document.addEventListener('mousemove', this.updateCoord);
// 	}

// 	componentWillUnmount() {
// 		document.removeEventListener('mousemove', this.updateCoord);
// 	}

// 	///**@param {MouseEvent} e */
// 	updateCoord = (e) => {
// 		this.setState({
// 			coord: [e.clientX, e.clientY],
// 		});
// 	};

// 	render() {
// 		const { _currentSelect } = Store_PageOnglets; // si une page est selectionner: diffuser la page

// 		return (
// 			<Box display='flex' justifyContent='flex-end' bgcolor='grey.900'>
// 				<Box display='flex'>
// 					<Box px={1} mx={1}>
// 						x:
// 						<Text className={'coord'} code>
// 							{~~this.state.coord[0]}
// 						</Text>
// 						y:
// 						<Text className={'coord'} code>
// 							{~~this.state.coord[1]}
// 						</Text>
// 					</Box>
// 					<Box px={1} mx={1} bgcolor='grey.800'>
// 						{Store_layouts._selected || 'Action'}
// 					</Box>
// 					<Box px={1} mx={1} bgcolor='grey.800'>
// 						select:{Store_Grids._selectedId}
// 					</Box>

// 					<div style={{ background: '#282828' }}>
// 						[Page:{_currentSelect}] &gt;&gt; CLASS &gt; fileName
// 					</div>
// 				</Box>
// 				<Box
// 					display='flex'
// 					flexGrow={1}
// 					justifyContent='flex-end'
// 					alignItems='flex-start'
// 				>
// 					<Box px={1} mx={1} bgcolor='grey.800'>
// 						© 2020 Jon.L .All Rights Reserved
// 					</Box>
// 					<Box px={1} mx={1} bgcolor='grey.800'>
// 						-Github
// 					</Box>
// 				</Box>
// 			</Box>
// 		);
// 	}
// }

// export default view(Footer);
