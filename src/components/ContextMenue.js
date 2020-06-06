import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { Menu } from 'antd';
import { Store_ContextMenue } from './ContextMenue.store';
import { SettingFilled, CopyFilled } from '@ant-design/icons';
const { SubMenu } = Menu;
const ContextMenue = () => {
	const { _title, x, y, _visible } = Store_ContextMenue;

	if (_visible) {
		return (
			<div
				className='ContextMenue'
				id='ContextMenue'
				style={{ transform: `translate3d(${x}px, ${y}px, ${1}px)` }}
				tabIndex={-1}
			>
				<div>{_title}</div>
				<Menu
					onClick={(ClickParam) => Store_ContextMenue.onClick(ClickParam.key)}
				>
					<Menu.Item>Clear</Menu.Item>
					<Menu.Divider />
					<Menu.Item>Find Conextions</Menu.Item>
					<Menu.Item>Export</Menu.Item>
					<Menu.Item>Import</Menu.Item>
					<Menu.Divider />
					<Menu.Item icon={<CopyFilled />}>clone</Menu.Item>
					<Menu.Divider />
					<Menu.Item key='Settings' icon={<SettingFilled />}>
						Settings
					</Menu.Item>
				</Menu>
			</div>
		);
	}
};

export default view(ContextMenue);
