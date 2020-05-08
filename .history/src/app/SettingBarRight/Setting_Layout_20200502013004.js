import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Slider } from 'antd';
import Store_DataPage, {
	Store_DataBaseStorage,
	Store_Settings,
	Store_layoutSettings,
} from '../../stores/Store_DataPage';
import { SketchPicker } from 'react-color';

const Settings = Store_layoutSettings.getById(); // root seting layout de base
/** creer un context de setting */
function provideSetting(key) {
	switch (key) {
		case 'width':
			return setting_width(key);
			break;

		default:
			<div key={key}></div>;
			break;
	}
}
function setting_width(key) {
	const setting = Settings[key];
	function onChange_width(value) {
		setting.layout.width = value * 50;
	}
	return (
		<div key={key}>
			<h4>Max Layout width</h4>
			<Slider
				onChange={onChange_width}
				tipFormatter={(value) => `${value * 50}px`}
				// marks={marks}
				defaultValue={setting}
			/>
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

	const settingKey = Object.keys(setting);
	return (
		<>
			{settingKey.map((key) => provideSetting(key))}
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
