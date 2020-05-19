import React from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Radio, Button, Space } from 'antd';
import { PlusSquareFilled, CloseOutlined } from '@ant-design/icons';
import { Store_Modales } from './Modales';
import { Store_layouts } from './ContentPage/PageType_Layout/Layouts';
import NavEasyButtons from './NavigatorTop/NavEasyButtons';
import { Store_Global } from '../stores/Store_Global';

/**
 * @typedef {Object} MODELE - Data for build GridLayout
 * @property {string} id - Id unique of the page
 * @property {string} ext - Extention type de la page
 * @property {number} index - Index de longlet
 * @property {boolean} visible - si longlet est visible ? ou fermer X
 */

/** Store Componment */
export const Store_PageOnglets = store({
	name: 'Store_PageOnglets',
});
/** @param {string} value */
function onChange(value) {
	Store_Global._selectedUID = value;
}

/** Affiche les bouton de creation, et tous les page Ouvert */
const NavigatorTop = () => {
	const { DATA, _selectedUID } = Store_Global;
	return (
		<div className='NavigatorTop'>
			<NavEasyButtons />
			<Radio.Group
				className='NavigatorTop_Group'
				buttonStyle='solid'
				size='small'
				value={_selectedUID}
				onChange={(e) => onChange(e.target.value)}
			>
				<Space size={4}>
					{DATA.map((data, i) => {
						if (data.onglet.visible) {
							return (
								<div key={data.uid} className='NavigatorTop_Page'>
									<Space size={1}>
										<Radio.Button value={data.uid}>
											{data.id}
											{data.ext}
										</Radio.Button>
										<CloseOutlined />
									</Space>
								</div>
							);
						}
					})}
				</Space>
			</Radio.Group>
		</div>
	);
};

export default view(NavigatorTop);
