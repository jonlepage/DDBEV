import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';

const Tree_DataTree = () => {
	const [_state, _setState] = useState('value'); // react hook states
	const lstore = store({ _state: 30 }); // store states local

	return (
		<>
			<div>
				{/* //DATASHEET */}

				<Tree
					className={'TreeDataBase'}
					showLine={true}
					showIcon={true}
					defaultExpandedKeys={['0']}
					treeData={treeData}
					onSelect={onSelect}
					onMouseEnter={onMouseEnter}
				/>
			</div>
		</>
	);
};

export default view(Tree_DataTree);
