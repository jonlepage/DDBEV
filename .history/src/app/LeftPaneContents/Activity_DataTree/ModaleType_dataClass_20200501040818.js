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

const { Option, OptGroup } = Select;

function handleChange(value) {
	console.log(`selected ${value}`);
}
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
					<Form.Item label='Templates'>
						<Select
							defaultValue='lucy'
							style={{ width: 200 }}
							onChange={handleChange}
						>
							<Option value='*empty'>empty</Option>
							<OptGroup label='Manager'>
								<Option value='jack'>Jack</Option>
								<Option value='lucy'>Lucy</Option>
							</OptGroup>
							<OptGroup label='Engineer'>
								<Option value='Yiminghe'>yiminghe</Option>
							</OptGroup>
						</Select>
					</Form.Item>
				</Form>
			</div>
		</Modal>
	);
};

export default view(ModaleType_dataClass);
