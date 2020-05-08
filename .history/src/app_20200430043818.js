import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import 'react-reflex/styles.css';
import OsNav from './app/OsNav';
import ActivityBarLeft from './app/ActivityBarLeft';
import SettingBarRight from './app/SettingBarRight';
import Footer from './app/Footer';
import LeftPaneContents from './app/LeftPaneContents';

const p = 1;
const m = 1;
function App() {
	//const CLASS = useStyles();
	return (
		<>
			<OsNav />
			{/* <NavigatorTop /> */}

			<ReflexContainer orientation='vertical'>
				<ReflexElement style={{ width: '49px', flex: 'none' }} size={40}>
					<ActivityBarLeft />
				</ReflexElement>
				<ReflexElement className='left-pane' minSize={40} size={40}>
					{/* <LeftPaneContents /> */}
				</ReflexElement>
				<ReflexSplitter propagate={true} />
				<ReflexElement className='middle-pane' minSize={200}>
					<ReflexContainer orientation='horizontal'>
						<ReflexElement size={20}>{/* <PageTopTool /> */}</ReflexElement>
						<ReflexSplitter />
						<ReflexElement>{/* <ContentPage /> */}</ReflexElement>
					</ReflexContainer>
				</ReflexElement>

				<ReflexSplitter propagate={true} />
				<ReflexElement className='right-pane' size={80} minSize={10}>
					{/* <SettingBarRight /> */}
				</ReflexElement>
			</ReflexContainer>
			<Footer />
		</>
	);
}
export default view(App);
