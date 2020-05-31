import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Draggable from 'react-draggable';
import { Store_Windows } from './Windows.store';
import Settings from '../components/Settings';
import { Box } from '@material-ui/core';

/** Simple Window Draggable, pour settings */
const Windows = () => {
	const { DATA } = Store_Windows;
	return (
		<>
			{DATA.map((data, i) => {
				const { UID } = data;
				return (
					<Draggable
						key={i}
						axis='both'
						handle='.WindowsTitle'
						defaultPosition={{ x: 0, y: 0 }}
						position={null}
						// grid={[25, 25]}
						scale={1}
						bounds='parent'
						// onStart={this.handleStart}
						// onDrag={this.handleDrag}
						// onStop={this.handleStop}
					>
						<div className='Windows'>
							<div className='WindowsTitle'>
								<div>{UID}</div>
								<Box
									className='OsWin'
									display='flex'
									justifyContent='flex-end'
									alignItems='flex-start'
								>
									<Box
										className='OsWin button btn-exit'
										px={2}
										mx={0}
										onClick={(e) => {
											Store_Windows.close(UID);
										}}
									>
										X
									</Box>
								</Box>
							</div>
							<div>This readme is really dragging on...</div>
							<Settings UID={UID} />
						</div>
					</Draggable>
				);
			})}
		</>
	);
};

export default view(Windows);
