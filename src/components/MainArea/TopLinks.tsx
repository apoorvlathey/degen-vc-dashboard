import { HStack, Text, Link } from "@chakra-ui/react";

function TopLinks() {
  return (
    <HStack>
      <Text>Degen VC: Allocate to venture -</Text>
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
  );
}

export default TopLinks;
