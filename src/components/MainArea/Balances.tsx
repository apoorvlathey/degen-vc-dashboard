import { HStack, Text, Spacer, Box, Heading } from "@chakra-ui/react";

const TokenBalance = ({
  tokenName,
  balance,
}: {
  tokenName: string;
  balance: string;
}) => (
  <HStack fontSize="xl" pb="0.5rem">
    <Text textTransform="uppercase">{tokenName}</Text>
    <Spacer />
    <Text>{balance}</Text>
  </HStack>
);

function Balances() {
  return (
    <Box pt="2rem">
      <Box border="1.5px solid white" p="1.5rem" px="2rem" rounded="xl">
        <Heading fontSize="2xl" pb="1rem">
          Balances
        </Heading>
        <TokenBalance tokenName="DGVC" balance="XX" />
        <TokenBalance tokenName="DGVC LP" balance="XX" />
        <TokenBalance tokenName="Matic" balance="XX" />
        <TokenBalance tokenName="Usdc" balance="XX" />
        <TokenBalance tokenName="Wbtc" balance="XX" />
      </Box>
    </Box>
  );
}

export default Balances;
