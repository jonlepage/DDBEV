import React, { useState } from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Switch } from 'antd';
import { DATA_Setting_Switch } from './Setting_Switch.store';

const Setting_Switch = (
	/**@type {{skey:string, _setting: DATA_Setting_Switch}} */
	{ skey, data, _setting }
) => {
	//TODO: POUR data, on pourrai creer un mapper de value, permetrai a intelisence de fonctionner
	//TODO: Ont creerait donc un data avec un setValueBySKEY(value) => qui lui feray un data[skey] = value
	const value = data[skey];
	const { NAME } = _setting;
	return (
		<div className='Setting_Switch'>
			<div style={{ paddingRight: 10 }}>{skey}:</div>
			<Switch
				checkedChildren='true'
				unCheckedChildren='false'
				defaultChecked
				onChange={(value) => (data[skey] = value)}
			/>
		</div>
	);
};

export default view(Setting_Switch);
