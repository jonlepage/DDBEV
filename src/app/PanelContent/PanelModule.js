import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Collapse, Typography, Space } from 'antd';
import Modules, { Store_Modules } from '../../components/Modules';
const { Text } = Typography;
const { Panel } = Collapse;
/** Type pour tous les panel */
// export const TYPE_Modules = store({
// 	LAYOUT: 'LAYOUT',
// });

export const Store_PanelModules = store({
	NAME: 'Store_PanelModules',
	/** Drag and drop ID, when drag a module from outise to inside */
	_dndID: '',
});

/** Affiche des Modules dans plusieur sections */
const PanelModules = () => {
	const { REGISTER } = Store_Modules;
	return (
		<div className={'Activity_Modules'}>
			<Collapse defaultActiveKey={['SingleModules']}>
				<Panel header='Single Modules' key='SingleModules'>
					{REGISTER.map((NAME, i) => {
						// pour chaque data, affiche modules
						return (
							<div
								className='ModuleDragger'
								key={i}
								draggable={true}
								onDragStart={(e) => (Store_PanelModules._dndID = NAME)}
								onDragEnd={(e) => (Store_PanelModules._dndID = '')}
							>
								<div className='ModuleTitle'>
									<Text type='secondary'>#{'type'}</Text>
								</div>
								{<Modules id={NAME} uid={NAME} moduleName={NAME} />}
							</div>
						);
					})}
				</Panel>
				<Panel header='Group Modules' key='GroupModules'>
					{/* <Setting_base /> */}
				</Panel>
			</Collapse>
			<Space direction='vertical'></Space>
		</div>
	);
};

export default view(PanelModules);
