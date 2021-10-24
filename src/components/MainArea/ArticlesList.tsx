import { VStack, Text, Link } from "@chakra-ui/react";

function ArticlesList() {
  return (
    <VStack pt="2rem" px="2.5rem" align="flex-start">
      <Text>Top Articles</Text>
      <VStack align="flex-start" textDecor="underline">
        <Link href="" isExternal>
          What is DGVC?
        </Link>
        <Link href="" isExternal>
          What is a Scarcity Alphadrop?
        </Link>
        <Link href="" isExternal>
          Current Projects
        </Link>
      </VStack>
    </VStack>
  );
}

export default ArticlesList;
