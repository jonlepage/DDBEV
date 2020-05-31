import React from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Typography } from 'antd';
import { InfoCircleTwoTone } from '@ant-design/icons';
const { Text } = Typography;

/** Un input Tag est un icon avec un tag name
 * permet l'auto link via un input value local ou global
 */
export const Store_Inputs_tag = store({
	SETTING: {
		backgroundColor: '#24799e',
	},
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
	dataSetting: {},
	data: {},
	getView(id) {
		return <Inputs_tag id={id} key={id} />;
	},
	getDataById(id) {
		return this.data[id];
	},
	getSettingById(id) {
		return this.dataSetting[id];
	},
	createData(id) {
		const data = { ...this.MODELE, id };
		const dataSetting = { ...this.SETTING };
		this.dataSetting[id] = dataSetting;
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
		<div id={id} key={id} className='ContentInput'>
			<Text type='secondary'>
				<InfoCircleTwoTone />
				Lorem ipsum dolor sit amet...
			</Text>
		</div>
	);
};

export default view(Inputs_tag);
