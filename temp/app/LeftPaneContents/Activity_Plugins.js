import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';

import { Skeleton, Switch, Card, Avatar, Descriptions, Table } from 'antd';
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import { Rate } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
const { Meta } = Card;

class Activity_Plugins extends React.Component {
	state = {
		loading: true,
	};

	onChange = (checked) => {
		this.setState({ loading: !checked });
	};
	componentDidMount() {
		setTimeout(() => {
			this.setState({ loading: false });
		}, 2000);
	}
	render() {
		const { loading } = this.state;

		return (
			<div>
				<Switch checked={!loading} onChange={this.onChange} />

				<Card
					size='small'
					style={{ width: 300, marginTop: 16 }}
					extra={
						<Rate
							style={{
								textAlign: 'right',
								display: 'block',
								mixBlendMode: 'difference',
								color: '#41a986',
							}}
							character={<HeartOutlined />}
							allowHalf
						/>
					}
					actions={[
						<SettingOutlined key='setting' />,
						<EditOutlined key='edit' />,
						<EllipsisOutlined key='ellipsis' />,
					]}
				>
					<Skeleton loading={loading} avatar active>
						<Meta
							avatar={<Avatar src='../../res/img/misc/pixijs.png' />}
							title='PIXI TEMPLATES'
							description='Inject some pixijs template prototype'
						/>
						<Table
							columns={[
								{
									title: 'Autor',
									dataIndex: 'Autor',
								},
								{
									title: 'Version',
									dataIndex: 'Version',
								},
								{
									title: 'Published',
									dataIndex: 'Published',
								},
							]}
							dataSource={[
								{
									key: '1',
									Autor: 'Jonathan.Lepage',
									Version: '1.0',
									Published: '04/22/2020',
								},
							]}
							size='small'
						/>
					</Skeleton>
				</Card>
			</div>
		);
	}
}

export default view(Activity_Plugins);
