import React, { useState } from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Ruller from './PageType_Layout/Ruller';
import { Store_Modules } from '../LeftPaneContents/Activity_Modules';
import LayoutBox from './PageType_Layout/LayoutBox';
import Layouts from './PageType_Layout/Layouts';
import { Store_PageOnglets } from '../NavigatorTop';
import { CameraFilled } from '@ant-design/icons';
import { Space } from 'antd';
import { Store_Global } from '../../../src/stores/Store_Global';
import HeaderTool from './PageClass/HeaderTool';

export const Store_PageClass = store({
	/** indicateur si spaceBar hold */
	_spaceBar: false,
	_zoom: 1,
	onKeyDown(e) {
		this._spaceBar = e.keyCode === 32;
		e.preventDefault();
	},
	onKeyUp() {
		this._spaceBar = false;
	},
});

/** Page de type Class qui permet ledition live des layout */
const PageClass = () => {
	// const { dropData: dropId } = Store_Modules;

	// const store = Store_PageClass;
	// const { _spaceBar, _zoom } = store;
	const { space, dnd } = Store_Global.EVENTSKEYS;
	const { uid, camera } = Store_Global.selectedData();
	return (
		<>
			{/* <Ruller /> */}
			<TransformWrapper
				options={{
					disabled: !space._active,
					limitToBounds: camera.limitToBounds,
					minScale: camera.minScale,
					maxScale: camera.maxScale,
					limitToWrapper: camera.limitToWrapper,
				}}
			>
				{({ positionX, positionY }) => {
					// In mode Drop, we use css [left,top] instead of translate3d.
					const x = (dnd.data && positionX) || 0;
					const y = (dnd.data && positionY) || 0;
					return (
						<TransformComponent>
							<div
								className='ContentPage'
								// permet dropable !?
								tabIndex={0}
								style={{
									transform: `scale3d(${camera._zoom}, ${camera._zoom}, 1) 
										translate3d(${-x}px, ${-y}px, ${0}px)`,
									left: `${x}px`,
									top: `${y}px`,
									position: dnd.data ? 'absolute' : 'unset',
								}}
							>
								<HeaderTool positionX={positionX} positionY={positionY} />
								{Store_Global.getGridsRender(uid)}
							</div>
						</TransformComponent>
					);
				}}
			</TransformWrapper>
		</>
	);
};

export default view(PageClass);
