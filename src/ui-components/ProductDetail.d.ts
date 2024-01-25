/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ProductDetailOverridesProps = {
    ProductDetail?: PrimitiveOverrideProps<FlexProps>;
    "Frame 401"?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 740472260"?: PrimitiveOverrideProps<FlexProps>;
    "Basic Tee 6-Pack"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat."?: PrimitiveOverrideProps<TextProps>;
    Divider40472263?: PrimitiveOverrideProps<ViewProps>;
    "Frame 740472264"?: PrimitiveOverrideProps<FlexProps>;
    Highlights?: PrimitiveOverrideProps<TextProps>;
    "Hand cut and sewn locally Dyed with our proprietary colors Pre-washed & pre-shrunk Ultra-soft 100% cotton"?: PrimitiveOverrideProps<TextProps>;
    Divider40472267?: PrimitiveOverrideProps<ViewProps>;
    "Frame 740472268"?: PrimitiveOverrideProps<FlexProps>;
    Details?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."?: PrimitiveOverrideProps<TextProps>;
    "Frame 402"?: PrimitiveOverrideProps<FlexProps>;
    $192?: PrimitiveOverrideProps<TextProps>;
    "Frame 2740472273"?: PrimitiveOverrideProps<FlexProps>;
    Rating?: PrimitiveOverrideProps<FlexProps>;
    "12 reviews"?: PrimitiveOverrideProps<TextProps>;
    "Frame 2740472276"?: PrimitiveOverrideProps<FlexProps>;
    "Size Guide"?: PrimitiveOverrideProps<TextProps>;
    Size?: PrimitiveOverrideProps<TextProps>;
    "Frame 2840472279"?: PrimitiveOverrideProps<FlexProps>;
    Button40472280?: PrimitiveOverrideProps<FlexProps>;
    Button40472281?: PrimitiveOverrideProps<FlexProps>;
    Button40472282?: PrimitiveOverrideProps<FlexProps>;
    Button40472283?: PrimitiveOverrideProps<FlexProps>;
    "Frame 2840472284"?: PrimitiveOverrideProps<FlexProps>;
    Button40472285?: PrimitiveOverrideProps<FlexProps>;
    Button40472286?: PrimitiveOverrideProps<FlexProps>;
    Button40472287?: PrimitiveOverrideProps<FlexProps>;
    Button40472288?: PrimitiveOverrideProps<FlexProps>;
    Button40472289?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type ProductDetailProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProductDetailOverridesProps | undefined | null;
}>;
export default function ProductDetail(props: ProductDetailProps): React.ReactElement;
