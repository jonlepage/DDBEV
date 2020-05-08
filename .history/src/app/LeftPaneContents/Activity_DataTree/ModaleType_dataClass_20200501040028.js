import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import {
	Switch,
	InputNumber,
	Input,
	Form,
	Radio,
	Select,
	Modal,
	Button,
} from 'antd';
import { TagFilled } from '@ant-design/icons';

const { Option } = Select;
/** contenue des modale */
const ModaleType_dataClass = () => {
	return (
		<Modal
			title={
				<div>
					Create Data Modele Classes
					<p>DataClasses are a modele sheets to share in your dataBases</p>
				</div>
			}
			visible={true}
			footer={[
				<Button key='back'>cancel</Button>,
				<Button key='submit' type='primary'>
					create
				</Button>,
			]}
		>
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
					<Form.Item label='Id'>
						<Input
							size='small'
							placeholder='small size'
							prefix={<TagFilled />}
						/>
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
		</Modal>
	);
};

export default view(ModaleType_dataClass);
