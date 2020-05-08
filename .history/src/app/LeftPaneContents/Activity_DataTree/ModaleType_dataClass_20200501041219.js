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
							<Option value=''>empty</Option>
							<OptGroup label='Manager'>
								<Option value='Charactere'>Charactere</Option>
								<Option value='Lucy'>Item</Option>
							</OptGroup>
							<OptGroup label='Plugins'>
								<OptGroup label='RPG'>
									<Option value='tRPG_item'>RPG Items</Option>
									<Option value='tRPG_chara'>RPG Charactere</Option>
									<Option value='tRPG_monster'>RPG Monster</Option>
								</OptGroup>
								<OptGroup label='Action'>
									<Option value='tAction_item'>Action Items</Option>
									<Option value='tAction_chara'>Action Charactere</Option>
									<Option value='tAction_monster'>Action Monster</Option>
								</OptGroup>
							</OptGroup>
						</Select>
					</Form.Item>
				</Form>
			</div>
		</Modal>
	);
};

export default view(ModaleType_dataClass);
