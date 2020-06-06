import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Modale_Class from './Modales/Modale_Class';
import { Store_Modales } from './Modales.store';
import Modale_DataBase from './Modales/Modale_DataBase';
import { VIEW_ContentPage } from './ContentPage.store';

function getView(TYPE, data) {
	switch (TYPE) {
		case VIEW_ContentPage.PageClass:
			return <Modale_Class data={data} />;
		case VIEW_ContentPage.PageDataBase:
			return <Modale_DataBase data={data} />;
		default:
			return 'ERROR MODALE VIEWID TYPE:{TYPE}';
	}
}

const Modales = () => {
	const { data } = Store_Modales;
	if (data) {
		const { TYPE } = data;
		return <div className='ModalesBox'>{getView(TYPE, data)}</div>;
	}
};

export default view(Modales);
