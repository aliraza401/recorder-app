import { green, gold, red } from "@ant-design/colors";
import { DefaultTheme } from "styled-components";

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  lightColor: string;
  textColor: string;
  linkColor: string;
  successColor: string;
  warningColor: string;
  errorColor: string;
}

const primaryColor = "#3A8DFF";
const secondaryColor = "#7fb2ff";
const lightColor = "#5ca5ff";
const textColor = "#2a2727";
const linkColor = primaryColor;
const successColor = green[5];
const warningColor = gold[5];
const errorColor = red[5];

const antdTheme: Theme = {
  primaryColor: primaryColor,
  secondaryColor: secondaryColor,
  lightColor: lightColor,
  textColor: textColor,
  linkColor: linkColor,
  successColor: successColor,
  warningColor: warningColor,
  errorColor: errorColor,
};

const customTheme = {
  ...antdTheme,
  // Add your custom theme variables here
};

export default customTheme;
