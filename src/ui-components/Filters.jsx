/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex } from "@aws-amplify/ui-react";
export default function Filters(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="flex-end"
      overflow="hidden"
      position="relative"
      padding="16px 16px 16px 16px"
      {...getOverrideProps(overrides, "Filters")}
      {...rest}
    >
      <Flex
        width="240px"
        height="unset"
        {...getOverrideProps(overrides, "SelectField40472593")}
      ></Flex>
      <Flex
        width="240px"
        height="unset"
        {...getOverrideProps(overrides, "SelectField40472594")}
      ></Flex>
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "Button")}
      ></Flex>
    </Flex>
  );
}
