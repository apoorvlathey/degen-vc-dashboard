import { VStack, Link, Image } from "@chakra-ui/react";
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

function Sidebar() {
  return (
    <VStack flex="1" bg="#261E35" px="1.5rem" minH="100vh" color="white">
      <Link pt="2rem" href="/">
        <Image src="/images/degen-vc-logo.png" w="3rem" />
      </Link>
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
