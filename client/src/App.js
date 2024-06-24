

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

import DataProvider from "./context/DataProvider";

import { Box } from "@mui/material"

function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: 55 }}>
        <Home />
      </Box>


    </DataProvider>
  );
}

export default App;
