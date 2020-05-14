import React, { useState } from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Typography } from 'antd';
import { InfoCircleTwoTone } from '@ant-design/icons';
const { Text } = Typography;

export const Store_Inputs_tag = store({
	MODELE: {
		/** id unique du layout, peut utiliser dans key car unique */
		id: '',
		/** parent ID du composant */
		parentId: '',
		/** si appartien a un group ? passer */
		groupId: '',
		/** Childs id ? si oui, devien un */
		childrenId: [],
		/** ID du setting connecter*/
		settingId: '',
		/** setting du grid qui englobe le module  */
		datagrid: { x: 1, y: 1, w: 2, h: 1, minW: 1, minH: 1 },
	},
	data: {},
	getView(id) {
		return <Inputs_tag id={id} key={id} />;
	},
	getDataById(id) {
		return this.data[id];
	},
	createData(id) {
		const data = { ...this.MODELE, id };
		return (this.data[id] = data);
	},

	_hover: false,
});
//TODO: VOIR SI ONT PEUT JUSTE UTILISER data-grid , ENROBER LORSQUE GROUPD, SUPRIMER data-grid PARENT SI EDIT NESTED
const Inputs_tag = ({ id }) => {
	const store = Store_Inputs_tag;
	const { parentId, childrenId, settingId, datagrid } =
		store.getDataById(id) || store.createData(id);
	return (
		<div
			id={id}
			key={id}
			className='ContentGrid'
			// data-grid={datagrid}
			// style={isSelected ? { outline: '3px dashed #ffffff' } : {}}
			// onMouseOver={(e) => onMouseEnter(e, _id)}
			// onMouseLeave={(e) => onMouseLeave(e, id)}
			onClick={(e) => {
				store._hover = !store._hover;
			}}
		>
			<Text type='secondary'>
				<InfoCircleTwoTone />
				Lorem ipsum dolor sit amet...
			</Text>
		</div>
	);
};

export default view(Inputs_tag);
