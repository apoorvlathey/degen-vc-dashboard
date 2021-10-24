import { VStack, HStack, Text, Link } from "@chakra-ui/react";
import AlphadropBox from "./AlphadropBox";
import TopLinks from "./TopLinks";

function MainArea() {
  return (
    <VStack
      w="100%"
      h="100vh"
      py="2rem"
      px="4rem"
      bgGradient="linear(to-r, #005C97, #363795)"
      color="white"
      align="flex-start"
    >
      <TopLinks />
      <AlphadropBox />
    </VStack>
  );
}

export default MainArea;
