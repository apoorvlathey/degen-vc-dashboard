import { HStack, VStack, Text, Button } from "@chakra-ui/react";

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
      py="3rem"
      px="5rem"
      fontSize="xl"
      rounded="xl"
      textTransform="uppercase"
      alignItems="flex-start"
    >
      <Text>BUY DGVC</Text>
      <HStack>
        <Btn text="with USDC" />
        <Btn text="with WBTC" />
      </HStack>
      <Text>Pool DGVC</Text>
      <HStack>
        <Btn text="DGVC:USDC" />
        <Btn text="DGVC:WBTC" />
      </HStack>
    </VStack>
  );
}

export default BuyPoolBox;
