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
const { Text } = Typography;

const Inputs_string = () => {
	const [_state, _setState] = useState('value'); // react hook states
	const lstore = store({ _state: 30 }); // store states local

	return (
		<>
			<div>
				<div className={'TopModuleHeader'}>
					<div className={'TopModuleL_name'}>
						<Text type='secondary'>#string</Text>
					</div>
					<div className={'TopModuleR_tool'}>
						<LinkOutlined />
						<SettingFilled />
						<CodeFilled />
						<LockFilled />
					</div>
				</div>

				<Input
					id='zzzzz'
					size='small'
					prefix={<EditFilled />}
					defaultValue=''
				/>
			</div>
		</>
	);
};

export default view(Inputs_string);
