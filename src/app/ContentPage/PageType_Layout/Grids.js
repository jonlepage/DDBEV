import React, { useState } from 'react';
import { view, store } from '@risingstack/react-easy-state';

import { Store_Modules } from '../../LeftPaneContents/Activity_Modules';
import Layouts, { Store_layouts } from './Layouts';

/** Un content est enrober d'une grid, pour etre deplacer
 * Une grid est rendu en mode edit, en mode render la grid disparait, mais permet la position
 * La grid doi connaitre tous ces child data, et devrait servir de manager global
 */
export const Store_Grids = store({
	/**@type {DataLayout} le template default fourni quant on build */
	MODELE: {
		/** root page layout */
		rootId: '',
		/** parentId layout si nested */
		parentId: '',
		/** Un grid na pas a etre unique, ces le content qui doi etre unique */
		id: '',
		/** key permet de defenir une hyarchi en mode tree: "id-id-id" */
		key: '',
		/** ID du setting connecter au layout*/
		settingId: '',
		/** dataGrid pour la position et largeur du grid  */
		datagrid: { x: 1, y: 1, w: 2, h: 1, minW: 1, minH: 1, type: null },
	},
	data: {},
	/** le id de la grid selectionner */
	_selectedId: '',
	/** creer un layout */
	create(rootId, id, datagrid) {
		//todo: ajouter parentId, utilise rootId pour le moment
		const data = { ...this.MODELE, rootId, id, datagrid };
		this.data[id] = data;
		Store_layouts.getById(rootId).childrens.push(id); // ajout au layout children ,la grid id
	},
	getById(id) {
		return this.data[id];
	},
	/** obtien un render, selon les data */
	getView(id) {
		const { datagrid } = this.data[id];
		return (
			<div
				className='ContentGrid'
				key={id}
				id={id}
				data-grid={datagrid}
				onClick={(e) => (this._selectedId = id)}
			>
				{Store_Modules.getInputView(datagrid.type, id)}
				{/* <Layouts id={'testing'} /> */}
			</div>
		);
	},
	//TODO: RENDU ICI, DOI PERMET DE TROUVER LE STORE, POUR AFFICHER LES SETTINGS AUTO
	getSettingStore(id) {
		// obtien le type
		const type = this.data[id].datagrid.type;
		return Store_Modules.STORES[type];
	},
});

const Grids = ({ id, children }) => {
	const { datagrid } = Store_Grids.getById(id);
	return (
		<div
			key={id}
			className='ContentGrid'
			data-grid={datagrid}
			// style={isFocused ? { outline: '3px dashed #ffffff' } : {}}
			// onMouseOver={(e) => onMouseEnter(e, id)}
			// onMouseLeave={(e) => onMouseLeave(e, id)}
			// onMouseUp={(e) => onMouseUp(e, id, inputType)}
		>
			{children}
			1TESTINGGGGGGGGGG
			{/* {isFocused && <div className='GridContentId'>#id:{id}</div>}
			<div
				className='GridContentFlow'
				style={{ overflow: isFocused ? 'auto' : 'hidden' }}
			>
				{inputType ? input(id, inputType) : <Layouts id={id} />}
			</div> */}
		</div>
	);
};

export default view(Grids);
