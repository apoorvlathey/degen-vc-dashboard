import { Flex, VStack, Text, Button, Box, Link } from "@chakra-ui/react";

const Btn = ({ text, href }: { text: string; href: string }) => (
  <Link href={href} isExternal>
    <Button
      as="span"
      mt={{ base: "1rem", md: "0" }}
      w={{ base: "10rem", md: "15rem" }}
      textTransform="uppercase"
      bgGradient="linear(to-r, #141E30, #243B55)"
      _hover={{
        bgGradient: "linear(to-r, #1e3c72, #2a5298)",
      }}
    >
      {text}
    </Button>
  </Link>
);

function BuyPoolBox() {
  return (
    <VStack
      border="1.5px solid white"
      mt={{ base: "1.5rem", lg: "0" }}
      py="1.5rem"
      px={{ base: "2rem", md: "4rem" }}
      fontSize="xl"
      rounded="xl"
      textTransform="uppercase"
      alignItems={{ base: "center", md: "flex-start" }}
      spacing="2.5rem"
    >
      <Box textAlign="center">
        <Text>BUY DGVC</Text>
        <Flex
          direction={{ base: "column", lg: "row" }}
          pt="0.5rem"
          spacing="3rem"
        >
          <Btn text="with USDC" href="" />
          <Btn text="with WBTC" href="" />
        </Flex>
      </Box>
      <Box textAlign="center">
        <Text>Pool DGVC</Text>
        <Flex
          direction={{ base: "column", lg: "row" }}
          pt="0.5rem"
          spacing="3rem"
        >
          <Btn text="DGVC:USDC" href="" />
          <Btn text="DGVC:WBTC" href="" />
        </Flex>
      </Box>
    </VStack>
  );
}

export default BuyPoolBox;
