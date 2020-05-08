import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';
import {
	Store_DataBaseStorage,
	Store_Settings,
} from '../../stores/Store_DataPage';

const layout = (id) => {
	return (
		<GridLayout
			className={`ReactGridLayout ${
				Store_DataBaseStorage.radioLevel === dataLayout.level
					? 'EditLevel'
					: 'DisableLevel'
			}`}
		>
			{dataLayout.childrens.map((childId) => grids(childId))}
		</GridLayout>
	);
};

const LayoutBox = ({ id, transformScale }) => {
	return <>{grids(id)}</>;
};

export default view(Layout);
