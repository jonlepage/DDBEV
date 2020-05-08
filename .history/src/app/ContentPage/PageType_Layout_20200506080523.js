import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const PageType_Layout = () => {
	const [_state, _setState] = useState('value'); // react hook states
	const lstore = store({ _state: 30 }); // store states local

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
				const x = (isDragDrop && positionX) || 0;
				const y = (isDragDrop && positionY) || 0;
				return (
					<TransformComponent>
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
								position: isDragDrop ? 'absolute' : 'unset',
							}}
						>
							Camera:positionX:{positionX}.positionY:{positionY}
							width: {width / cols}
							{<LayoutBox />}
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
