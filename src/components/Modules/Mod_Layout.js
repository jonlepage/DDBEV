import React from 'react';
import { view } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';
import { Store_Mod_Layout, SETTING_Mod_Layout } from './Mod_Layout.store';
import Modules from '../Modules';
import { Store_Windows } from '../../app/Windows.store';
import { Store_Modules } from '../Modules.store';
import { UTILITY } from '../../stores/Store_Global';
import { Store_ContextMenue } from '../ContextMenue.store';
import { Store_HeaderTool } from '../Camera/HeaderTool.store';

/** un module layout map des children grid seulement */
const Mod_Layout = ({ UID, MUID }) => {
	const { children, _nestedIndex } = Store_Modules.getData(MUID);
	const data =
		Store_Mod_Layout.getData(MUID) ||
		Store_Mod_Layout.create(UID, MUID, _nestedIndex);
	const {
		width,
		cols,
		rowHeight,
		backgroundColor,
		gridColor,
		gridThickness,
		alpha,
		compactType,
		preventCollision,
	} = data;
	const { _previewRenderDB } = Store_HeaderTool;
	const backgroundImage = !_previewRenderDB
		? {
				backgroundImage: `linear-gradient(to right, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
	linear-gradient(to left, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
	linear-gradient(to top, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
	linear-gradient(to bottom, ${gridColor}  ${gridThickness}px, transparent ${alpha}px)`,
		  }
		: {};
	return (
		<div
			className='Mod_Layout'
			onContextMenu={(e) => {
				if (!e.ctrlKey) {
					Store_ContextMenue.setContext(e, MUID, data, SETTING_Mod_Layout);
				}
			}}
		>
			<GridLayout
				className='ContentLayout'
				style={{
					// backgroundPositionX: margin.x,
					width: width,
					backgroundSize: `${width / cols}px ${rowHeight}px`,
					backgroundColor: backgroundColor,
					minHeight: `${rowHeight * 10}px`,
					...backgroundImage,
				}}
				width={width}
				cols={cols}
				rowHeight={rowHeight}
				compactType={compactType}
				preventCollision={preventCollision}
				useCSSTransforms={false}
				isDroppable={true}
				transformScale={1}
				margin={[0, 0]}
				isResizable={!_previewRenderDB}
				isDraggable={!_previewRenderDB}
				onLayoutChange={(layout) => {
					layout.forEach((_dataGrid) => {
						const data = Store_Modules.getData(_dataGrid.i);
						if (data) {
							data.dataGrid = { ...data.dataGrid, ..._dataGrid };
						}
					});
				}}
				onDragStart={(layout, oldItem, newItem, placeholder, e, element) => {
					// permet nested drag !
					e.stopPropagation();
					e.preventDefault();
				}}
				onDrag={(layout, oldItem, newItem, placeholder, e, element) => {
					// permet nested drag !
					e.stopPropagation();
					e.preventDefault();
				}}
				onDrop={({ x, y, e }) => {
					const { dndData } = Store_Mod_Layout;
					if (dndData) {
						const _MUID = UTILITY.create_UUID();
						const _data = Store_Modules.create(
							UID,
							_MUID,
							dndData.MTYPE,
							_nestedIndex + 1
						);
						_data.dataGrid.x = x;
						_data.dataGrid.y = y;
						children.push(_MUID);
						e.stopPropagation();
						e.preventDefault();
					}
				}}
			>
				{children.map((_MUID, i) => {
					//TODO: overflow pour les widh, options auto selon grid our permet scrool ?

					// pour chaque child MUID
					const _data = Store_Modules.getData(_MUID);
					const { dataGrid } = _data;
					return (
						<div
							className={`${!_previewRenderDB && 'ContentGrid'}`}
							key={_MUID}
							data-grid={dataGrid}
						>
							{/* //TODO: REMOVE moduleName? */}
							<Modules UID={UID} MUID={_MUID} />
						</div>
					);
				})}
			</GridLayout>
		</div>
	);
};

export default view(Mod_Layout);
