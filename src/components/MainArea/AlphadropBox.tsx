import { useState, useEffect } from "react";
import { HStack, Box, Text, Link, Spacer } from "@chakra-ui/react";
import { DateTime } from "luxon";

function AlphadropBox() {
  const nextAlphaDrop = DateTime.utc(2021, 11, 5);

  const getTimeLeft = () => {
    const now = DateTime.now();
    const _diff = nextAlphaDrop.diff(now, ["days", "hours", "minutes"]);
    const diff = _diff.toObject();

    if (_diff.toMillis() < 0) {
      return `0D:0H:0M`;
    }

    return `${diff.days}D:${diff.hours}H:${diff.minutes?.toFixed()}M`;
  };

  const [timer, setTimer] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimer(getTimeLeft());
    }, 1000);
  });

  return (
    <Box pt="2rem" w="100%">
      <HStack border="1.5px solid white" py="1.5rem" px="3rem" rounded="xl">
        <Text>Next Alphadrop in</Text>
        <Spacer />
        <Text fontSize="4xl" fontFamily="Aldrich">
          {timer}
        </Text>
        <Spacer />
        <Link href="" isExternal>
          Learn more about Scarcity
        </Link>
      </HStack>
    </Box>
  );
}

export default AlphadropBox;
