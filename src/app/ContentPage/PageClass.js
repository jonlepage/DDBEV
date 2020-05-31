import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Camera from '../../components/Camera';
import { Store_ContentPage } from '../ContentPage.store';
import Modules from '../../components/Modules';

/** PageClass, permet la gestion dun data typ Class */
const PageClass = ({ UID }) => {
	//TODO:  peut etre mettre le mode Preview DataBase mode ici

	return (
		<Camera UID={UID}>
			<Modules UID={UID} MUID={UID} />
		</Camera>
	);
};

export default view(PageClass);
