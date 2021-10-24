import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const colors = {
  degen: {
    bg: "#012760",
  },
};

const fonts = {
  timer: "Aldrich",
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors,
  fonts,
  config,
});

export default theme;
