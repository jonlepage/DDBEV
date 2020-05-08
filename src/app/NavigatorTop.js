import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Radio, Button } from 'antd';
import { Store_Modales } from './Modales';

/** Store Componment */
export const Store_PageOnglets = store({
	MODELE: {
		id: 'filename',
		ext: '.class',
		contentId: '',
		index: -1,
		pageType: '',
	},
	_currentSelect: 0,
	data: [],
	/** TODO: pour progresser dans LayoutBox, besoin d'une page modal,
	 * Creer un dataPage
	 * Ensuite creer un PageOnglets qui ref le dataPage
	 * on pourra donc fermer l'onglet si besoin ou ouvrir un nouvelle onglet avec fromDataId
	 */

	create(id = 'created_unknow', pageType = 'Layout') {
		const index = this.data.length;
		const newData = { ...this.MODELE, index, id, pageType };
		this.data.push(newData);
		this._currentSelect = index;
	},
	getCurrentSelected() {
		return this.data[this._currentSelect] || {};
	},
});

const NavigatorTop = () => {
	const { data, _currentSelect } = Store_PageOnglets;

	return (
		<div className='NavigatorTop'>
			<Button type='primary' onClick={() => Store_Modales.setVisibility(true)}>
				Create new Class
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
