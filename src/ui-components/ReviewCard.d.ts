/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ReviewCardOverridesProps = {
    ReviewCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    "Information about this product"?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Classic Long Sleeve T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<ViewProps>;
    Features?: PrimitiveOverrideProps<FlexProps>;
    "Information about this product.40472157"?: PrimitiveOverrideProps<TextProps>;
    "Information about this product.40472158"?: PrimitiveOverrideProps<TextProps>;
    Badge?: PrimitiveOverrideProps<FlexProps>;
    "Bottom Row"?: PrimitiveOverrideProps<FlexProps>;
    Rating40472161?: PrimitiveOverrideProps<FlexProps>;
    Rating40472162?: PrimitiveOverrideProps<FlexProps>;
    Reviews?: PrimitiveOverrideProps<TextProps>;
    "$99/Night"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ReviewCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ReviewCardOverridesProps | undefined | null;
}>;
export default function ReviewCard(props: ReviewCardProps): React.ReactElement;
