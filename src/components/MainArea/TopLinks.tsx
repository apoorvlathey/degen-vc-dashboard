import { Flex, Text, Link, HStack } from "@chakra-ui/react";

function TopLinks() {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Text>Degen VC: Allocate to venture - </Text>
      <HStack fontSize={{ base: "sm", md: "lg" }}>
        <Link href="" isExternal>
          Buy DGVC
        </Link>
        <Text>|</Text>
        <Link href="" isExternal>
          Pool DGVC
        </Link>
        <Text>|</Text>
        <Link href="" isExternal>
          Receive Alphadrops
        </Link>
      </HStack>
    </Flex>
  );
}

export default TopLinks;
