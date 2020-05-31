import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';
import { Store_layoutSettings } from '../../SettingBarRight/Setting_Layout';
import { Store_Global } from '../../../../src/stores/Store_Global';

export const Store_Module_layout = store({
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
		datagrid: { x: 1, y: 1, w: 4, h: 4, minW: 1, minH: 1 },
	},
	data: {},
	getView(id) {
		return <Module_layout id={id} key={id} />;
	},
	// getDataById(id) {
	// 	return this.data[id];
	// },
	// createData(id) {
	// 	const data = { ...this.MODELE, id };
	// 	return (this.data[id] = data);
	// },
	// _hover: false,
});

const Module_layout = ({ id }) => {
	const { settings, grids } = Store_Global.getDataByUID(id);
	let {
		width,
		cols,
		rowHeight,
		backgroundColor,
		gridColor,
		gridThickness,
		margin,
	} = settings;
	const alpha = 1;
	width = (width / cols) * grids.datagrid.w;
	//todo: width est = a parentroot*datagrid.w
	const styles = {
		width: width,
		backgroundSize: `${width / cols}px ${rowHeight}px`,
		backgroundColor: backgroundColor,
		backgroundImage: `linear-gradient(to right, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
			linear-gradient(to left, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
			linear-gradient(to top, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
			linear-gradient(to bottom, ${gridColor}  ${gridThickness}px, transparent ${alpha}px)`,
		minHeight: `${rowHeight * 10}px`,
	};

	return (
		<GridLayout
			style={styles}
			className='ContentLayout'
			width={width}
			cols={4}
			isDroppable={true}
			isDraggable={true}
			transformScale={1}
		></GridLayout>
	);
};

export default view(Module_layout);
