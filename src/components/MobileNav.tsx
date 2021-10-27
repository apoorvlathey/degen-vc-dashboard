import {
  FlexProps,
  IconButton,
  Flex,
  Link,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 40 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      justifyContent="flex-start"
      bg="#261E35"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        color="white"
        aria-label="open menu"
        icon={<HamburgerIcon />}
      />

      <Spacer />
      <Link href="/">
        <Image src="/images/degen-vc-logo.png" w="3rem" />
      </Link>
      <Spacer />
    </Flex>
  );
};

export default MobileNav;
