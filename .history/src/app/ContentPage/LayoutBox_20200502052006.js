import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';
import {
	Store_DataBaseStorage,
	Store_Settings,
	Store_layoutSettings,
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
	/** affiche conten ou layout */
	const grids = (id) => {
		return (
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
		);
	};
	if (id > 0) {
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
				key={id + '_'}
				width={width}
				cols={cols}
				margin={[margin.x, margin.y]}
				rowHeight={rowHeight}
				// maxRows={3} permet de limiter le height
				compactType={null}
				preventCollision={true}
			>
				{grids(id)}
				<div
					className='ContentGrid'
					key={id + '__0'}
					data-grid={{ x: 0, y: 1, w: 1, h: 1, minW: 1, minH: 1 }}
				>
					-content {width}
					{/* {layout(--id)} */}
				</div>
				<div
					className='ContentGrid'
					key={id + '__1'}
					data-grid={{ x: 2, y: 1, w: 1, h: 1, minW: 1, minH: 1 }}
				>
					-content {width}
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
