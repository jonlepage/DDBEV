import React, { useState } from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Input, Form, Select, Modal, Button } from 'antd';
import { TagFilled } from '@ant-design/icons';
import { Store_layouts } from '../ContentPage/PageType_Layout/LayoutBox';
import { Store_PageOnglets } from '../NavigatorTop';
import { Store_Modales } from '../Modales';
import { Store_treeSheets } from '../../stores/Store_TreeData';

const { Option, OptGroup } = Select;

function handleChange(value) {
	console.log(`selected ${value}`);
}
/** Si form succes to finish: Build data with value */
function onFinish(data) {
	//todo setting id, template ...
	Store_layouts.create(data.id, data.settingId);
	Store_PageOnglets.create(data.id);
	Store_Modales.setVisibility(false);
}
/** contenue dun modal pour build un dataClass */
const ModaleType_dataClass = () => {
	return (
		<Modal
			title={<div>Create data type CLASSES</div>}
			visible={true}
			footer={
				<p>
					DataClasses are a modele sheets to share in your dataBases. DataClass
					should unique handle a unique id.
				</p>
			}
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
						label='id'
						name='id'
						rules={[
							{ required: true, message: 'Id cant be empty!' },
							({ getFieldValue }) => ({
								// check si id existe deja !
								validator(rule, value) {
									if (!Store_layouts.isExiste(value)) {
										return Promise.resolve();
									}
									return Promise.reject('ID alrealy existe');
								},
							}),
						]}
					>
						<Input
							size='small'
							placeholder='small size'
							prefix={<TagFilled />}
						/>
					</Form.Item>
					{/* //TODO  map tous les id existant pour utiliser des template*/}
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
