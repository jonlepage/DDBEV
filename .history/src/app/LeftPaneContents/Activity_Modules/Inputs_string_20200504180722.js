import React, { useState } from 'react';
import { view, store } from '@risingstack/react-easy-state';
import Typography from 'antd/lib/typography';
import Input from 'antd/lib/input/Input';
import {
	EditFilled,
	LinkOutlined,
	SettingFilled,
	CodeFilled,
	LockFilled,
	TagOutlined,
	InfoCircleTwoTone,
} from '@ant-design/icons/lib/icons';
import { Store_Module_inputString } from '../Activity_Modules';
const { Text } = Typography;

const Inputs_string = ({ dataId }) => {
	const data = Store_Module_inputString.getById(dataId);
	const settings = data.getSetting();
	return (
		<>
			<div>
				<div
					className='InputModule'
					style={{
						flexDirection: settings.displayTool.flexDirection.value,
						alignItems: settings.displayTool.alignItems.value,
					}}
				>
					{/* <div className={'TopModuleL_name'}>
						<Text type='secondary'>#string</Text>
					</div> */}
					<div className='InputModuleTool'>
						<LinkOutlined />
						<SettingFilled />
						<CodeFilled />
						<LockFilled />
					</div>
					<div className='InputModuleLabel'>
						<Text type='secondary'>
							<TagOutlined />
							PlayerName
						</Text>
					</div>
					<div className='InputModuleDescription'>
						<Text type='secondary'>
							<InfoCircleTwoTone />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore
						</Text>
					</div>
					<Input
						id='zzzzz'
						size='small'
						prefix={<EditFilled />}
						defaultValue=''
					/>
				</div>
			</div>
		</>
	);
};

export default view(Inputs_string);
