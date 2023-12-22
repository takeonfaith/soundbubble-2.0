import "styled-components";
import { TTheme } from "./shared/constants/theme";

declare module "styled-components" {
  export interface DefaultTheme extends TTheme {}
}
