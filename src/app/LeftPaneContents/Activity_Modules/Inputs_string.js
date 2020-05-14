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
const { Text } = Typography;

export const Store_Module_inputString = store({
	/** utiliser pour la creaction de nouveau data */
	DEFAULT: {
		id: 'DEFAULT',
		settings: {
			displayTool: {
				flexDirection: {
					css: 'flexDirection',
					LIST: ['column', 'column-reverse', 'row', 'row-reverse'],
					title: 'Tool Directions',
					value: 'row-reverse',
				},
				alignItems: {
					css: 'alignItems',
					LIST: ['center', 'flex-end', 'flex-start'],
					title: 'Tool align',
					value: 'flex-start',
				},
			},
		},
		/** returnera un setting par id TODO: STORE */
		getSetting() {
			return this.settingId; //Sore_setting.getById(this.settingId)
		},
	},
	title: 'Input String',
	/** tous les layout creer */
	data: {},
	/** creer le module, et lui passe le dataId
	 * Si null ou undefined va utiliser default
	 */
	getView(id) {
		return <Inputs_string id={id} />;
	},
	getById(id) {
		return this.data[id] || this.DEFAULT;
	},
});
const Inputs_string = ({ id }) => {
	const { settings } = Store_Module_inputString.getById(id);
	return (
		<>
			<div>
				{/* <div
					className='InputModule'
					style={{
						flexDirection: settings.displayTool.flexDirection.value,
						alignItems: settings.displayTool.alignItems.value,
					}}
				>
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
						<div className='InputModuleDescription'>
							<Text type='secondary'>
								<InfoCircleTwoTone />
								Lorem ipsum dolor sit amet...
							</Text>
							<Input
								id='zzzzz'
								size='small'
								prefix={<EditFilled />}
								defaultValue=''
							/>
						</div>
					</div>
				</div> */}
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
