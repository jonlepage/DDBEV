import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Tabs } from 'antd';

import { Store_LeftPan } from '../stores/Store_LeftPan';

function ActivityBarLeft() {
	const { TabPane } = Tabs;
	function onChange(activeKey) {
		Store_LeftPan.selectedID = activeKey;
	}
	return (
		<>
			<Tabs
				style={{ userSelect: 'none' }}
				tabPosition='left'
				defaultActiveKey={Store_LeftPan.selectedID}
				size='small'
				onChange={onChange}
			>
				{Store_LeftPan.ACTIVITY.map((data, i) => {
					return (
						<TabPane
							key={data.id}
							tab={
								<img
									title={data.title}
									width={32}
									height={32}
									src={data.src}
									alt='Logo'
								/>
							}
						>
							a
						</TabPane>
					);
				})}
			</Tabs>
		</>
	);
}

export default view(ActivityBarLeft);
