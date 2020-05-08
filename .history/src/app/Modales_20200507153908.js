import React, { useState } from 'react';
import { view, store } from '@risingstack/react-easy-state';
import ModaleType_dataClass from './Modales/ModaleType_dataClass';

export const Store_Modales = store({
	_visible: false,
	data: [],
	/** if modal is visible or no? true freeze all action not related to modalContent */
	setVisibility(value) {
		this._visible = value;
	},
});
/** tool qui apelle des modale */
const Modales = () => {
	const isVisible = Store_Modales._visible;
	return (
		<div className='ModalesBox'>{isVisible && <ModaleType_dataClass />}</div>
	);
};

export default view(Modales);
