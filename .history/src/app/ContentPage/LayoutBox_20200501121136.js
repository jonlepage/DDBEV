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
			style={{
				width: width,
				backgroundSize: `${setting.layout.width / setting.layout.cols}px ${
					setting.layout.rowHeight
				}px`,
				backgroundColor: setting.css.backgroundColor,
				backgroundImage: `linear-gradient(to right, ${setting.css.gridColor}  ${setting.css.gridThickness}, transparent 1px),
                linear-gradient(to left, ${setting.css.gridColor}  ${setting.css.gridThickness}, transparent 1px),
                linear-gradient(to top, ${setting.css.gridColor}  ${setting.css.gridThickness}, transparent 1px),
                linear-gradient(to bottom, ${setting.css.gridColor}  ${setting.css.gridThickness}, transparent 1px)`,
			}}
			width={setting.layout.width}
			cols={setting.layout.cols}
			rowHeight={setting.layout.rowHeight}
			margin={[setting.layout.margin.x, setting.layout.margin.y]}
			compactType={setting.layout.compactType}
			preventCollision={setting.layout.preventCollision}
			isDraggable={Store_DataBaseStorage.radioLevel === dataLayout.level}
			transformScale={transformScale}
			isDroppable={true}
			onDrop={(e) => {
				onDrop(e);
			}}
		>
			{dataLayout.childrens.map((childId) => grids(childId))}
		</GridLayout>
	);
};

const LayoutBox = ({ id, transformScale }) => {
	return <>{grids(id)}</>;
};

export default view(Layout);
