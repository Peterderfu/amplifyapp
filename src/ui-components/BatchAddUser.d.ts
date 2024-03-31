/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BatchAddUserInputValues = {};
export declare type BatchAddUserValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BatchAddUserOverridesProps = {
    BatchAddUserGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type BatchAddUserProps = React.PropsWithChildren<{
    overrides?: BatchAddUserOverridesProps | undefined | null;
} & {
    onSubmit: (fields: BatchAddUserInputValues) => void;
    onChange?: (fields: BatchAddUserInputValues) => BatchAddUserInputValues;
    onValidate?: BatchAddUserValidationValues;
} & React.CSSProperties>;
export default function BatchAddUser(props: BatchAddUserProps): React.ReactElement;
