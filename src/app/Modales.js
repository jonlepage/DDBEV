import React, { useState } from 'react';
import { view, store } from '@risingstack/react-easy-state';
import ModaleType_dataClass from './Modales/ModaleType_dataClass';
import { Store_PageOnglets } from './NavigatorTop';

export const Store_Modales = store({
	/** si le modale est visible */
	_visible: false,
	data: [],
	/** if modal is visible or no? true freeze all action not related to modalContent */
	setVisibility(value) {
		this._visible = value;
	},
});
/** tool qui apelle des modale */
const Modales = () => {
	const { modaleData } = Store_PageOnglets;
	return (
		<div className='ModalesBox'>{modaleData && <ModaleType_dataClass />}</div>
	);
};

export default view(Modales);
