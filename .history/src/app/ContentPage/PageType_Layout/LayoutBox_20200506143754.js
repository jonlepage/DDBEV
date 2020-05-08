import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';
import {
	Store_DataBaseStorage,
	Store_Settings,
	Store_layoutSettings,
	Store_layouts,
} from '../../../stores/Store_DataPage';
import { Store_app } from '../../../stores/Store_App';
import { Store_Modules } from '../../LeftPaneContents/Activity_Modules';
import { Store_PageOnglets } from '../../NavigatorTop';

export const Store_layouts = store({
	/**@type {DataLayout} le template default fourni quant on build */
	MODELE: {
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
	/**@returns {DataLayout} */
	getById(id) {
		return Store_layouts.data[id];
	},
	/** @return {boolean} check if the current layout is a layout with childrens */
	isLayout(id) {
		return !Store_layouts.data[id].datagrid;
	},
	/** @return {boolean} check if the current layout is a input*/
	isInput(id) {
		return !!Store_layouts.data[id].datagrid;
	},
	/** @return {DataLayout} return les data layout childrens dun layout */
	getChildrens(id) {
		const data = Store_layouts.data;
		return data.childrens.map((childId) => data[childId]);
	},
	/** @return {Array.<DataLayout>} Listes des DataLayout de type ROOT
	 * permet aussi de filter le module activity tree
	 */
	getRoots() {
		return Object.values(Store_layouts.data).filter(
			(dataLayout) => dataLayout.isRoot
		);
	},
	/** obtien la semantique pour un tree (nessesite des vrai children et non des children id) */
	getRootTree() {
		function mapperToAntd(data) {
			return {
				children: [
					...data.children.map((id) => mapperToAntd(Store_treeSheets.data[id])),
				],
			};
		}

		const root = { key: 'Classes', childrens: [] };
		const roots = Object.values(Store_layouts.data).filter(
			(dataLayout) => dataLayout.isRoot
		);
		root.childrens = roots.map((data) => data.id);
		const tree = root.map((dataRoot) => mapperToAntd(dataRoot));
	},
	create() {},
});

const LayoutBox = ({ id, transformScale }) => {
	const { contentId } = Store_PageOnglets.getCurrentSelected(); // on extract le id du content

	const layout = (id) => {
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
		/** affiche conten ou layout */
		const grids = (id) => {
			const { datagrid, level } = Store_layouts.getById(id);
			const isLevelEdit = level === Store_app.levelEditor;
			return (
				<div
					key={id}
					className='ContentGrid'
					data-grid={datagrid}
					style={{ outline: isLevelEdit && '14px solid #1C6EA4' }}
				>
					-id:{id}
					{layout(id)}
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
				{childrens.map((childId) => grids(childId))}
			</GridLayout>
		);
	};
	return <>{layout('fakeData_0')}</>;
};

export default view(LayoutBox);
