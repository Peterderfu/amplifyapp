/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type AmpligramOverridesProps = {
    Ampligram?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image40472086?: PrimitiveOverrideProps<ImageProps>;
    "Rene Brandel"?: PrimitiveOverrideProps<TextProps>;
    Overflow?: PrimitiveOverrideProps<FlexProps>;
    Icon40472089?: PrimitiveOverrideProps<ViewProps>;
    Vector40472090?: PrimitiveOverrideProps<IconProps>;
    image40472091?: PrimitiveOverrideProps<ImageProps>;
    Options?: PrimitiveOverrideProps<FlexProps>;
    Share?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472094?: MyIconProps;
    MyIcon40472095?: MyIconProps;
    MyIcon40472096?: MyIconProps;
    Bookmark?: PrimitiveOverrideProps<FlexProps>;
    Icon40472098?: PrimitiveOverrideProps<ViewProps>;
    Vector40472099?: PrimitiveOverrideProps<IconProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Area?: PrimitiveOverrideProps<FlexProps>;
    "Firstname Lastname"?: PrimitiveOverrideProps<TextProps>;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.\u201D"?: PrimitiveOverrideProps<TextProps>;
    Timestamp?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AmpligramProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AmpligramOverridesProps | undefined | null;
}>;
export default function Ampligram(props: AmpligramProps): React.ReactElement;
