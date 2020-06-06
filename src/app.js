import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import Modales from './app/Modales';
import Header from './app/Header';
import Navigation from './app/Navigation';
import ContentPage from './app/ContentPage';
import { App_store } from './App.store';
import Footer from './app/Footer';
import ActivityBar from './app/ActivityBar';
import Windows from './app/Windows';
import PanelContent from './app/PanelContent';
import ContextMenue from './components/ContextMenue';
// import ActivityBar from './app/ActivityBar';
// import PanelContent from './app/PanelContent';
const App = () => {
	const { _updateResize } = App_store;
	return (
		<>
			<Header />
			<Navigation />
			<ReflexContainer key={_updateResize} orientation='vertical'>
				<ReflexElement minSize={41} maxSize={41}>
					<ActivityBar />
				</ReflexElement>
				<ReflexElement className='left-pane' minSize={1} size={100}>
					<PanelContent />
				</ReflexElement>
				<ReflexSplitter />
				<ReflexElement className='right-pane'>
					<ContentPage />
				</ReflexElement>
			</ReflexContainer>
			<Footer />
			<Modales />
			<Windows />
			<ContextMenue />
		</>
	);
};
export default view(App);
