import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';
import {
	Store_DataBaseStorage,
	Store_Settings,
} from '../../../stores/Store_DataPage';
import { Store_app } from '../../../stores/Store_App';
import { Store_Modules } from '../../LeftPaneContents/Activity_Modules';
import { Store_PageOnglets } from '../../NavigatorTop';
/**
 * @typedef {Object} LayoutSettings - Data Setting layouts
 * @property {number} Setting_layout.width - Largeur maximal du layou
 * @property {number} Setting_layout.cols - Nombre de cols du layout
 * @property {number} Setting_layout.rowHeight - Nombre de cols du layout
 * @property {{ x: number, y: number }} Setting_layout.margin - Margin entre les cols
 * @property {"vertical" | "horizontal"} Setting_layout.compactType - Compacteur automatique des grids
 * @property {boolean} Setting_layout.preventCollision - Previen les collisions pendant les drags de layouts
 * @property {string} Setting_layout.backgroundColor - Previen les collisions pendant les drags de layouts
 * @property {string} Setting_layout.gridColor - Previen les collisions pendant les drags de layouts
 * @property {number} Setting_layout.gridThickness - Previen les collisions pendant les drags de layouts
 */

export const Store_layoutSettings = store({
	/**@type {LayoutSettings} - Default template for layoutSetting */
	MODELE: {
		/** Largeur maximal du layout */
		width: 1000,
		/** Nombre de cols du layout */
		cols: 24,
		/** Nombre de cols du layout */
		rowHeight: 50,
		/** Margin entre les cols */
		margin: { x: 0, y: 0 },
		/** Compacteur automatique des grids */
		compactType: null,
		/** Previen les collisions pendant les drags de layouts */
		preventCollision: true,
		/** TODO: voir  la bonne aproche */
		backgroundColor: '#24799e',
		gridColor: '#ff1453',
		gridThickness: 1,
	},
	/** les template sauvegarder qui peuvent etre partager */
	template: {},
	/** les setting layout par id */
	data: {},
	/**@returns {LayoutSettings} */
	getById(id) {
		return this.data[id];
	},
	/** Create setting id, clone default ou id existant, ref:pas de clone, mais referance direct mutable,  */
	create(id, cloneId, ref) {
		//Todo: ref direct mutable (sans destructure)
		const newData = cloneId
			? { ...this.getById(cloneId), id, cloneId }
			: { ...this.MODELE, id };
		this.data[id] = newData;
	},
	isExiste(id) {
		return !!this.data[id];
	},
});

/**
 * @typedef {Object} DataLayout - Data for build GridLayout
 * @property {boolean} DataLayout.isRoot - Indicateur de root, Layout de base
 * @property {string} DataLayout.parentId - Le parent
 * @property {number} DataLayout.level - Le level ou ce trouve le layout
 * @property {string} DataLayout.id - ID du setting connecter au layout
 * @property {string} DataLayout.key - Keys qui permet de defenir une hyarchi en mode tree: "id-id-id"
 * @property {string} DataLayout.settingID - ID du setting connecter au layout
 * @property {{x: number, y: number, w: number, h: number,maxW:number,maxH:number}} DataLayout.datagrid - dataGrid pour la position et largeur du grid
 * @property {string} DataLayout.contentId - ID du setting connecter au layout
 * @property {Array.<string>} DataLayout.childrens - IDs unique des childs layouts
 *
 */
/** Store Des data layouts
 * Permet la constructions des layouts des pages CLASS
 */
export const Store_layouts = store({
	/**@type {DataLayout} le template default fourni quant on build */
	MODELE: {
		parentId: '',
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
		datagrid: { x: 1, y: 1, w: 2, h: 1, minW: 1, minH: 1 },
		/** ID du input */
		contentId: '',
		/** IDs des childs layouts */
		childrens: [],
	},
	/** les template layout sauvegarder qui peuvent etre partager */
	template: {},
	/** @type {Object.<string, DataLayout>}*/
	data: {},
	isExiste(id) {
		return !!this.data[id];
	},
	create(id, settingId) {
		const newData = { ...this.MODELE, id, settingId };
		//todo: si pas de setting id, cloner default, sinon cloner le id relatif
		!Store_layoutSettings.isExiste(settingId) &&
			Store_layoutSettings.create(id);
		this.data[id] = newData;
	},
	getById(id) {
		return this.data[id];
	},
});
export const Store_Class = store({
	MODELE: {
		/** Id de la classes*/
		id: '',
		layoutRootId: '',
	},
});

function onClick() {}

const LayoutBox = () => {
	const { id } = Store_PageOnglets.getCurrentSelected(); // on extract le id (root) de la page afficher
	const create = (id) => {
		const {
			width,
			cols,
			rowHeight,
			backgroundColor,
			gridColor,
			gridThickness,
			margin,
		} = Store_layoutSettings.getById(id);
		const { childrens, level } = Store_layouts.getById(id);
		const alpha = level < Store_app.levelEditor ? 0 : 1;
		const grids = (id) => {
			const { datagrid, level } = Store_layouts.getById(id);
			const isLevelEdit = level === Store_app.levelEditor;
			return (
				<div
					key={id}
					className='ContentGrid'
					data-grid={datagrid}
					style={{ outline: isLevelEdit && '14px solid #1C6EA4' }}
					onClick={(e) => onClick()}
				>
					-id:{id}
					{create(id)}
				</div>
			);
		};
		return (
			<GridLayout
				style={{
					// backgroundPositionX: margin.x,
					width: width,
					backgroundSize: `${width / cols}px ${rowHeight}px`,
					backgroundColor: backgroundColor,
					backgroundImage: `linear-gradient(to right, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
						linear-gradient(to left, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
						linear-gradient(to top, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
						linear-gradient(to bottom, ${gridColor}  ${gridThickness}px, transparent ${alpha}px)`,
					minHeight: `${rowHeight}px`,
				}}
				className='ContentLayout'
				key={id}
				width={width}
				cols={cols}
				margin={[margin.x, margin.y]}
				rowHeight={rowHeight}
				// maxRows={3} permet de limiter le height
				compactType={null}
				preventCollision={true}
				isDraggable={level === Store_app.levelEditor}
				isDroppable={!!Store_Modules.dropId}
				useCSSTransforms={true}
				transformScale={1}
				onDrop={({ x, y, e }) => {
					console.log('x,y,e: ', x, y, e);
				}}
			>
				{/* {childrens.map((childId) => grids(childId))} */}
			</GridLayout>
		);
	};
	return <>{create(id)}</>;
};

export default view(LayoutBox);
