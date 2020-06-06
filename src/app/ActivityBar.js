import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { Tabs } from 'antd';
import { Store_ActivityBar } from './ActivityBar.store';
const { TabPane } = Tabs;

const ActivityBar = () => {
	const { DATA, _active } = Store_ActivityBar;
	return (
		<Tabs
			style={{ userSelect: 'none' }}
			defaultActiveKey={_active}
			tabPosition='left'
			size='small'
			onChange={(key) => (Store_ActivityBar._active = key)}
		>
			{DATA.map((data, i) => {
				const { UID, _src, _title, _description } = data;
				return (
					<TabPane
						key={UID}
						tab={
							<img
								title={`${_title}\n${_description}`}
								src={_src}
								width={32}
								height={32}
								alt='Logo'
							/>
						}
					></TabPane>
				);
			})}
		</Tabs>
	);
};

export default view(ActivityBar);
