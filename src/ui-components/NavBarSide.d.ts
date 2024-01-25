/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LogoWithTextProps } from "./LogoWithText";
import { MyIconProps } from "./MyIcon";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type NavBarSideOverridesProps = {
    NavBarSide?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32140472427"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32140472428"?: PrimitiveOverrideProps<FlexProps>;
    LogoWithText?: LogoWithTextProps;
    "Frame 414"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    icon40472432?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472433?: MyIconProps;
    label40472434?: PrimitiveOverrideProps<TextProps>;
    Section40472435?: PrimitiveOverrideProps<FlexProps>;
    label40472436?: PrimitiveOverrideProps<TextProps>;
    link40472437?: PrimitiveOverrideProps<FlexProps>;
    icon40472438?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472439?: MyIconProps;
    label40472440?: PrimitiveOverrideProps<TextProps>;
    link40472441?: PrimitiveOverrideProps<FlexProps>;
    icon40472442?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472443?: MyIconProps;
    label40472444?: PrimitiveOverrideProps<TextProps>;
    link40472445?: PrimitiveOverrideProps<FlexProps>;
    icon40472446?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472447?: MyIconProps;
    label40472448?: PrimitiveOverrideProps<TextProps>;
    Section40472449?: PrimitiveOverrideProps<FlexProps>;
    label40472450?: PrimitiveOverrideProps<TextProps>;
    link40472451?: PrimitiveOverrideProps<FlexProps>;
    icon40472452?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472453?: MyIconProps;
    label40472454?: PrimitiveOverrideProps<TextProps>;
    link40472455?: PrimitiveOverrideProps<FlexProps>;
    icon40472456?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472457?: MyIconProps;
    label40472458?: PrimitiveOverrideProps<TextProps>;
    link40472459?: PrimitiveOverrideProps<FlexProps>;
    icon40472460?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472461?: MyIconProps;
    label40472462?: PrimitiveOverrideProps<TextProps>;
    "Frame 32140472463"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 416"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 415"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1163"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 32140472467"?: PrimitiveOverrideProps<FlexProps>;
    "Wesley Peck"?: PrimitiveOverrideProps<TextProps>;
    MyIcon40472469?: MyIconProps;
} & EscapeHatchProps;
export declare type NavBarSideProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarSideOverridesProps | undefined | null;
}>;
export default function NavBarSide(props: NavBarSideProps): React.ReactElement;
