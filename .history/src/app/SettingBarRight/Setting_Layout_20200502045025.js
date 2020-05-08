import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Slider, Radio, Tooltip } from 'antd';
import Store_DataPage, {
	Store_DataBaseStorage,
	Store_Settings,
	Store_layoutSettings,
} from '../../stores/Store_DataPage';
import { SketchPicker } from 'react-color';

/** creer un context de setting */
function provideSetting(key) {
	switch (key) {
		case 'width':
			return setting_width(key);
			break;
		case 'cols':
			return setting_cols(key);
			break;
		case 'margin':
			return setting_margin(key);
			break;
		case 'compactType':
			return setting_compactType(key);
			break;
		case 'backgroundColor':
			return setting_backgroundColor(key);
			break;
		default:
			<div key={key}> unknow seting module</div>;
			break;
	}
}
function setting_width(key) {
	const Settings = Store_layoutSettings.getById(); // root seting layout de base, passer en pros ?
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
function setting_cols(key) {
	const Settings = Store_layoutSettings.getById(); // root seting layout de base, passer en pros ?
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
function setting_compactType(key) {
	const Settings = Store_layoutSettings.getById(); // root seting layout de base, passer en pros ?
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
				<h4>Background colors</h4>
			</Tooltip>
		</div>
	);
}
/** configurations dun layout active */
const Setting_Layout = () => {
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

	const SettingsKeys = Object.keys(Store_layoutSettings.getById());
	return (
		<>
			{SettingsKeys.map((key) => provideSetting(key))}
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
