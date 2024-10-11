import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FlexColumn, StyledBody, GlobalStyles } from '~styles/global.styles';
import { Header } from '~components/Header/Header';
import { ROUTES } from '~routes';
import { ErrorPage } from '~pages/ErrorPage/ErrorPage';
import { HomePage } from '~pages/HomePage/HomePage';
import { StoryBook } from '~pages/Story/StoryBook';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <StyledBody>
          <FlexColumn>
            <Routes>
              <Route path={ROUTES.STORY_BOOK} element={<StoryBook />} />
              <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
              <Route path="/error*" element={<ErrorPage />} />
            </Routes>
          </FlexColumn>
        </StyledBody>
      </BrowserRouter>
    </Provider>,
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  );
}
