import React from 'react';
import { view } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';
import { Store_Mod_Layout, SETTING_Mod_Layout } from './Mod_Layout.store';
import Modules from '../Modules';
import { Store_Windows } from '../../app/Windows.store';

/** un module layout map des children grid seulement */
const Mod_Layout = ({ UID, MUID }) => {
	const data =
		Store_Mod_Layout.getData(MUID) || Store_Mod_Layout.create(UID, MUID);
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
		childrens,
	} = data;
	return (
		<>
			<button
				onClick={() => {
					//FIXME: SIMULE OUVERTURE DUN WINDOW SETTING, sera dans un button ou menu contextuel?
					Store_Windows.open(data, SETTING_Mod_Layout);
					console.log('onClick data: ', data);
				}}
			>
				setting
			</button>
			<GridLayout
				className='ContentLayout'
				style={{
					// backgroundPositionX: margin.x,
					width: width,
					backgroundSize: `${width / cols}px ${rowHeight}px`,
					backgroundColor: backgroundColor,
					backgroundImage: `linear-gradient(to right, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
	                    linear-gradient(to left, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
	                    linear-gradient(to top, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
	                    linear-gradient(to bottom, ${gridColor}  ${gridThickness}px, transparent ${alpha}px)`,
					minHeight: `${rowHeight * 10}px`,
				}}
				width={width}
				cols={cols}
				rowHeight={rowHeight}
				compactType={compactType}
				preventCollision={preventCollision}
				useCSSTransforms={false}
				isDroppable={true}
				transformScale={1}
				// onDragStart={(layout, oldItem, newItem, placeholder, e, element) => {
				// 	// permet nested drag !
				// 	e.stopPropagation();
				// 	e.preventDefault();
				// }}
				// onDrag={(layout, oldItem, newItem, placeholder, e, element) => {
				// 	// permet nested drag !
				// 	e.stopPropagation();
				// 	e.preventDefault();
				// }}
				// onDrop={({ x, y }) => {
				// 	if (_dndID) {
				// 		const id = UTILITY.create_UUID();
				// 		childrens.push(id);
				// 		Store_Modules.createFrom(id, uid, _dndID, x, y);
				// 	}
				// }}
			>
				{childrens.map((id, ii) => {
					return (
						<div
							className='ContentGrid'
							key={ii}
							data-grid={{
								x: 1,
								y: 1,
								w: 2,
								h: 1,
								minW: 1,
								minH: 1,
								type: null,
							}}
						>
							{/* //TODO: REMOVE moduleName? */}
							<Modules UID={UID} MUID={MUID} />
						</div>
					);
				})}
			</GridLayout>
		</>
	);
};

export default view(Mod_Layout);
