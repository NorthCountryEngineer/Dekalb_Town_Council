/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CommentCreateFormInputValues = {
    Header?: string;
    Body?: string;
    Anonymous?: boolean;
    RespondByText?: boolean;
    RespondByEmail?: boolean;
    RespondBySocial?: boolean;
};
export declare type CommentCreateFormValidationValues = {
    Header?: ValidationFunction<string>;
    Body?: ValidationFunction<string>;
    Anonymous?: ValidationFunction<boolean>;
    RespondByText?: ValidationFunction<boolean>;
    RespondByEmail?: ValidationFunction<boolean>;
    RespondBySocial?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommentCreateFormOverridesProps = {
    CommentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Header?: PrimitiveOverrideProps<TextFieldProps>;
    Body?: PrimitiveOverrideProps<TextFieldProps>;
    Anonymous?: PrimitiveOverrideProps<SwitchFieldProps>;
    RespondByText?: PrimitiveOverrideProps<SwitchFieldProps>;
    RespondByEmail?: PrimitiveOverrideProps<SwitchFieldProps>;
    RespondBySocial?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CommentCreateFormProps = React.PropsWithChildren<{
    overrides?: CommentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CommentCreateFormInputValues) => CommentCreateFormInputValues;
    onSuccess?: (fields: CommentCreateFormInputValues) => void;
    onError?: (fields: CommentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommentCreateFormInputValues) => CommentCreateFormInputValues;
    onValidate?: CommentCreateFormValidationValues;
} & React.CSSProperties>;
export default function CommentCreateForm(props: CommentCreateFormProps): React.ReactElement;
