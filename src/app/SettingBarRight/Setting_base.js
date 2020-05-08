import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Input, Tooltip, Button } from 'antd';
import {
	InfoCircleOutlined,
	UserOutlined,
	UploadOutlined,
} from '@ant-design/icons';
import { TwitterPicker } from 'react-color';
const { TextArea } = Input;
const onChange = (e) => {
	console.log(e);
};

function Setting_base() {
	return (
		<>
			<Input
				placeholder='Enter sheet name'
				prefix={<UserOutlined className='site-form-item-icon' />}
				suffix={
					<Tooltip title='Extra information'>
						<InfoCircleOutlined style={{ color: 'rgba(255,255,255,.45)' }} />
					</Tooltip>
				}
			/>
			<TextArea
				placeholder='textarea with clear icon'
				allowClear
				onChange={onChange}
			/>

			<TwitterPicker />
			<Button>
				<UploadOutlined /> Upload Icon
			</Button>
		</>
	);
}

export default view(Setting_base);
