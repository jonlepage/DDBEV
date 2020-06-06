import { store } from '@risingstack/react-easy-state';
import { VIEW_PanelContent } from './PanelContent.store';

export const Data_ActivityBar = store({
	NAME: 'Data_ActivityBar',
	/** Unique id name of activity */
	UID: '',
	/**@see VIEW_PanelContent - Reference of panel view name */
	VIEW: '',
	/** icon path */
	_src: '',
	/** title activivity */
	_title: 'no descriptions',
	/** description activivity */
	_description: 'no descriptions',
});
export const Store_ActivityBar = store({
	NAME: 'Store_ActivityBar',
	/** Active UID */
	_active: 'projetPlugin',
	/** @type {Array.<Data_ActivityBar>} */
	DATA: [
		{
			...Data_ActivityBar,
			UID: 'projetTree',
			_title: 'Database Explorator',
			_src: '../res/img/nav/database.png',
			VIEW: VIEW_PanelContent.PanelModule,
		},
		{
			...Data_ActivityBar,
			UID: 'projetPlugin',
			_title: 'Database Explorator',
			_src: '../res/img/nav/3qf3q.png',
			VIEW: VIEW_PanelContent.PanelModule,
		},
		{
			...Data_ActivityBar,
			UID: 'projetLinker',
			_title: 'Database Explorator',
			_src: '../res/img/nav/Network-Folder-icon.png',
			VIEW: VIEW_PanelContent.PanelModule,
		},
		{
			...Data_ActivityBar,
			UID: 'projetGit',
			_title: 'Database Explorator',
			_src: '../res/img/nav/git-icon.png',
			VIEW: VIEW_PanelContent.PanelModule,
		},
		{
			...Data_ActivityBar,
			UID: 'search',
			_title: 'Database Explorator',
			_src: '../res/img/nav/file-search-icon.png',
			VIEW: VIEW_PanelContent.PanelModule,
		},
		{
			...Data_ActivityBar,
			UID: 'ScrachComponments',
			_title: 'Database Explorator',
			_src: '../res/img/nav/items.png',
			VIEW: VIEW_PanelContent.PanelModule,
		},
		{
			...Data_ActivityBar,
			UID: 'Settings',
			_title: 'Database Explorator',
			_src: '../res/img/nav/settings.png',
			VIEW: VIEW_PanelContent.PanelModule,
		},
	],
	getData(uid) {
		return this.DATA.find((data) => data.UID === uid);
	},
});
