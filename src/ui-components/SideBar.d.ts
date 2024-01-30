/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type SideBarOverridesProps = {
    SideBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32140472472"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32140472473"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 414"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    icon40472476?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472477?: MyIconProps;
    label40472478?: PrimitiveOverrideProps<TextProps>;
    Section40472479?: PrimitiveOverrideProps<FlexProps>;
    label40472480?: PrimitiveOverrideProps<TextProps>;
    link40472481?: PrimitiveOverrideProps<FlexProps>;
    icon40472482?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472483?: MyIconProps;
    label40472484?: PrimitiveOverrideProps<TextProps>;
    link40472485?: PrimitiveOverrideProps<FlexProps>;
    icon40472486?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472487?: MyIconProps;
    label40472488?: PrimitiveOverrideProps<TextProps>;
    link40472489?: PrimitiveOverrideProps<FlexProps>;
    icon40472490?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472491?: MyIconProps;
    label40472492?: PrimitiveOverrideProps<TextProps>;
    Section40472493?: PrimitiveOverrideProps<FlexProps>;
    label40472494?: PrimitiveOverrideProps<TextProps>;
    link40472495?: PrimitiveOverrideProps<FlexProps>;
    icon40472496?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472497?: MyIconProps;
    label40472498?: PrimitiveOverrideProps<TextProps>;
    link40472499?: PrimitiveOverrideProps<FlexProps>;
    icon40472500?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472501?: MyIconProps;
    label40472502?: PrimitiveOverrideProps<TextProps>;
    link40472503?: PrimitiveOverrideProps<FlexProps>;
    icon40472504?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40472505?: MyIconProps;
    label40472506?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    link?: String;
} & {
    overrides?: SideBarOverridesProps | undefined | null;
}>;
export default function SideBar(props: SideBarProps): React.ReactElement;
