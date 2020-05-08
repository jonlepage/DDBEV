import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';
import {
	Store_DataBaseStorage,
	Store_Settings,
} from '../../stores/Store_DataPage';

const layout = (id) => {
	if (id) {
		return (
			<GridLayout>
				<div
					key={id}
					onClick={(e) => onClick(e, id)}
					className={dataLayout.isRoot && 'ContentLayout'}
					data-grid={dataLayout.datagrid}
				>
					<div className={'FloatingLabel'}>Label:{id}</div>
					<div className={'ContentLayout'}>
						{dataLayout.isLayout ? layout(id) : <div>content(id)</div>}
					</div>
				</div>
			</GridLayout>
		);
	}
};

const LayoutBox = ({ id, transformScale }) => {
	return <>{grids(id)}</>;
};

export default view(Layout);
