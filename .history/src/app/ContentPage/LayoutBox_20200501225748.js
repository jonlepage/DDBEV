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
			<GridLayout key={id + '_'} width={350}>
				<div key={id + '__'}>-content {layout(--id)}</div>
			</GridLayout>
		);
	}
};

const LayoutBox = ({ id, transformScale }) => {
	return <>{layout(5)}</>;
};

export default view(LayoutBox);
