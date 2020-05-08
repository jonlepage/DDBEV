import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';
import {
	Store_DataBaseStorage,
	Store_Settings,
} from '../../stores/Store_DataPage';

const layout = (id) => {
	const Store_layouts = store({
		/**@type {DataLayout} le template default fourni quant on build */
		default: {
			/** Indicateur de root, Layout de base */
			isRoot: false,
			/** Le level ou ce trouve le layout */
			level: 0,
			/** id unique du layout, peut utiliser dans key car unique */
			id: '',
			/** key permet de defenir une hyarchi en mode tree: "id-id-id" */
			key: '',
			/** ID du setting connecter au layout*/
			settingID: '',
			/** dataGrid pour la position et largeur du grid  */
			datagrid: { x: -1, y: -1, w: 2, h: 1, minW: 1, minH: 1 },
			/** ID du input */
			contentId: '',
			/** IDs des childs layouts */
			childrens: [],
		},
	});
	if (id > 0) {
		return (
			<GridLayout
				className='ContentLayout'
				key={id + '_'}
				width={2000}
				cols={3}
				rowHeight={22}
				// maxRows={3} permet de limiter le height
				compactType={null}
				preventCollision={true}
			>
				<div className='ContentGrid' key={id + '__'}>
					-content
					{/* {layout(--id)} */}
				</div>
			</GridLayout>
		);
	}
};

const LayoutBox = ({ id, transformScale }) => {
	return <>{layout(2)}</>;
};

export default view(LayoutBox);
