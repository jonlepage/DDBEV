import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import {
	Tree,
	Switch,
	Modal,
	Button,
	InputNumber,
	Input,
	Form,
	Radio,
	Select,
	TreeSelect,
	Cascader,
	Divider,
	Collapse,
} from 'antd';
import {
	CarryOutOutlined,
	FormOutlined,
	FolderOutlined,
	FolderViewOutlined,
	FilePdfOutlined,
	FileOutlined,
	FolderFilled,
	LinkOutlined,
	SettingFilled,
	CodeFilled,
	FolderAddFilled,
	DropboxOutlined,
	FileAddFilled,
	TagFilled,
} from '@ant-design/icons';

const { Option } = Select;
/** contenue des modale */
const ModaleContents = () => {
	return (
		<div>
			<Form
				labelCol={{
					span: 6,
				}}
				wrapperCol={{
					span: 14,
				}}
				layout='horizontal'
				size={'small'}
			>
				<Form.Item label='Index Type' name='size'>
					<Radio.Group>
						<Radio.Button value='Number'>Small</Radio.Button>
						<Radio.Button value='String'>Middle</Radio.Button>
						<Radio.Button value='Regex'>Large</Radio.Button>
					</Radio.Group>
				</Form.Item>
				<Form.Item label='ID'>
					<Input size='small' placeholder='small size' prefix={<TagFilled />} />
				</Form.Item>
				<Form.Item label='Index'>
					<InputNumber min={1} max={10000} defaultValue={100} />
				</Form.Item>
				<Form.Item label='Auto-Fill-Default-Value'>
					<Switch />
				</Form.Item>
				<Form.Item label='Hyarchy Class'>
					<Select
						mode='multiple'
						style={{ width: '100%' }}
						placeholder='select one country'
						optionLabelProp='label'
					>
						<Option value='Charactere' label='Charactere'>
							<div className='demo-option-label-item'>
								<span role='img' aria-label='Charactere'>
									class.
								</span>
								Charactere
							</div>
						</Option>
						<Option value='Battler' label='Battler'>
							<div className='demo-option-label-item'>
								<span role='img' aria-label='Battler'>
									extend.
								</span>
								Battler
							</div>
						</Option>
					</Select>
				</Form.Item>
			</Form>
		</div>
	);
};

export default view(ModaleContents);
