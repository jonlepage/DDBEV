import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Tabs } from 'antd';
import Activity_DataTree from './ActivityBarLeft/Activity_DataTree';
import Activity_Modules from './ActivityBarLeft/Activity_Modules';
import Activity_Plugins from './ActivityBarLeft/Activity_Plugins';
import { Store_LeftPan } from '../stores/Store_LeftPan';

function ActivityBarLeft() {
	const { TabPane } = Tabs;

	return (
		<>
			<Tabs
				style={{ userSelect: 'none' }}
				tabPosition='left'
				defaultActiveKey='1'
				size='small'
			>
				{Store_LeftPan.ACTIVITY.map((data, i) => {
					return (
						<TabPane
							tab={
								<img
									title={data.title}
									width={32}
									height={32}
									src={data.src}
									alt='Logo'
								/>
							}
							key='2'
						>
							{/* <Activity_Plugins /> */}
						</TabPane>
					);
				})}
				{/* <TabPane
					tab={
						<img
							title='Database Explorator'
							width={32}
							height={32}
							src='../res/img/nav/database.png'
							alt='Logo'
						/>
					}
					key='1'
				></TabPane>
				<TabPane
					tab={
						<img
							title='Plugins Managers'
							width={32}
							height={32}
							src='../res/img/nav/3qf3q.png'
							alt='Logo'
						/>
					}
					key='2'
				>
				</TabPane>
				<TabPane
					tab={
						<img
							title='Projet Connextions'
							width={32}
							height={32}
							src='../res/img/nav/Network-Folder-icon.png'
							alt='Logo'
						/>
					}
					key='3'
				>
					Content of Tab 3
				</TabPane>
				<TabPane
					tab={
						<img
							title='Git Inspector'
							width={32}
							height={32}
							src='../res/img/nav/git-icon.png'
							alt='Logo'
						/>
					}
					key='33'
				>
					Content of Tab 3
				</TabPane>
				<TabPane
					tab={
						<img
							title='Search'
							width={32}
							height={32}
							src='../res/img/nav/file-search-icon.png'
							alt='Logo'
						/>
					}
					key='4'
				>
					Content of Tab 3
				</TabPane>
				<TabPane
					tab={
						<img
							title='Scrach Componments'
							width={32}
							height={32}
							src='../res/img/nav/items.png'
							alt='Logo'
						/>
					}
					key='5'
				>
					Content of Tab 3
				</TabPane>
				<TabPane
					tab={
						<img
							title='Layouts Zones'
							width={32}
							height={32}
							src='../res/img/nav/layoutZone.png'
							alt='Logo'
						/>
					}
					key='6'
				>
					Content of Tab 3
				</TabPane>
				<TabPane
					tab={
						<img
							title='Elements'
							width={32}
							height={32}
							src='../res/img/nav/icon-vc.png'
							alt='Logo'
						/>
					}
					key='7'
				>
				</TabPane> */}
			</Tabs>
		</>
	);
}

export default view(ActivityBarLeft);
