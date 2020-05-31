import React from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Modal, Form, Input, Select, Button } from 'antd';
import { TagFilled } from '@ant-design/icons';
import { UTILITY, Store_Global, DATA_Global } from '../../stores/Store_Global';
import { Store_Modales } from '../Modales';
import { Store_NavPages } from '../Navigation/NavPages';

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

const ModaleData = () => {
	const { rootUID, uid, _ContentPage } = Store_Modales.data;
	function onFinish(data) {
		const newData = { ...Store_Modales.data, ...data };
		Store_Global.add(newData);
		Store_NavPages.open(rootUID);
		Store_Modales.data = null;
	}
	return (
		<Modal
			visible={true}
			title={<div>Create new Data type: {_ContentPage}</div>}
			footer={<p>{rootUID}</p>}
		>
			<div>
				<Form
					// labelCol={{ span: 6 }}
					// wrapperCol={{ span: 14 }}
					layout='horizontal'
					size={'small'}
					onFinish={onFinish}
				>
					<Form.Item label='rootUID'>
						<Input disabled={true} defaultValue={rootUID} />
					</Form.Item>
					<Form.Item
						label='uid'
						name='uid'
						rules={[
							{ required: true, message: 'Id cant be empty!' },
							({ getFieldValue }) => ({
								// check si id existe deja !
								validator(rule, value) {
									if (!Store_Global.isExist(value)) {
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
