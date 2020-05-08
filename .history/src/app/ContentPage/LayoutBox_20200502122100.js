import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';
import {
	Store_DataBaseStorage,
	Store_Settings,
	Store_layoutSettings,
	Store_layouts,
} from '../../stores/Store_DataPage';

const layout = (id) => {
	const {
		width,
		cols,
		rowHeight,
		backgroundColor,
		gridColor,
		gridThickness,
		margin,
	} = Store_layoutSettings.getById(id);
	const { childrens } = Store_layouts.getById(id);
	/** affiche conten ou layout */
	const grids = (id) => {
		const { datagrid } = Store_layouts.getById(id);
		return (
			<div
				key={id}
				className='ContentGrid'
				data-grid={datagrid}
				onMouseEnter={onMouseEnter}
			>
				-id:{id}
				{layout(id)}
			</div>
		);
	};
	return (
		<GridLayout
			style={{
				// backgroundPositionX: margin.x,
				width: width,
				backgroundSize: `${width / cols}px ${rowHeight}px`,
				backgroundColor: backgroundColor,
				backgroundImage: `linear-gradient(to right, ${gridColor}  ${gridThickness}px, transparent 1px),
                    linear-gradient(to left, ${gridColor}  ${gridThickness}px, transparent 1px),
                    linear-gradient(to top, ${gridColor}  ${gridThickness}px, transparent 1px),
                    linear-gradient(to bottom, ${gridColor}  ${gridThickness}px, transparent 1px)`,
			}}
			className='ContentLayout'
			key={id}
			width={width}
			cols={cols}
			margin={[margin.x, margin.y]}
			rowHeight={rowHeight}
			// maxRows={3} permet de limiter le height
			compactType={null}
			preventCollision={true}
			isDraggable={}
		>
			{childrens.map((childId) => grids(childId))}
		</GridLayout>
	);
};

const LayoutBox = ({ id, transformScale }) => {
	return <>{layout('fakeData_0')}</>;
};

export default view(LayoutBox);
