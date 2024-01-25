/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type CommentCardOverridesProps = {
    CommentCard?: PrimitiveOverrideProps<FlexProps>;
    Liked?: PrimitiveOverrideProps<FlexProps>;
    "User Liked"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472195?: MyIconProps;
    "Danny liked this"?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Frame40472199?: PrimitiveOverrideProps<FlexProps>;
    Frame40472200?: PrimitiveOverrideProps<FlexProps>;
    Frame40472201?: PrimitiveOverrideProps<FlexProps>;
    Scott?: PrimitiveOverrideProps<TextProps>;
    Frame40472203?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472204?: MyIconProps;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"?: PrimitiveOverrideProps<TextProps>;
    Share40472206?: PrimitiveOverrideProps<FlexProps>;
    Share40472207?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472208?: MyIconProps;
    "9940472209"?: PrimitiveOverrideProps<TextProps>;
    Repost?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472211?: MyIconProps;
    "9940472212"?: PrimitiveOverrideProps<TextProps>;
    Like?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472214?: MyIconProps;
    "9940472215"?: PrimitiveOverrideProps<TextProps>;
    MyIcon40472216?: MyIconProps;
} & EscapeHatchProps;
export declare type CommentCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CommentCardOverridesProps | undefined | null;
}>;
export default function CommentCard(props: CommentCardProps): React.ReactElement;
