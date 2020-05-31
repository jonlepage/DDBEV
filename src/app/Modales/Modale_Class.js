/* eslint-disable react/prop-types */
import React from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Modal, Form, Input, Select, Button } from 'antd';
import { TagFilled } from '@ant-design/icons';
import {
	DATA_PageClass,
	Store_PageClass,
} from '../ContentPage/PageClass.store';
import { Store_Modale_Class } from './Modale_Class.store';

const { Option, OptGroup } = Select;

export const Store_ModaleData = store({
	NAME: 'Store_ModaleData',
	/** modele data */
	DATA: {
		_uid: '_r33',
		_name: 'aeffa',
		_pageType: '.cl',
		_settingId: '',
	},
	RULES: {},
});
//TODO: ON PEUT CE PASSER DU PROPS DATA ICI,  importer plutot via module parent Modales.data
const ModaleData = (/**@type {{data: DATA_PageClass}} */ { data }) => {
	const { NAME, TYPE, UID, _id, _descriptions } = data; // immutable, mutable
	return (
		<Modal
			visible={true}
			title={<div>Create new Data type: {TYPE}</div>}
			footer={<p>Data type {TYPE} are a Data type class</p>}
		>
			<div>
				<Form
					// labelCol={{ span: 6 }}
					// wrapperCol={{ span: 14 }}
					layout='horizontal'
					size={'small'}
					onFinish={(e) => Store_Modale_Class.onFinish(e, data)}
				>
					<Form.Item label='UID' name='UID' initialValue={UID}>
						<Input disabled={true} />
					</Form.Item>
					<Form.Item label='NAME' name='NAME' initialValue={NAME}>
						<Input disabled={true} defaultValue={NAME} />
					</Form.Item>
					<Form.Item label='TYPE' name='TYPE' initialValue={TYPE}>
						<Input disabled={true} defaultValue={TYPE} />
					</Form.Item>
					<Form.Item
						label='_id'
						name='_id'
						rules={[
							{ required: true, message: '_id cant be empty!' },
							({ getFieldValue }) => ({
								// check si id existe deja !
								validator(rule, value) {
									if (!Store_PageClass.isExiste_id(value)) {
										return Promise.resolve();
									}
									return Promise.reject('_id alrealy existe');
								},
							}),
						]}
					>
						<Input
							defaultValue={_id}
							size='small'
							placeholder='_id'
							prefix={<TagFilled />}
						/>
					</Form.Item>
					<Form.Item label='_descriptions' name='_descriptions'>
						<Input
							defaultValue={_descriptions}
							size='small'
							placeholder='_descriptions'
							prefix={<TagFilled />}
						/>
					</Form.Item>
					{/* //TODO  map tous les id existant pour utiliser des template*/}
					<Form.Item label='Templates' name='Templates'>
						<Select
							defaultValue='empty'
							style={{ width: 200 }}
							// onChange={handleChange}
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

export default view(ModaleData);
