import { HStack } from "@chakra-ui/react";
import MainArea from "./components/MainArea";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <HStack>
      <Sidebar />
      <MainArea />
    </HStack>
  );
}

export default App;
