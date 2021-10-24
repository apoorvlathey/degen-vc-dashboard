import { HStack } from "@chakra-ui/react";
import MainArea from "./components/MainArea";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <HStack spacing="0">
      <Sidebar />
      <MainArea />
    </HStack>
  );
}

export default App;
