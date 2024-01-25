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
export declare type EditProfileOverridesProps = {
    EditProfile?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile40472228"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Edit Profile40472230"?: PrimitiveOverrideProps<TextProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Upload New Image"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField40472235?: PrimitiveOverrideProps<FlexProps>;
    TextField40472236?: PrimitiveOverrideProps<FlexProps>;
    TextField40472237?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type EditProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: EditProfileOverridesProps | undefined | null;
}>;
export default function EditProfile(props: EditProfileProps): React.ReactElement;
