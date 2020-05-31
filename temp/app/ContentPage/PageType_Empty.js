import React, { useState } from 'react';
import { view } from '@risingstack/react-easy-state';
import {
	Timeline,
	Card,
	Descriptions,
	Row,
	Col,
	Tooltip,
	Avatar,
	Badge,
	Layout,
} from 'antd';
import { Typography } from 'antd';
import {
	SettingOutlined,
	EditOutlined,
	EllipsisOutlined,
} from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const { Text } = Typography;
const PageType_Empty = () => {
	return (
		<>
			<Row>
				<Col span={24}>
					<h1>Welcome to DataBase-Vanilla-GameDev</h1>
				</Col>
			</Row>
			<Row>
				<Col span={12}>
					<Descriptions title='User Info' bordered size='small'>
						<Descriptions.Item label='Status' span={3}>
							<Badge status='processing' text='git:Connected ' />
							<Badge status='processing' text='projet:Connected ' />
							<Badge status='processing' text='plugin:Connected ' />
						</Descriptions.Item>
						<Descriptions.Item label='User'>jonForum</Descriptions.Item>
						<Descriptions.Item label='License'>free</Descriptions.Item>
						<Descriptions.Item label='Tokens'>
							eb8f746-0e47ac8-0314640-979bb94
						</Descriptions.Item>
						<Descriptions.Item label='Platform' span={2}>
							Os type: win32
							<br />
							Os Version: w10.1.0.741
							<br />
							Architecture: x64
						</Descriptions.Item>
						<Descriptions.Item label='Hardwares' span={2}>
							Os type: win32
							<br />
							Os Version: w10.1.0.741
							<br />
							Architecture: x64
						</Descriptions.Item>
					</Descriptions>
					<h3>
						<Text>Current Version</Text>: 1.0b
					</h3>
					<Timeline>
						<Tooltip placement='topLeft' title='New features added'>
							<Timeline.Item color='green'>
								<p>add features core</p>
							</Timeline.Item>
						</Tooltip>
						<Tooltip placement='topLeft' title='Bugs, issues fixed'>
							<Timeline.Item color='red'>
								<p>Fixed bug</p>
								<p>Solve initial network problems 1</p>
								<p>Solve initial network problems 2</p>
								<p>Solve initial network problems 3 2015-09-01</p>
							</Timeline.Item>
						</Tooltip>
						<Tooltip placement='topLeft' title='Security update'>
							<Timeline.Item>
								<p>Technical testing 1</p>
								<p>Technical testing 2</p>
								<p>Technical testing 3 2015-09-01</p>
							</Timeline.Item>
						</Tooltip>
						<Tooltip placement='topLeft' title='Minors updates'>
							<Timeline.Item color='gray'>
								<p>Minor Fix</p>
								<p>Technical testing 2</p>
								<p>Technical testing 3 2015-09-01</p>
								<p>Technical testing 1</p>
								<p>Technical testing 2</p>
							</Timeline.Item>
						</Tooltip>
					</Timeline>
				</Col>
				<Col span={12}>
					<div>
						<Layout>
							<Sider>Sider</Sider>
							<Layout>
								<Header>Header</Header>
								<Content>Content</Content>
								<Footer>Footer</Footer>
							</Layout>
						</Layout>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default view(PageType_Empty);
