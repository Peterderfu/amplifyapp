/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AddUserInputValues = {
    User?: string;
    OS?: string;
    Device?: string;
};
export declare type AddUserValidationValues = {
    User?: ValidationFunction<string>;
    OS?: ValidationFunction<string>;
    Device?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddUserOverridesProps = {
    AddUserGrid?: PrimitiveOverrideProps<GridProps>;
    User?: PrimitiveOverrideProps<TextFieldProps>;
    OS?: PrimitiveOverrideProps<SelectFieldProps>;
    Device?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AddUserProps = React.PropsWithChildren<{
    overrides?: AddUserOverridesProps | undefined | null;
} & {
    onSubmit: (fields: AddUserInputValues) => void;
    onChange?: (fields: AddUserInputValues) => AddUserInputValues;
    onValidate?: AddUserValidationValues;
} & React.CSSProperties>;
export default function AddUser(props: AddUserProps): React.ReactElement;
