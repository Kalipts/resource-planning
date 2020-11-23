import SchedulePage from "./containers/SchedulePage/";
import { AppProvider } from "./providers";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <SchedulePage></SchedulePage>
    </AppProvider>
  );
}

export default App;
