import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Modale_Class from './Modales/Modale_Class';
import { Store_Modales } from './Modales.store';
import { DATA_PageClass } from './ContentPage/PageClass.store';

const Modales = () => {
	const { data } = Store_Modales;
	function getView(TYPE) {
		switch (TYPE) {
			case DATA_PageClass.NAME:
				return <Modale_Class data={data} />;
			default:
				return 'ERROR MODALE VIEWID';
		}
	}
	if (data) {
		const { TYPE } = data;
		return <div className='ModalesBox'>{getView(TYPE)}</div>;
	}
};

export default view(Modales);
