import { VStack, Stack, Center, Heading, Text, Box } from "@chakra-ui/react";
import AlphadropBox from "./AlphadropBox";
import ArticlesList from "./ArticlesList";
import Balances from "./Balances";
import BuyPoolBox from "./BuyPoolBox";
import DGVCPrice from "./DGVCPrice";
import TopLinks from "./TopLinks";

function MainArea() {
  return (
    <VStack
      w="100%"
      minH="100vh"
      py="2rem"
      px="4rem"
      bgGradient="linear(to-r, #005C97, #363795)"
      color="white"
      align="flex-start"
    >
      <TopLinks />
      <AlphadropBox />
      <Box pt="2rem" w="100%">
        <Stack
          direction="row"
          alignItems="stretch"
          justifyContent="space-between"
          spacing="4rem"
        >
          <Box flex={1} pb="2" maxW="30rem">
            <DGVCPrice />
            <Balances />
            <ArticlesList />
          </Box>
          <Box flex={1} pb="2">
            <BuyPoolBox />
          </Box>
        </Stack>
      </Box>
    </VStack>
  );
}

export default MainArea;
