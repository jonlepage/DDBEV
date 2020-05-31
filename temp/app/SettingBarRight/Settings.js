import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Store_Grids } from '../ContentPage/PageType_Layout/Grids';

export const Store_Settings = store({
	/** On a plusieur type de child settings
	 * Layouts: Layout sont les settings d'espace qui integre les grids=>modules
	 * Layouts: Layout sont les settings d'espace qui integre les grids=>modules
	 */
	MODELE: {},
	data: {},
	//TODO: RENDU ICI, TROUVER UN MOYEN SIMPLE DE RECUPER UN STORE TYPE INPUT
	getSettingsFrom(id) {
		Store_Grids.getSettingStore(id)?.getDataById(id);
	},
});
/** Module de settings, distribu les setting selon les input */
const Settings = ({ id }) => {
	const store = Store_Grids.getSettingStore(id);
	const dataSetting = store.getDataById(id);
	return (
		<>
			{id}:{Object.keys(dataSetting)}
		</>
	);
};

export default view(Settings);
