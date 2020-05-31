import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { Slider } from 'antd';
import { DATA_Setting_Slider } from './Setting_Slider.store';

function onChange_width(value) {
	// Settings.width = value;
}
/** Slider allow allow min max  */
const Setting_Slider = (
	/**@type {{skey:string, _setting: DATA_Setting_Slider}} */
	{ skey, data, _setting }
) => {
	//TODO: POUR data, on pourrai creer un mapper de value, permetrai a intelisence de fonctionner
	//TODO: Ont creerait donc un data avec un setValueBySKEY(value) => qui lui feray un data[skey] = value
	const value = data[skey];
	const { min, max, marks, step } = _setting;
	return (
		<div className='Setting_Slider'>
			<h4>{skey}</h4>
			<Slider
				min={min}
				max={max}
				marks={marks}
				step={step}
				tipFormatter={(value) => `${value}px`}
				onChange={(v) => (data[skey] = v)}
				value={value}
			/>
		</div>
	);
};

export default view(Setting_Slider);
