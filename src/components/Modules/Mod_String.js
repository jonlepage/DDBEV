import React from 'react';
import { view } from '@risingstack/react-easy-state';
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
import { Store_Mod_String, SETTING_Mod_String } from './Mod_String.store';
import { Store_ContextMenue } from '../ContextMenue.store';
const { Text } = Typography;

const Mod_String = ({ UID, MUID }) => {
	/**TODO: 
	float: initial;
    display: flex;
    flex-flow: nowrap;
	flex-wrap: wrap;
	 */
	const data =
		Store_Mod_String.getData(MUID) || Store_Mod_String.create(UID, MUID);
	const { tagId_display, tagDesc_display } = data;
	return (
		<div
			className='Mod_String'
			onContextMenu={(e) => {
				if (!e.ctrlKey) {
					Store_ContextMenue.setContext(e, MUID, data, SETTING_Mod_String);
				}
			}}
		>
			<div className='Mod_String'>
				<Text type='secondary' style={{ display: tagId_display }}>
					<TagOutlined />
					{MUID}
				</Text>
				<Text type='secondary' style={{ display: tagDesc_display }}>
					<InfoCircleTwoTone />
					Lorem ipsum dolor sit amet...
				</Text>
				<Input
					id='zzzzz'
					size='small'
					prefix={<EditFilled />}
					defaultValue={'defaultValue'}
				/>
			</div>
		</div>
	);
};

export default view(Mod_String);
