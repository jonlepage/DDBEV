/* eslint-disable react/prop-types */
import React from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Modal, Form, Input, Select, Button } from 'antd';
import { TagFilled } from '@ant-design/icons';
import { Store_PageClass } from '../ContentPage/PageClass.store';
import { Store_Modale_Class } from './Modale_Class.store';
import { DATA_PageDataBase } from '../ContentPage/PageDataBase.store';
import { Store_Modale_DataBase } from './Modale_DataBase.store';

const { Option, OptGroup } = Select;

//TODO: ON PEUT CE PASSER DU PROPS DATA ICI,  importer plutot via module parent Modales.data
const Modale_DataBase = (/**@type {{data: DATA_PageDataBase}} */ { data }) => {
	//TODO: RENDU ICI: creer un dataBase, on doi pouvoir choisis la reference dataClass pour le rendu prototypal
	// todo: les dataBase ce composer d'un max de page .. ?

	const { NAME, TYPE, UID, _id, _descriptions } = data; // immutable, mutable
	const datas = Store_Modale_DataBase.extractDataList();
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
					<Form.Item label='Classes' name='Classes'>
						<Select
							mode='multiple'
							style={{ width: '100%' }}
							placeholder='Set prototypal Class hyharchic'
							defaultValue={[]}
							onChange={() => {}}
							optionLabelProp='label'
						>
							{datas.map((_data, i) => {
								const { UID, _id } = _data;
								return (
									<Option key={_id} value={_id} label={_id}>
										<div className='demo-option-label-item'>
											<span role='img' aria-label={_id}>
												{_id}
											</span>
										</div>
									</Option>
								);
							})}
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

export default view(Modale_DataBase);
