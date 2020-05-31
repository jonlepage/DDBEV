import { view, store } from '@risingstack/react-easy-state';
import { Store_Windows } from '../../app/Windows.store';
import { DATA_Setting_Slider } from '../Settings/Setting_Slider.store';
import { DATA_Setting_Color } from '../Settings/Setting_Color.store';
import { DATA_Setting_Switch } from '../Settings/Setting_Switch.store';

export const Data_Settings = store({
	slider: '',
	Switch: {},
	Slider: {},
	Select: {},
	ColorMode1: {},
});
/** sa va ici pour 2 raison.
 * les setting son dif par module
 * plus simple a debuger et intelisence
 */
export const SETTING_Mod_Layout = store({
	/** Largeur maximal du layout */
	width: { ...DATA_Setting_Slider },
	/** Nombre de cols du layout */
	cols: {
		...DATA_Setting_Slider,
		min: 2,
		max: 200,
		marks: {
			10: 's',
			24: 'm',
			64: 'l',
			120: 'xl',
		},
		step: 2,
	},
	/** Nombre de cols du layout */
	rowHeight: {
		...DATA_Setting_Slider,
		min: 2,
		max: 200,
		marks: {
			10: 's',
			24: 'm',
			64: 'l',
			120: 'xl',
		},
		step: 2,
	},
	// alpha: { v: 1, t: Data_Settings.Slider }, //DELETEME? Couleur integre alpha ?
	// /** Margin entre les cols */
	// // margin: { x: 0, y: 0 },
	// /** Compacteur automatique des grids */
	// compactType: { v: null, t: Data_Settings.Select },
	// /** Previen les collisions pendant les drags de layouts */
	preventCollision: { ...DATA_Setting_Switch },
	backgroundColor: { ...DATA_Setting_Color },
	gridColor: {
		...DATA_Setting_Color,
	},
	gridThickness: {
		...DATA_Setting_Slider,
		min: 0,
		max: 40,
		marks: {},
		step: 1,
	},
});

/** default data structure Module Layout */

export const DATA_Mod_Layout = store({
	NAME: 'DATA_Mod_Layout',
	UID: '',
	MUID: '',
	childrens: [],
	/** Largeur maximal du layout */
	width: 1200,
	/** Nombre de cols du layout */
	cols: 24,
	/** Nombre de cols du layout */
	rowHeight: 25,
	alpha: 1,
	/** Margin entre les cols */
	// margin: { x: 0, y: 0 },
	/** Compacteur automatique des grids */
	compactType: 'vertical',
	/** Previen les collisions pendant les drags de layouts */
	preventCollision: true,
	/** TODO: voir  la bonne aproche */
	backgroundColor: '#24799e',
	gridColor: '#0000002b',
	gridThickness: 1,
});

export const Store_Mod_Layout = store({
	NAME: 'Store_Mod_Layout',
	/**TODO: FAIRE une method create, inclu setting */
	/** @type {Array.<DATA_Mod_Layout>} */
	DATA: [],
	getData(MUID) {
		return this.DATA.find((data) => data.MUID === MUID);
	},
	/** create un DATA_PageData */
	create(UID, MUID) {
		const data = {
			...DATA_Mod_Layout,
			UID,
			MUID,
		};
		this.DATA.push(data);
		return data;
	},
});
