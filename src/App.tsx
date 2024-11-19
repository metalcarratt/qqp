import './App.css'
import { PlayScreen } from './pages/play/play-screen';
import { ObjectProvider } from './pages/play/use-objects';
import { TitleScreen } from './pages/title/title-screen';
import { Page, useNav } from './pages/use-nav';

function App() {

  const {page, goToPage} = useNav();

  const getPage = () => {
    switch (page) {
    case Page.TitleScreen:
      return <TitleScreen goToPage={goToPage} />
    case Page.PlayScreen:
      return <PlayScreen />
  }
}

  return (
    <ObjectProvider>
      {getPage()}
    </ObjectProvider>
  )
}

export default App
