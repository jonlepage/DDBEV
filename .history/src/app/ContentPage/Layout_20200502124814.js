import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';
import {
	Store_DataBaseStorage,
	Store_Settings,
} from '../../stores/Store_DataPage';

/**@param {MouseEvent} e */
function onClick(e, id) {
	e.preventDefault();
	e.stopPropagation();
	const dataLayout = Store_DataBaseStorage.getFromId(id);
	Store_DataBaseStorage.currentSelected = id;
}

const Layout = ({ id, transformScale }) => {
	const onDrop = (e) => {
		Store_DataBaseStorage.dropData();
	};
	/** affiche conten ou layout */
	const grids = (id) => {
		const dataLayout = Store_DataBaseStorage.getFromId(id);
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
	const layout = (id) => {
		const dataLayout = Store_DataBaseStorage.getFromId(id);
		const setting = Store_Settings.getFromId(id);
		const width = dataLayout.isRoot //todo: utiliser cols width parent
			? setting.layout.width
			: (setting.layout.width / setting.layout.cols) * dataLayout.datagrid.w;
		const isLevelEdit = Store_DataBaseStorage.radioLevel === dataLayout.level;
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
					outline: '10px solid #1C6EA4',
				}}
				width={setting.layout.width}
				cols={setting.layout.cols}
				rowHeight={setting.layout.rowHeight}
				margin={[setting.layout.margin.x, setting.layout.margin.y]}
				compactType={setting.layout.compactType}
				preventCollision={setting.layout.preventCollision}
				isDraggable={isLevelEdit}
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
	return <>{grids(id)}</>;
};

export default view(Layout);
