import React, { useState } from 'react';
import { Box, Tooltip } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import {
	Input,
	Card,
	InputNumber,
	Space,
	Checkbox,
	Radio,
	Switch,
	Slider,
	Select,
	Avatar,
} from 'antd';
import { EditFilled, UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import Inputs_string from './Activity_Modules/Inputs_string';
const { Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;
//TODO: MODEL BUILDER

export const Store_Module_inputString = store({
	/** utiliser pour la creaction de nouveau data */
	DEFAULT: {},
	title: 'Input String',
	/** tous les layout creer */
	data: [],
	/** creer le module, et lui passe le dataId
	 * Si pas de dataId va utiliser default
	 */
	createView(dataId) {
		return <Inputs_string dataId={dataId} />;
	},
	/** create un new data */
	create() {},
});
/** Store Componment */
const Store_Modules = store({
	data: [Store_Module_layout],
	/** quand on drag un module */
	onDragStart(i) {},
});
/** list des elements modules implementable */
const Activity_Modules = () => {
	const onDragStart = (type) => {
		// const data = Store_DataBaseStorage.createData(type);
		// Store_DataBaseStorage.setDropper(data);
		//e.dataTransfer.setData('text', JSON.stringify(data));
	};
	/** Store module layout */
	const Store_Module_layout = store({
		title: 'Layout 2x2',
		/** tous les layout creer */
		data: [],
		onDragStart() {},
	});
	/** Store module layout */

	return (
		<div className={'Activity_Modules'}>
			<Space direction='vertical'>
				{Store_Modules.data.map((data, i) => {
					return (
						<div
							key={i}
							className='ModuleDragger'
							draggable={true}
							onDragStart={(e) => Store_Modules.onDragStart(i)}
						>
							{/* <Inputs_string /> */}
							Module dragable
						</div>
					);
				})}
				{/* <div
					id={'Inputs_string'}
					draggable={true}
					onDragStart={(e) => onDragStart('Inputs_string')}
					className={'ModuleInput'}
				>
					<div
						style={{
							width: '100px',
							height: '40px',
							background: 'rgba(255, 255, 255, 0.27)',
							borderStyle: 'dashed',
						}}
					>
						zone 1x1
					</div>
				</div> */}
				{/* <div
					id={'Inputs_string'}
					draggable={true}
					onDragStart={(e) => onDragStart('Inputs_string')}
					className={'ModuleInput'}
				>
					<Inputs_string />
				</div> */}
				{/* <div draggable={true} className={'ModuleInput'}>
					<Text type='secondary'>#textarea</Text>
					<br />
					<TextArea
						placeholder='string multiLine '
						autoSize={{ minRows: 2, maxRows: 6 }}
					/>
				</div> */}
				{/* <div draggable={true} className={'ModuleInput'}>
					<Text type='secondary'>#numbers</Text>
					<br />
					<InputNumber size='small' min={1} max={100000} />
				</div> */}
				{/* <div draggable={true} className={'ModuleInput'}>
					<Text type='secondary'>#checkboxs</Text>
					<br />
					<Checkbox>Checkbox</Checkbox>
				</div> */}
				{/* <div draggable={true} className={'ModuleInput'}>
					<Text type='secondary'>#radios</Text>
					<br />
					<Radio>Radio</Radio>
				</div> */}
				{/* 
				<div draggable={true} className={'ModuleInput'}>
					<Text type='secondary'>#switchs</Text>
					<br />
					<Switch checkedChildren='true' unCheckedChildren='false' />
				</div> */}
				{/* 
				<div draggable={true} className={'ModuleInput'}>
					<Text type='secondary'>#sliders</Text>
					<br />
					<Slider
						range
						marks={{
							0: 'n',
							26: 'm',
							37: 'h',
							100: {
								style: {
									color: '#f50',
								},
								label: <strong>e</strong>,
							},
						}}
						defaultValue={[26, 37]}
					/>
				</div> */}
				{/* 
				<div draggable={true} className={'ModuleInput'}>
					<Text type='secondary'>#selects</Text>
					<br />
					<Select defaultValue='option0' style={{ width: 120 }}>
						<Option value='option0'>options</Option>
						<Option value='option2'>option2</Option>
						<Option value='option3' disabled>
							option3
						</Option>
						<Option value='option4'>option4</Option>
					</Select>
				</div> */}
				{/* <div draggable={true} className={'ModuleInput'}>
					<Text type='secondary'>#shape</Text>
					<br />
					<Avatar shape='square' icon={<UserOutlined />} />
				</div> */}
			</Space>
		</div>
	);
};

export default view(Activity_Modules);
