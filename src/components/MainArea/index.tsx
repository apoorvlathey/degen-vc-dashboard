import { VStack, Stack, Center, Heading, Text, Box } from "@chakra-ui/react";
import AlphadropBox from "./AlphadropBox";
import ArticlesList from "./ArticlesList";
import Balances from "./Balances";
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
          <Box flex={1} pb="2" border="1.5px solid white" rounded="1rem">
            <Center pt={10} px={6}>
              <VStack spacing={8}>
                <Heading as="h2" fontWeight="semibold">
                  Heading
                </Heading>
                <Text whiteSpace="pre-wrap" textAlign="center">
                  desc
                </Text>
              </VStack>
            </Center>
          </Box>
        </Stack>
      </Box>
    </VStack>
  );
}

export default MainArea;
