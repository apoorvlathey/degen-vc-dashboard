import { HStack, Text, Spacer, Heading, Box } from "@chakra-ui/react";

function LPInfoCard({
  poolName,
  poolPercentage,
  tvl,
  dgvcValue,
  lpValue,
}: {
  poolName: string;
  poolPercentage: number;
  tvl: number;
  dgvcValue: number;
  lpValue: number;
}) {
  return (
    <Box
      border="1.5px solid white"
      mt={{ base: "1.5rem", lg: "0" }}
      py="1.5rem"
      px="1rem"
      w="100%"
      fontSize="xl"
      rounded="xl"
    >
      <Heading fontSize="lg" pb="1rem">
        {poolName}
      </Heading>
      <HStack letterSpacing="wide">
        <Text fontSize="sm" fontWeight="light">
          Your % of pool
        </Text>
        <Spacer />
        <Text fontSize="sm" fontWeight="light">
          TVL
        </Text>
      </HStack>
      <HStack>
        <Text>{poolPercentage}%</Text>
        <Spacer />
        <Text>{tvl}M</Text>
      </HStack>
      <HStack pt="1rem" letterSpacing="wide">
        <Text fontSize="sm" fontWeight="light">
          DGVC Value
        </Text>
        <Spacer />
        <Text fontSize="sm" fontWeight="light">
          LP Value
        </Text>
      </HStack>
      <HStack>
        <Text>${dgvcValue}</Text>
        <Spacer />
        <Text>${lpValue}</Text>
      </HStack>
    </Box>
  );
}

export default LPInfoCard;
