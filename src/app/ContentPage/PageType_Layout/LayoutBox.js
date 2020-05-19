import React from 'react';
import { Box, Tooltip } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';
import {
	Store_DataBaseStorage,
	Store_Settings,
} from '../../../../temp/Store_DataPage';
import { Store_App } from '../../../../temp/Store_App';
import { Store_Modules } from '../../LeftPaneContents/Activity_Modules';
import { Store_PageOnglets } from '../../NavigatorTop';
import Inputs_tag, {
	Store_Inputs_tag,
} from '../../LeftPaneContents/Activity_Modules/Inputs_tag';
import { Store_layoutSettings } from '../../SettingBarRight/Setting_Layout';

/**
 * @typedef {Object} DataLayout - Data for build GridLayout
 * @property {boolean} DataLayout.isRoot - Indicateur de root, Layout de base
 * @property {string} DataLayout.parentId - Le parent
 * @property {number} DataLayout.level - Le level ou ce trouve le layout
 * @property {string} DataLayout.id - ID du setting connecter au layout
 * @property {string} DataLayout.key - Keys qui permet de defenir une hyarchi en mode tree: "id-id-id"
 * @property {string} DataLayout.settingID - ID du setting connecter au layout
 * @property {{x: number, y: number, w: number, h: number,maxW:number,maxH:number}} DataLayout.datagrid - dataGrid pour la position et largeur du grid
 * @property {string} DataLayout.inputType - Si ces un input? rempalce layout
 * @property {Array.<string>} DataLayout.childrens - IDs unique des childs layouts
 *
 */

/** TODO: creer un data pour la page Validator  */
export const Store_Validator = store({});
/** TODO: creer un data pour la page Sheet  */
export const Store_Sheets = store({});
/** creer un data pour la page Class */
export const Store_Class = store({
	MODELE: {
		/** Id de la classes*/
		id: '',
		layoutId: '',
	},
	data: {},
	/** */
	create(id) {
		const newData = { ...this.MODELE, id };
		this.data[id] = newData;
		Store_layouts.create(id);
	},
});

function onMouseEnter(e, id) {
	e.stopPropagation();
	Store_layouts._focused = id;
}
function onMouseLeave(e, id) {
	console.log('onMouseLeave: ', id);
	// e.stopPropagation();
	Store_layouts._focused = '';
}
function onClick(e, id, datagrid) {
	Store_layouts._selected = id;
	e.stopPropagation();
}

const LayoutBox = () => {
	const { id } = Store_PageOnglets.getCurrentSelected(); // on extract le id (root) de la page afficher

	/** La grid qui entoure le content:
	 * peut etre un content: layout
	 * peut etre un content: input
	 */
	const grids = (_id) => {
		const { datagrid, level, inputType } = Store_layouts.getById(_id);
		const isLevelEdit = level === Store_app.levelEditor;
		const isFocused = Store_layouts.isFocused(_id);
		const isSelected = Store_layouts.isSelected(_id);

		return (
			<div key={_id} id={_id + 'master'}>
				<div
					id={_id}
					// key={_id}
					className='ContentGrid'
					// data-grid={!isSelected ? datagrid : void 0}
					style={isSelected ? { outline: '3px dashed #ffffff' } : {}}
					onMouseOver={(e) => onMouseEnter(e, _id)}
					// onMouseLeave={(e) => onMouseLeave(e, id)}
					onClick={(e) => {
						onClick(e, _id);
					}}
				>
					{isFocused && <div className='GridContentId'>#id:{_id}</div>}

					<div
						className='GridContentFlow'
						style={{ overflow: isSelected ? 'auto' : 'hidden' }}
					>
						{inputType ? input(_id, inputType) : layout(_id)}
					</div>
				</div>
			</div>
		);
	};
	/** Si la grid content Input*/
	function input(id, inputType) {
		return Store_Modules.getInputView(inputType, id);
	}
	/** TODO: RENDI ICI:
	 * si grid est un type group, maper tous les elements dans le groups
	 */
	/** Si la grid content Layout*/
	const layout = (_id) => {
		const {
			width,
			cols,
			rowHeight,
			backgroundColor,
			gridColor,
			gridThickness,
			margin,
		} = Store_layoutSettings.getById(_id);
		const { childrens, level, inputType } = Store_layouts.getById(_id);
		const alpha = level < Store_app.levelEditor ? 0 : 1;
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
					minHeight: `${rowHeight * 10}px`,
				}}
				className='ContentLayout'
				key={_id}
				width={width}
				cols={cols}
				margin={[margin.x, margin.y]}
				rowHeight={rowHeight}
				// maxRows={3} permet de limiter le height
				compactType={null}
				preventCollision={true}
				// isDraggable={level === Store_app.levelEditor}
				isDroppable={!!Store_Modules.dropData}
				useCSSTransforms={true}
				transformScale={1}
				// layout={[{ i: 'testing', x: 0, y: 4, w: 1, h: 2 }]}
				onDrop={({ x, y, e }) => {
					const __id = `String_${Date.now()}`;
					const inputType = Store_Modules.dropData;
					Store_layouts.create(__id, inputType, '', x, y);
					Store_layouts.connectData(_id, __id);
				}}
			>
				{/* {childrens.map((childId) => grids(childId))} */}
				{/* {Store_Inputs_tag.getView('testing')} */}

				<div key={id} data-grid={{ x: 0, y: 4, w: 1, h: 2 }}>
					ss
				</div>
			</GridLayout>
		);
	};
	return <>{layout(id)}</>;
};

export default view(LayoutBox);
