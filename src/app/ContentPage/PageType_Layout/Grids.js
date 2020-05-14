import React, { useState } from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Store_app } from '../../../stores/Store_App';
import { Store_Modules } from '../../LeftPaneContents/Activity_Modules';
import Layouts, { Store_layouts } from './Layouts';

/** TODO: creer un data grids  */
export const Store_Grids = store({
	/**@type {DataLayout} le template default fourni quant on build */
	MODELE: {
		/** root page layout */
		rootId: '',
		/** parentId layout si nested */
		parentId: '',
		/** id unique du layout, peut utiliser dans key car unique */
		id: '',
		/** key permet de defenir une hyarchi en mode tree: "id-id-id" */
		key: '',
		/** ID du setting connecter au layout*/
		settingId: '',
		/** dataGrid pour la position et largeur du grid  */
		datagrid: { x: 1, y: 1, w: 2, h: 1, minW: 1, minH: 1, type: null },
	},
	data: {},
	/** creer un layout */
	create(rootId, id, datagrid) {
		//todo: ajouter parentId, utilise rootId pour le moment
		const data = { ...this.MODELE, rootId, id, datagrid };
		this.data[id] = data;
		Store_layouts.getById(rootId).childrens.push(id);
	},
	getById(id) {
		return this.data[id];
	},
	/** obtien un render, selon les data */
	getView(id) {
		const { datagrid } = this.data[id];
		return (
			<div className='ContentGrid' key={id} id={id} data-grid={datagrid}>
				{Store_Modules.getInputView(datagrid.type, id)}
				{/* <Layouts id={'testing'} /> */}
			</div>
		);
	},
});

const Grids = ({ id }) => {
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
			testttttt
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
