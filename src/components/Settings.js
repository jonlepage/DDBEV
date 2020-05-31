import React from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Slider, Radio, Tooltip } from 'antd';
import { SketchPicker } from 'react-color';
import { Store_Windows } from '../app/Windows.store';
import { DATA_Setting_Slider } from './Settings/Setting_Slider.store';
import Setting_Slider from './Settings/Setting_Slider';
import { DATA_Setting_Color } from './Settings/Setting_Color.store';
import Setting_Color from './Settings/Setting_Color';
import { DATA_Setting_Switch } from './Settings/Setting_Switch.store';
import Setting_Switch from './Settings/Setting_Switch';

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
		rowHeight: 25,
		/** Margin entre les cols */
		margin: { x: 0, y: 0 },
		/** Compacteur automatique des grids */
		compactType: null,
		/** Previen les collisions pendant les drags de layouts */
		preventCollision: true,
		/** TODO: voir  la bonne aproche */
		backgroundColor: '#24799e',
		gridColor: '#0000002b',
		gridThickness: 1,
	},
	/** les template sauvegarder qui peuvent etre partager */
	template: {},
	/** les setting layout par id */
	data: {},
	/**@returns {LayoutSettings} */
	getById(id) {
		return this.data[id] || { ...this.MODELE };
	},
	/** Create setting id, clone default ou id existant, ref:pas de clone, mais referance direct mutable,  */
	create(id, cloneId, ref) {
		//Todo: ref direct mutable (sans destructure)
		const newData = { ...this.MODELE, id };
		this.data[id] = newData;
	},
	isExiste(id) {
		return !!this.data[id];
	},
});

function setting_width(id, key) {
	const Settings = Store_layoutSettings.getById(id); // root seting layout de base, passer en pros ?
	const value = Settings[key];
	function onChange_width(value) {
		Settings.width = value;
	}
	return (
		<div key={key}>
			<h4>Max width</h4>
			<Slider
				min={250}
				max={5000}
				marks={{
					250: 's',
					1200: 'm',
					3000: 'l',
					5000: 'xl',
				}}
				step={250}
				tipFormatter={(value) => `${value}px`}
				onChange={onChange_width}
				value={value}
			/>
		</div>
	);
}
function setting_margin(key) {
	const Settings = Store_layoutSettings.getById(); // root seting layout de base, passer en pros ?
	const value = Settings[key].x;
	function onChange_width(value) {
		Settings.margin.x = value;
	}
	return (
		<div key={key}>
			<h4>Colums grids</h4>
			<Slider
				min={0}
				max={36}
				marks={{
					0: 'none',
					2: 's',
					10: 'm',
					24: 'l',
					36: 'xl',
				}}
				step={2}
				tipFormatter={(value) => `${value}px`}
				onChange={onChange_width}
				value={value}
			/>
		</div>
	);
}
function setting_cols(id, key) {
	const Settings = Store_layoutSettings.getById(id); // root seting layout de base, passer en pros ?
	const value = Settings[key];
	function onChange_width(value) {
		Settings.cols = value;
	}
	return (
		<div key={key}>
			<h4>Colums grids</h4>
			<Slider
				min={2}
				max={100}
				marks={{
					2: 's',
					24: 'm',
					64: 'l',
					100: 'xl',
				}}
				step={4}
				tipFormatter={(value) => `col:${value}`}
				onChange={onChange_width}
				value={value}
			/>
		</div>
	);
}
function setting_compactType(id, key) {
	const Settings = Store_layoutSettings.getById(id); // root seting layout de base, passer en pros ?
	const options = [
		{ label: 'null', value: 'null' },
		{ label: 'vertical', value: 'vertical' },
		{ label: 'horizontal', value: 'horizontal' },
	];
	const value = Settings[key];
	function onChange_compactType(value) {
		Settings.compactType = value;
	}
	return (
		<div key={key}>
			<h4>Colums grids</h4>
			<Radio.Group
				options={options}
				onChange={onChange_compactType}
				value={value}
			/>
		</div>
	);
}
function setting_backgroundColor(id, key) {
	const Settings = Store_layoutSettings.getById(id); // root seting layout de base, passer en pros ?
	const value = Settings[key];
	function onChange_backgroundColor(color) {
		// + Math.round(color.rgb.a * 255).toString(16);
		let colorStr = color.hex;
		if (color.rgb.a !== 1) {
			colorStr = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		}
		Settings[key] = colorStr;
	}
	return (
		<div key={key}>
			<Tooltip
				placement='left'
				title={
					<SketchPicker color={value} onChange={onChange_backgroundColor} />
				}
			>
				<div
					style={{
						//todo: css
						backgroundColor: value,
						padding: '4px',
						margin: '4px',
						textAlign: 'center',
					}}
				>
					<h4>
						{key} colors {value}
					</h4>
				</div>
			</Tooltip>
		</div>
	);
}

function getView(NAME, skey, data, _setting) {
	switch (NAME) {
		case DATA_Setting_Slider.NAME:
			return <Setting_Slider skey={skey} data={data} _setting={_setting} />;
		case DATA_Setting_Color.NAME:
			return <Setting_Color skey={skey} data={data} _setting={_setting} />;
		case DATA_Setting_Switch.NAME:
			return <Setting_Switch skey={skey} data={data} _setting={_setting} />;
		default:
			return <div>unknow setting?{skey}</div>;
	}
}

/** Lorsque on fait un open Setting, */
const Settings = ({ UID }) => {
	const { data, setting } = Store_Windows.getData(UID);
	const settings = Object.entries(setting).map(([skey, _setting]) => {
		return <div key={skey}>{getView(_setting.NAME, skey, data, _setting)}</div>;
	});
	return <div>{settings}</div>;
};

export default view(Settings);
