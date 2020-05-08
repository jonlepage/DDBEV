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
} from '@ant-design/icons/lib/icons';
import { Store_Module_inputString } from '../Activity_Modules';
const { Text } = Typography;

const Inputs_string = ({ dataId }) => {
	const data = Store_Module_inputString.getById(dataId);

	return (
		<>
			<div>
				<div className={'InputModule'}>
					{/* <div className={'TopModuleL_name'}>
						<Text type='secondary'>#string</Text>
					</div> */}
					<div className={'InputModuleTool'}>
						<LinkOutlined />
						<SettingFilled />
						<CodeFilled />
						<LockFilled />
					</div>
					<div className={'InputModuleLabel'}>
						PlayerName
						<Input
							id='zzzzz'
							size='small'
							prefix={<EditFilled />}
							defaultValue=''
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default view(Inputs_string);
