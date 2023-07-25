import Router from './shared/Router';
import GlobalStyle from './assets/css/GlobalStyle';
import Fonts from '../src/assets/fonts/Fonts';

function App() {
  // 파일 관리를 위해 Router 폴더를 만들어준다. -> src/shared/Router/js
  return (
    <>
      {/* global style 추가 */}
      <GlobalStyle />
      <Fonts />
      <Router />;
    </>
  );
}

export default App;
