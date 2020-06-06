import React from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Collapse, Typography, Space } from 'antd';
import { Store_Modules, VIEW_Modules } from '../../components/Modules.store';
import Modules from '../../components/Modules';
import { Store_Panel_Module } from './Panel_Module.store';
import { Store_Mod_Layout } from '../../components/Modules/Mod_Layout.store';
const { Text } = Typography;
const { Panel } = Collapse;

/** Affiche des Modules dans plusieur sections */
const Panel_Module = () => {
	const { DATA } = Store_Modules;
	const _DATA = DATA.filter((d) => !d.UID);
	return (
		<div className='Activity_Modules'>
			<Collapse defaultActiveKey={['SingleModules']}>
				<Panel header='Single Modules' key='SingleModules'>
					{_DATA.map((data, i) => {
						const { MUID, MTYPE } = data;
						// pour chaque data, affiche modules
						return (
							<div
								key={i}
								className='ModuleDragger'
								draggable={true}
								onDragStart={(e) => (Store_Mod_Layout.dndData = data)}
								onDragEnd={(e) => (Store_Mod_Layout.dndData = null)}
							>
								<div className='ModuleTitle'>
									<Text type='secondary'>#{MTYPE}</Text>
								</div>
								{<Modules UID={MUID} MUID={MUID} />}
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

export default view(Panel_Module);
