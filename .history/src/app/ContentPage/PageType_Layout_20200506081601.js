import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Ruller from './PageType_Layout/Ruller';
import { Store_Modules } from '../LeftPaneContents/Activity_Modules';

const PageType_Layout = () => {
	const [_spaceBar, _set_spaceBar] = useState(false);
	const { dropId } = Store_Modules;
	const { width, cols } = [1000, 12]; //TODO:Store_layoutSettings.getById(); //todo: hum voir comment repropager
	const _zoomValue = 1; //todo
	function onKeyDown(e) {
		if (e.keyCode === 32) {
			e.preventDefault();
			_set_spaceBar(true);
		}
	}
	function onKeyUp(e) {
		_set_spaceBar(false);
	}
	return (
		<TransformWrapper
			options={{
				disabled: !_spaceBar,
				limitToBounds: true,
				minScale: 0.02,
				maxScale: 1.5,
			}}
		>
			{({ positionX, positionY, scale, s }) => {
				const x = (dropId && positionX) || 0;
				const y = (dropId && positionY) || 0;
				return (
					<TransformComponent>
						<Ruller />
						<div
							className='ContentPage'
							// onMouseDown={_spaceBar ? (e) => onMouseDown(e) : void 0}
							// onMouseMove={_spaceBar ? (e) => onMouseMove(e) : void 0}
							// onWheel={(e) => onScroll(e)}
							onKeyDown={(e) => onKeyDown(e)}
							onKeyUp={(e) => onKeyUp(e)}
							// permet dropable
							tabIndex={0}
							style={{
								transform: `scale3d(${_zoomValue}, ${_zoomValue}, 1) 
										translate3d(${-x}px, ${-y}px, ${0}px)`,
								left: `${x}px`,
								top: `${y}px`,
								position: dropId ? 'absolute' : 'unset',
							}}
						>
							Camera:positionX:{positionX}.positionY:{positionY}
							width: {width / cols}
							{/* {<LayoutBox />} */}
							{/* {root.map((dataLayout) => (
								<Layout
									key={String(Math.random())}
									id={dataLayout.key}
									transformScale={_zoom}
								/>
							))} */}
						</div>
					</TransformComponent>
				);
			}}
		</TransformWrapper>
	);
};

export default view(PageType_Layout);
