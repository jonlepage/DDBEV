import React from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Tabs } from 'antd';
import { TYPE_PanelContent } from './PanelContent';
const { TabPane } = Tabs;
export const Data_ActivityBar = store({
	uid: 'projetTree',
	src: '',
	title: 'no descriptions',
	panelContentId: '',
});
export const Store_ActivityBar = store({
	_active: 'projetPlugin',
	/** @type {Array.<Data_ActivityBar>} */
	DATA: [
		{
			...Data_ActivityBar,
			uid: 'projetTree',
			title: 'Database Explorator',
			src: '../res/img/nav/database.png',
			panelContentId: '',
		},
		{
			...Data_ActivityBar,
			uid: 'projetPlugin',
			title: 'Database Explorator',
			src: '../res/img/nav/3qf3q.png',
			panelContentId: TYPE_PanelContent.MODULES,
		},
		{
			...Data_ActivityBar,
			uid: 'projetLinker',
			title: 'Database Explorator',
			src: '../res/img/nav/Network-Folder-icon.png',
		},
		{
			...Data_ActivityBar,
			uid: 'projetGit',
			title: 'Database Explorator',
			src: '../res/img/nav/git-icon.png',
		},
		{
			...Data_ActivityBar,
			uid: 'search',
			title: 'Database Explorator',
			src: '../res/img/nav/file-search-icon.png',
		},
		{
			...Data_ActivityBar,
			uid: 'ScrachComponments',
			title: 'Database Explorator',
			src: '../res/img/nav/items.png',
		},
		{
			...Data_ActivityBar,
			uid: 'Settings',
			title: 'Database Explorator',
			src: '../res/img/nav/settings.png',
		},
	],

	getData(uid) {
		return this.DATA.find((data) => data.uid === uid);
	},
});
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
				const { uid, src, title } = data;
				return (
					<TabPane
						key={uid}
						tab={
							<img title={title} width={32} height={32} src={src} alt='Logo' />
						}
					></TabPane>
				);
			})}
		</Tabs>
	);
};

export default view(ActivityBar);
