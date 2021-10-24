import { HStack, Text, Spacer } from "@chakra-ui/react";

function DGVCPrice() {
  return (
    <HStack
      border="1.5px solid white"
      py="4rem"
      px="5rem"
      fontSize="2xl"
      rounded="xl"
    >
      <Text>$DGVC</Text>
      <Spacer />
      <Text>XX</Text>
    </HStack>
  );
}

export default DGVCPrice;
