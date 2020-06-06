/* eslint-disable react/prop-types */
import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { Select } from 'antd';
import { DATA_Setting_Select } from './Setting_Select.store';
const { Option } = Select;

const Setting_Select = (
	/**@type {{skey:string, _setting: DATA_Setting_Select}} */
	{ skey, data, _setting }
) => {
	//TODO: POUR data, on pourrai creer un mapper de value, permetrai a intelisence de fonctionner
	//TODO: Ont creerait donc un data avec un setValueBySKEY(value) => qui lui feray un data[skey] = value
	const value = data[skey];
	const { options } = _setting;
	return (
		<div className='Setting_Select'>
			<div style={{ paddingRight: 10 }}>{skey}:</div>
			<Select
				defaultValue={value}
				style={{ width: 120 }}
				onChange={(value) => (data[skey] = value)}
			>
				{options.map((value, i) => {
					return (
						<Option key={i} value={value}>
							{value}
						</Option>
					);
				})}
			</Select>
		</div>
	);
};

export default view(Setting_Select);
