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
export declare type CheckoutPaymentOverridesProps = {
    CheckoutPayment?: PrimitiveOverrideProps<FlexProps>;
    "Frame 41140472374"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Payment information"?: PrimitiveOverrideProps<TextProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    TextField40472379?: PrimitiveOverrideProps<FlexProps>;
    "Frame 425"?: PrimitiveOverrideProps<FlexProps>;
    TextField40472381?: PrimitiveOverrideProps<FlexProps>;
    TextField40472382?: PrimitiveOverrideProps<FlexProps>;
    "Frame 410"?: PrimitiveOverrideProps<FlexProps>;
    TextField40472384?: PrimitiveOverrideProps<FlexProps>;
    "Frame 41140472385"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Frame 427"?: PrimitiveOverrideProps<FlexProps>;
    "Your order"?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 316"?: PrimitiveOverrideProps<FlexProps>;
    Subtotal?: PrimitiveOverrideProps<TextProps>;
    "$320.00"?: PrimitiveOverrideProps<TextProps>;
    "Frame 317"?: PrimitiveOverrideProps<FlexProps>;
    Shipping?: PrimitiveOverrideProps<TextProps>;
    "$15.00"?: PrimitiveOverrideProps<TextProps>;
    "Frame 318"?: PrimitiveOverrideProps<FlexProps>;
    Taxes?: PrimitiveOverrideProps<TextProps>;
    "$26.80"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<ViewProps>;
    "Frame 319"?: PrimitiveOverrideProps<FlexProps>;
    Total?: PrimitiveOverrideProps<TextProps>;
    "$361.80"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CheckoutPaymentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CheckoutPaymentOverridesProps | undefined | null;
}>;
export default function CheckoutPayment(props: CheckoutPaymentProps): React.ReactElement;
