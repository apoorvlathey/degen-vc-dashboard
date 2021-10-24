import { HStack, VStack, Text, Button, Box } from "@chakra-ui/react";

const Btn = ({ text }: { text: string }) => (
  <Button
    w="15rem"
    textTransform="uppercase"
    bgGradient="linear(to-r, #141E30, #243B55)"
    _hover={{
      bgGradient: "linear(to-r, #1e3c72, #2a5298)",
    }}
  >
    {text}
  </Button>
);

function BuyPoolBox() {
  return (
    <VStack
      border="1.5px solid white"
      py="2rem"
      px="4rem"
      fontSize="xl"
      rounded="xl"
      textTransform="uppercase"
      alignItems="flex-start"
      spacing="3rem"
    >
      <Box>
        <Text>BUY DGVC</Text>
        <HStack pt="0.5rem" spacing="3rem">
          <Btn text="with USDC" />
          <Btn text="with WBTC" />
        </HStack>
      </Box>
      <Box>
        <Text>Pool DGVC</Text>
        <HStack pt="0.5rem" spacing="3rem">
          <Btn text="DGVC:USDC" />
          <Btn text="DGVC:WBTC" />
        </HStack>
      </Box>
    </VStack>
  );
}

export default BuyPoolBox;
