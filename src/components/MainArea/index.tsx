import { VStack, Box, Flex } from "@chakra-ui/react";
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
      py="2rem"
      px={{ base: "1rem", md: "4rem" }}
      bgGradient="linear(to-r, #005C97, #363795)"
      color="white"
      align="flex-start"
    >
      <TopLinks />
      <AlphadropBox />
      <Box pt={{ base: "1rem", md: "2rem" }} w="100%">
        <Flex
          direction={{ base: "column", lg: "row" }}
          alignItems="stretch"
          justifyContent="space-between"
          spacing="2rem"
        >
          <Box
            mr={{ base: "0", lg: "2rem" }}
            pb={{ base: "1", md: "2" }}
            w="100%"
          >
            <DGVCPrice />
            <Balances />
          </Box>
          <Box pb="2">
            <BuyPoolBox />
            <Flex
              direction={{ base: "column", lg: "row" }}
              pt={{ base: "0", lg: "2rem" }}
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
                mr={{ base: "0", lg: "1rem" }}
              />
              <LPInfoCard
                poolName="DGVC:WBTC"
                poolPercentage={3.985}
                tvl={319}
                dgvcValue={33}
                lpValue={44}
              />
            </Flex>
          </Box>
        </Flex>
        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent="space-between"
        >
          <ArticlesList />
          <FAQ />
        </Flex>
      </Box>
    </VStack>
  );
}

export default MainArea;
