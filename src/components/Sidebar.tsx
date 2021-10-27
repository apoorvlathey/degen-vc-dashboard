import {
  VStack,
  Link,
  Image,
  StackProps,
  CloseButton,
  Center,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTelegramPlane,
  faTwitter,
  faMediumM,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcon = ({ link, icon }: { link: string; icon: IconDefinition }) => (
  <Link bg="#3E2351" p="0.3rem" href={link} isExternal>
    <FontAwesomeIcon icon={icon} size="lg" />
  </Link>
);

interface SidebarProps extends StackProps {
  onClose: () => void;
}

function Sidebar({ onClose, ...rest }: SidebarProps) {
  return (
    <VStack
      flex="1"
      bg="#261E35"
      px="1.5rem"
      w={{ base: "full", md: 40 }}
      pos="fixed"
      h="full"
      color="white"
      {...rest}
    >
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      <Center>
        <Link pt="2rem" href="/">
          <Image src="/images/degen-vc-logo.png" w="3rem" />
        </Link>
      </Center>
      <VStack pt="3rem" spacing="6">
        <SocialIcon
          link="https://discord.com/invite/qK8uUqc9Jd"
          icon={faDiscord}
        />
        <SocialIcon link="https://t.me/degenvc" icon={faTelegramPlane} />
        <SocialIcon link="https://twitter.com/degen_vc" icon={faTwitter} />
        <SocialIcon link="https://medium.com/degen-vc" icon={faMediumM} />
      </VStack>
    </VStack>
  );
}

export default Sidebar;
