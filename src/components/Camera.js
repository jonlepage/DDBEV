import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { view } from '@risingstack/react-easy-state';
import { Store_Camera, EVENT_Camera } from './Camera.store';
import HeaderTool from './Camera/HeaderTool';

/** Camera are mapper thats render modules */
const Camera = ({ children, UID }) => {
	const data = Store_Camera.getData(UID) || Store_Camera.create(UID);
	const {
		_limitToBounds,
		_limitToWrapper,
		_minScale,
		_maxScale,
		_zoom,
		defaultPositionX,
		defaultPositionY,
	} = data;
	/** TODO: FAIRE un storeEvents plus general pour gerer ca, car la , ont risque de update Content root, mais besoin juste pour camera */
	const { _spaceBar } = Store_Camera;
	const { onBlur, onKeyUp, onKeyDown } = EVENT_Camera;
	return (
		<div
			className='Camera'
			tabIndex={0}
			onKeyDown={onKeyDown}
			onKeyUp={onKeyUp}
			onBlur={onBlur}
		>
			{/* <Ruller /> */}
			<TransformWrapper
				options={{
					disabled: !_spaceBar, //TODO: EVENT KEY STORE
					limitToBounds: _limitToBounds,
					limitToWrapper: _limitToWrapper,
					minScale: _minScale,
					maxScale: _maxScale,
				}}
				defaultScale={_zoom}
				defaultPositionX={defaultPositionX}
				defaultPositionY={defaultPositionY}
				onPanningStop={({ positionX, positionY }) => {
					data.defaultPositionX = positionX;
					data.defaultPositionY = positionY;
				}}
				wheel={{ step: 10 }}
				scalePadding={{ disabled: true }}
				onWheelStop={({ scale }) => {
					data._zoom = scale;
				}}
			>
				{({ positionX, positionY, scale }) => {
					// In mode Drop, we use css [left,top] instead of translate3d.
					const x = positionX;
					const y = positionY;
					return (
						<TransformComponent>
							<div
								className='ContentPage'
								// permet dropable !?
								tabIndex={0}
								style={{
									transform: `scale3d(${1}, ${1}, 1) 
										translate3d(${-x}px, ${-y}px, ${0}px)`,
									left: `${x}px`,
									top: `${y}px`,
									position: 'dnd' ? 'absolute' : 'unset',
								}}
							>
								<HeaderTool
									UID={UID}
									positionX={positionX}
									positionY={positionY}
								/>
								{children}
								<HeaderTool
									UID={'Ici on pourrait mettre des onglet? hyarchie, setting?'}
									positionX={'options'}
									positionY={'render'}
								/>
							</div>
						</TransformComponent>
					);
				}}
			</TransformWrapper>
		</div>
	);
};

export default view(Camera);
