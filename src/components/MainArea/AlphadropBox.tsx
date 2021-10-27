import { useState, useEffect } from "react";
import { Flex, Box, Text, Link, Spacer } from "@chakra-ui/react";
import { DateTime } from "luxon";

function AlphadropBox() {
  const nextAlphaDrop = DateTime.utc(2021, 11, 5);

  const getTimeLeft = () => {
    const now = DateTime.now();
    const _diff = nextAlphaDrop.diff(now, ["days", "hours", "minutes"]);
    const diff = _diff.toObject();

    if (_diff.toMillis() < 0) {
      return `00D:00H:00M`;
    }

    let days = diff.days?.toString();
    let hours = diff.hours?.toString();
    let minutes = diff.minutes?.toFixed();

    if (days?.length === 1) {
      days = "0" + days;
    }
    if (hours?.length === 1) {
      hours = "0" + hours;
    }
    if (minutes?.length === 1) {
      minutes = "0" + minutes;
    }

    return `${days}D:${hours}H:${minutes}M`;
  };

  const [timer, setTimer] = useState(getTimeLeft());

  useEffect(() => {
    setInterval(() => {
      setTimer(getTimeLeft());
    }, 1000);
  }, []);

  return (
    <Box pt="2rem" w="100%">
      <Flex
        direction={{ base: "column", lg: "row" }}
        border="1.5px solid white"
        py="1.5rem"
        px="3rem"
        rounded="xl"
        align="center"
      >
        <Text>Next Alphadrop in</Text>
        <Spacer />
        <Text fontSize="4xl" fontFamily="Aldrich">
          {timer}
        </Text>
        <Spacer />
        <Link href="" isExternal>
          Learn more about Scarcity
        </Link>
      </Flex>
    </Box>
  );
}

export default AlphadropBox;
