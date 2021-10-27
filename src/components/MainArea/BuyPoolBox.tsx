import { HStack, VStack, Text, Button, Box, Link } from "@chakra-ui/react";

const Btn = ({ text, href }: { text: string; href: string }) => (
  <Link href={href} isExternal>
    <Button
      as="span"
      w="15rem"
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
      px="4rem"
      fontSize="xl"
      rounded="xl"
      textTransform="uppercase"
      alignItems="flex-start"
      spacing="2.5rem"
    >
      <Box>
        <Text>BUY DGVC</Text>
        <HStack pt="0.5rem" spacing="3rem">
          <Btn text="with USDC" href="" />
          <Btn text="with WBTC" href="" />
        </HStack>
      </Box>
      <Box>
        <Text>Pool DGVC</Text>
        <HStack pt="0.5rem" spacing="3rem">
          <Btn text="DGVC:USDC" href="" />
          <Btn text="DGVC:WBTC" href="" />
        </HStack>
      </Box>
    </VStack>
  );
}

export default BuyPoolBox;
