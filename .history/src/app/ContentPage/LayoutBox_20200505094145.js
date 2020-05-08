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
import { Store_app } from '../../stores/Store_App';

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
	const { childrens, level } = Store_layouts.getById(id);
	const alpha = level < Store_app.levelEditor ? 0 : 1;
	/** affiche conten ou layout */
	const grids = (id) => {
		const { datagrid, level } = Store_layouts.getById(id);
		const isLevelEdit = level === Store_app.levelEditor;
		return (
			<div
				key={id}
				className='ContentGrid'
				data-grid={datagrid}
				style={{ outline: isLevelEdit && '14px solid #1C6EA4' }}
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
				backgroundImage: `linear-gradient(to right, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
                    linear-gradient(to left, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
                    linear-gradient(to top, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
                    linear-gradient(to bottom, ${gridColor}  ${gridThickness}px, transparent ${alpha}px)`,
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
			isDraggable={level === Store_app.levelEditor}
			isDroppable={true}
			useCSSTransforms={true}
			transformScale={1}
			onDrop={(e) => {
				onDrop(e);
			}}
		>
			{childrens.map((childId) => grids(childId))}
		</GridLayout>
	);
};

const LayoutBox = ({ id, transformScale }) => {
	return <>{layout('fakeData_0')}</>;
};

export default view(LayoutBox);
