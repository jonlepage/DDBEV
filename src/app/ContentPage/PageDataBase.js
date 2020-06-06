import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Camera from '../../components/Camera';
import Modules from '../../components/Modules';
import { Store_PageDataBase } from './PageDataBase.store';

/** PageDataBase, Permet de creer une DB a partir de plusieur modele de data class */
const PageDataBase = ({ UID }) => {
	const _maxList = 50;
	/** TODO: propage un id en mode database, represente une value */
	const dataBaseId = '31qf3aqgq3fg';
	return (
		<>
			<div className='DataBaseList'>
				{[...Array(_maxList)].map((x, i) => {
					return <div key={i}>00{i}</div>;
				})}
			</div>
			<Camera UID={UID}>
				<Modules UID={UID} MUID={UID} />
			</Camera>
		</>
	);
};

export default view(PageDataBase);
