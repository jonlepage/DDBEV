import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';
import {
	Store_DataBaseStorage,
	Store_Settings,
} from '../../stores/Store_DataPage';

const layout = (id) => {
	if (id > 0) {
		return (
			<GridLayout
				className='ContentLayout'
				key={id + '_'}
				width={2000}
				cols={3}
				rowHeight={22}
				// maxRows={3} permet de limiter le height
				compactType={null}
				preventCollision={true}
			>
				<div className='ContentGrid' key={id + '__'}>
					-content
					{/* {layout(--id)} */}
				</div>
			</GridLayout>
		);
	}
};

const LayoutBox = ({ id, transformScale }) => {
	return <>{layout(2)}</>;
};

export default view(LayoutBox);
