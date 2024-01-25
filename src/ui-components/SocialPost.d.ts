/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SocialPostOverridesProps = {
    SocialPost?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    "New Amplify Studio gives designers the ability to export UI to React code"?: PrimitiveOverrideProps<TextProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    "Nikhil S"?: PrimitiveOverrideProps<TextProps>;
    "2nd December 2021"?: PrimitiveOverrideProps<TextProps>;
    Article?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472181?: MyIconProps;
    "AWS Amplify Studio is a visual development environment for building full-stack web and mobile apps that grows with your business. Studio builds on existing backend building capabilities in AWS Amplify, allowing you to build your UI faster with a set of ready-to-use UI components that are editable in Figma. With Studio, you can quickly build an entire web app, front-to-back, with minimal coding, while still maintaining full control over your app design and behavior through code. Ship faster, scale effortlessly, and delight every user."?: PrimitiveOverrideProps<TextProps>;
    Share40472183?: PrimitiveOverrideProps<FlexProps>;
    Share40472184?: PrimitiveOverrideProps<TextProps>;
    MyIcon40472185?: MyIconProps;
    MyIcon40472186?: MyIconProps;
    MyIcon40472187?: MyIconProps;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Read more40472189"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472190?: MyIconProps;
    "Read more40472191"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SocialPostProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SocialPostOverridesProps | undefined | null;
}>;
export default function SocialPost(props: SocialPostProps): React.ReactElement;
