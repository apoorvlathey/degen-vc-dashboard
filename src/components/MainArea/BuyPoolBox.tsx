import {
  Flex,
  VStack,
  Text,
  Button,
  Box,
  Link,
  ButtonProps,
} from "@chakra-ui/react";

interface BtnProps extends ButtonProps {
  text: string;
  href: string;
}
const Btn = ({ text, href, ...rest }: BtnProps) => (
  <Link href={href} isExternal>
    <Button
      as="span"
      mt={{ base: "1rem", lg: "0" }}
      w={{ base: "10rem", xl: "15rem" }}
      textTransform="uppercase"
      bgGradient="linear(to-r, #141E30, #243B55)"
      _hover={{
        bgGradient: "linear(to-r, #1e3c72, #2a5298)",
      }}
      {...rest}
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
      px={{ base: "2rem", md: "3rem" }}
      fontSize="xl"
      rounded="xl"
      textTransform="uppercase"
      alignItems={{ base: "center", lg: "flex-start" }}
      spacing="2.5rem"
    >
      <Box textAlign="center">
        <Text>BUY DGVC</Text>
        <Flex direction={{ base: "column", lg: "row" }} pt="0.5rem">
          <Btn text="with USDC" href="" mr={{ base: "0", lg: "1rem" }} />
          <Btn text="with WBTC" href="" />
        </Flex>
      </Box>
      <Box textAlign="center">
        <Text>Pool DGVC</Text>
        <Flex direction={{ base: "column", lg: "row" }} pt="0.5rem">
          <Btn text="DGVC:USDC" href="" mr={{ base: "0", lg: "1rem" }} />
          <Btn text="DGVC:WBTC" href="" />
        </Flex>
      </Box>
    </VStack>
  );
}

export default BuyPoolBox;
