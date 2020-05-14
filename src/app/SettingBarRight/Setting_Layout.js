import React, { useState } from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Slider, Radio, Tooltip } from 'antd';
import Store_DataPage, {
	Store_DataBaseStorage,
	Store_Settings,
} from '../../stores/Store_DataPage';
import { SketchPicker } from 'react-color';
import { Store_PageOnglets } from '../NavigatorTop';

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
		gridColor: '#ff1453',
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
function setting_backgroundColor(key) {
	const Settings = Store_layoutSettings.getById(); // root seting layout de base, passer en pros ?
	const value = Settings[key];
	function onChange_backgroundColor(color) {
		// + Math.round(color.rgb.a * 255).toString(16);
		let colorStr = color.hex;
		if (color.rgb.a !== 1) {
			colorStr = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		}
		Settings.backgroundColor = colorStr;
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
					<h4>Background colors {value}</h4>
				</div>
			</Tooltip>
		</div>
	);
}
/** configurations dun layout active */
const Setting_Layout = ({ id }) => {
	// const dataLayout = Store_DataBaseStorage.getFromId(
	// 	Store_DataBaseStorage.currentSelected
	// );
	// const setting = Store_Settings.getFromId(dataLayout.settingId);
	// const backgroundColor = setting.css.backgroundColor;
	// const gridColor = setting.css.gridColor;

	// function onChange_width(value) {
	// 	setting.layout.width = value * 50;
	// }
	// function onChange_cols(value) {
	// 	setting.layout.cols = value * 2;
	// }
	// function onChange_rowHeight(value) {
	// 	setting.layout.rowHeight = value * 2;
	// }
	// function onChange_gridThickness(value) {
	// 	setting.css.gridThickness = `${value}px`;
	// }
	// function onChange_backgroundColor(color) {
	// 	// + Math.round(color.rgb.a * 255).toString(16);
	// 	let colorStr = color.hex;
	// 	if (color.rgb.a !== 1) {
	// 		colorStr = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
	// 	}
	// 	setting.css.backgroundColor = colorStr;
	// }
	// function onChange_gridColor(color) {
	// 	// + Math.round(color.rgb.a * 255).toString(16);
	// 	let colorStr = color.hex;
	// 	if (color.rgb.a !== 1) {
	// 		colorStr = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
	// 	}
	// 	setting.css.gridColor = colorStr;
	// }

	const SettingsKeys = Object.keys(Store_layoutSettings.getById(id));
	return (
		<>
			{SettingsKeys.map((key) => {
				switch (key) {
					case 'width':
						return setting_width(id, key);
						break;
					case 'cols':
						return setting_cols(id, key);
						break;
					case 'margin':
						// return setting_margin(key);
						break;
					case 'compactType':
						return setting_compactType(id, key);
						break;
					case 'backgroundColor':
						// return setting_backgroundColor(key);
						break;
					default:
						<div key={key}> unknow seting module</div>;
						break;
				}
			})}
			{/* <h3>Selected: {Store_DataBaseStorage.currentSelected}</h3>
			<h4>Max Layout width</h4>
			<Slider
				onChange={onChange_width}
				tipFormatter={(value) => `${value * 50}px`}
				// marks={marks}
				defaultValue={50}
			/>
			<h4>Cols max</h4>
			<Slider
				onChange={onChange_cols}
				tipFormatter={(value) => `${value * 2}`}
				// marks={marks}
				defaultValue={6}
			/>
			<h4>rowHeight</h4>
			<Slider
				onChange={onChange_rowHeight}
				tipFormatter={(value) => `${value * 2}px`}
				// marks={marks}
				defaultValue={50}
			/>
			<h4>gridThickness</h4>
			<Slider
				onChange={onChange_gridThickness}
				tipFormatter={(value) => `${value * 1}px`}
				// marks={marks}
				defaultValue={1}
			/>
			<h4>Background Color</h4>
			<SketchPicker
				color={backgroundColor}
				onChange={onChange_backgroundColor}
			/>
			<h4>grid Color</h4>
			<SketchPicker color={gridColor} onChange={onChange_gridColor} /> */}
		</>
	);
};

export default view(Setting_Layout);
