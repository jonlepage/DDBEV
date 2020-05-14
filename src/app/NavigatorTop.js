import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Radio, Button } from 'antd';
import { Store_Modales } from './Modales';
import { PlusSquareFilled } from '@ant-design/icons';
import { Store_layouts } from './ContentPage/PageType_Layout/Layouts';

/** Store Componment */
export const Store_PageOnglets = store({
	MODELE: {
		/** id name de la page */
		id: '',
		/** extention assosier [.class,.sheet,.validator] */
		ext: '',
		/** index dans la nav */
		index: -1,
		pageType: '',
		/** si la page est visible ou fermer */
		visible: true,
	},
	_currentSelect: 0,
	data: [],
	/** Creer une nouvelle page */
	create(id = 'created_unknow', pageType = 'Layout') {
		const index = this.data.length;
		const newData = { ...this.MODELE, index, id, pageType };
		this.data.push(newData);
		this._currentSelect = index;
		// create page content ? la ces layouts, voir pour les autre
		Store_layouts.create(id);
	},
	getCurrentSelected() {
		return this.data[this._currentSelect] || {};
	},
});

/** Affiche les bouton de creation, et tous les page Ouvert */
const NavigatorTop = () => {
	const { data, _currentSelect } = Store_PageOnglets;
	return (
		<div className='NavigatorTop'>
			<Button type='primary' onClick={() => Store_Modales.setVisibility(true)}>
				<PlusSquareFilled />
				Class
			</Button>
			<Button type='primary' onClick={() => null}>
				<PlusSquareFilled />
				Sheet
			</Button>
			<Button type='primary' onClick={() => null}>
				<PlusSquareFilled />
				Validator
			</Button>
			<Radio.Group
				className={'NavigatorTop_Group'}
				value={_currentSelect}
				buttonStyle='solid'
				size={'small'}
				onChange={(e) => (Store_PageOnglets._currentSelect = e.target.value)}
			>
				{data.map((_data, i) => {
					return (
						<Radio.Button key={i} className={'NavigatorTop_Page'} value={i}>
							{_data.id}.class
						</Radio.Button>
					);
				})}
			</Radio.Group>
		</div>
	);
};

export default view(NavigatorTop);
