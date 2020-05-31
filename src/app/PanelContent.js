import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import PanelModules from './PanelContent/PanelModule';

/** Type pour tous les panel */
export const TYPE_PanelContent = store({
	MODULES: 'MODULES',
});

export const Store_PanelContent = store({
	STORE: [
		{
			_id: TYPE_PanelContent.MODULES,
			get Store() {
				return Store_Modules;
			},
		},
	],
	getStore(id) {
		return this.STORE.find((data) => data._id === id);
	},
});
const PanelContent = () => {
	// const { _active } = Store_ActivityBar;
	// const { panelContentId } = Store_ActivityBar.getData(_active);
	// const data = Store_PanelContent.getStore(panelContentId);
	// if (data) {
	// 	return <div>{'data.Store.getView()'}</div>;
	// }
	return <PanelModules />;
};

export default view(PanelContent);
