import { VStack, Stack, Box } from "@chakra-ui/react";
import AlphadropBox from "./AlphadropBox";
import ArticlesList from "./ArticlesList";
import Balances from "./Balances";
import BuyPoolBox from "./BuyPoolBox";
import DGVCPrice from "./DGVCPrice";
import FAQ from "./FAQ";
import LPInfoCard from "./LPInfoCard";
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
          spacing="2rem"
        >
          <Box flex={1} pb="2" maxW="34rem">
            <DGVCPrice />
            <Balances />
            <ArticlesList />
          </Box>
          <Box flex={1} pb="2">
            <BuyPoolBox />
            <Stack
              direction="row"
              pt="2rem"
              alignItems="stretch"
              justifyContent="space-between"
              spacing="2rem"
            >
              <LPInfoCard
                poolName="DGVC:USDC"
                poolPercentage={4.569}
                tvl={340}
                dgvcValue={11}
                lpValue={22}
              />
              <LPInfoCard
                poolName="DGVC:WBTC"
                poolPercentage={3.985}
                tvl={319}
                dgvcValue={33}
                lpValue={44}
              />
            </Stack>
            <FAQ />
          </Box>
        </Stack>
      </Box>
    </VStack>
  );
}

export default MainArea;
