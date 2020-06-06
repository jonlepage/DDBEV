import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Camera from '../../components/Camera';
import Modules from '../../components/Modules';
import { Store_PageClass } from './PageClass.store';

/** PageClass, permet la gestion dun data typ Class */
const PageClass = ({ UID }) => {
	//TODO:  peut etre mettre le mode Preview DataBase mode ici
	const data =
		Store_PageClass.getData(UID) ||
		Store_PageClass.add(Store_PageClass.create(UID));

	return (
		<Camera UID={UID}>
			<Modules UID={UID} MUID={UID} />
		</Camera>
	);
};

export default view(PageClass);
