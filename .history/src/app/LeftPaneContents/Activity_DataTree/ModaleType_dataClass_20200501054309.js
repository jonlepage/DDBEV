import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Input, Form, Select, Modal, Button } from 'antd';
import { TagFilled } from '@ant-design/icons';

const { Option, OptGroup } = Select;

function handleChange(value) {
	console.log(`selected ${value}`);
}

/** contenue des modale */
const ModaleType_dataClass = () => {
	const onFinish = (values) => {
		console.log('Success:', values);
	};
	return (
		<Modal
			title={<div>Create Data Modele Classes</div>}
			visible={true}
			footer={<p>DataClasses are a modele sheets to share in your dataBases</p>}
		>
			<div>
				<Form
					labelCol={{ span: 6 }}
					wrapperCol={{ span: 14 }}
					layout='horizontal'
					size={'small'}
					onFinish={onFinish}
				>
					<Form.Item
						label='Id'
						name='username'
						rules={[{ required: true, message: 'Id cant be empty!' }]}
					>
						<Input
							size='small'
							placeholder='small size'
							prefix={<TagFilled />}
						/>
					</Form.Item>
					<Form.Item label='Templates' name='Templates'>
						<Select
							defaultValue='empty'
							style={{ width: 200 }}
							onChange={handleChange}
						>
							<Option value='empty'>empty</Option>
							<OptGroup label='Projets'>
								<Option value='Charactere'>Charactere</Option>
								<Option value='Item'>Item</Option>
							</OptGroup>
							<OptGroup label='Plugins'>
								<Option value='tRPG_item'>RPG Items</Option>
								<Option value='tRPG_chara'>RPG Charactere</Option>
								<Option value='tRPG_monster'>RPG Monster</Option>
								<Option value='tAction_item'>Action Items</Option>
								<Option value='tAction_chara'>Action Charactere</Option>
								<Option value='tAction_monster'>Action Monster</Option>
							</OptGroup>
						</Select>
					</Form.Item>
					<Form.Item>
						<Button type='primary' htmlType='submit'>
							create
						</Button>
					</Form.Item>
				</Form>
			</div>
		</Modal>
	);
};

export default view(ModaleType_dataClass);
