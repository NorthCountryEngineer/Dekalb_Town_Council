/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Comment } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CommentUpdateForm(props) {
  const {
    id: idProp,
    comment: commentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Header: "",
    Body: "",
    Anonymous: false,
    RespondByText: false,
    RespondByEmail: false,
    RespondBySocial: false,
  };
  const [Header, setHeader] = React.useState(initialValues.Header);
  const [Body, setBody] = React.useState(initialValues.Body);
  const [Anonymous, setAnonymous] = React.useState(initialValues.Anonymous);
  const [RespondByText, setRespondByText] = React.useState(
    initialValues.RespondByText
  );
  const [RespondByEmail, setRespondByEmail] = React.useState(
    initialValues.RespondByEmail
  );
  const [RespondBySocial, setRespondBySocial] = React.useState(
    initialValues.RespondBySocial
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = commentRecord
      ? { ...initialValues, ...commentRecord }
      : initialValues;
    setHeader(cleanValues.Header);
    setBody(cleanValues.Body);
    setAnonymous(cleanValues.Anonymous);
    setRespondByText(cleanValues.RespondByText);
    setRespondByEmail(cleanValues.RespondByEmail);
    setRespondBySocial(cleanValues.RespondBySocial);
    setErrors({});
  };
  const [commentRecord, setCommentRecord] = React.useState(commentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Comment, idProp)
        : commentModelProp;
      setCommentRecord(record);
    };
    queryData();
  }, [idProp, commentModelProp]);
  React.useEffect(resetStateValues, [commentRecord]);
  const validations = {
    Header: [],
    Body: [{ type: "Required" }],
    Anonymous: [{ type: "Required" }],
    RespondByText: [{ type: "Required" }],
    RespondByEmail: [{ type: "Required" }],
    RespondBySocial: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Header,
          Body,
          Anonymous,
          RespondByText,
          RespondByEmail,
          RespondBySocial,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Comment.copyOf(commentRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CommentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Header"
        isRequired={false}
        isReadOnly={false}
        value={Header}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Header: value,
              Body,
              Anonymous,
              RespondByText,
              RespondByEmail,
              RespondBySocial,
            };
            const result = onChange(modelFields);
            value = result?.Header ?? value;
          }
          if (errors.Header?.hasError) {
            runValidationTasks("Header", value);
          }
          setHeader(value);
        }}
        onBlur={() => runValidationTasks("Header", Header)}
        errorMessage={errors.Header?.errorMessage}
        hasError={errors.Header?.hasError}
        {...getOverrideProps(overrides, "Header")}
      ></TextField>
      <TextField
        label="Body"
        isRequired={true}
        isReadOnly={false}
        value={Body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Header,
              Body: value,
              Anonymous,
              RespondByText,
              RespondByEmail,
              RespondBySocial,
            };
            const result = onChange(modelFields);
            value = result?.Body ?? value;
          }
          if (errors.Body?.hasError) {
            runValidationTasks("Body", value);
          }
          setBody(value);
        }}
        onBlur={() => runValidationTasks("Body", Body)}
        errorMessage={errors.Body?.errorMessage}
        hasError={errors.Body?.hasError}
        {...getOverrideProps(overrides, "Body")}
      ></TextField>
      <SwitchField
        label="Anonymous"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Anonymous}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Header,
              Body,
              Anonymous: value,
              RespondByText,
              RespondByEmail,
              RespondBySocial,
            };
            const result = onChange(modelFields);
            value = result?.Anonymous ?? value;
          }
          if (errors.Anonymous?.hasError) {
            runValidationTasks("Anonymous", value);
          }
          setAnonymous(value);
        }}
        onBlur={() => runValidationTasks("Anonymous", Anonymous)}
        errorMessage={errors.Anonymous?.errorMessage}
        hasError={errors.Anonymous?.hasError}
        {...getOverrideProps(overrides, "Anonymous")}
      ></SwitchField>
      <SwitchField
        label="Respond by text"
        defaultChecked={false}
        isDisabled={false}
        isChecked={RespondByText}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Header,
              Body,
              Anonymous,
              RespondByText: value,
              RespondByEmail,
              RespondBySocial,
            };
            const result = onChange(modelFields);
            value = result?.RespondByText ?? value;
          }
          if (errors.RespondByText?.hasError) {
            runValidationTasks("RespondByText", value);
          }
          setRespondByText(value);
        }}
        onBlur={() => runValidationTasks("RespondByText", RespondByText)}
        errorMessage={errors.RespondByText?.errorMessage}
        hasError={errors.RespondByText?.hasError}
        {...getOverrideProps(overrides, "RespondByText")}
      ></SwitchField>
      <SwitchField
        label="Respond by email"
        defaultChecked={false}
        isDisabled={false}
        isChecked={RespondByEmail}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Header,
              Body,
              Anonymous,
              RespondByText,
              RespondByEmail: value,
              RespondBySocial,
            };
            const result = onChange(modelFields);
            value = result?.RespondByEmail ?? value;
          }
          if (errors.RespondByEmail?.hasError) {
            runValidationTasks("RespondByEmail", value);
          }
          setRespondByEmail(value);
        }}
        onBlur={() => runValidationTasks("RespondByEmail", RespondByEmail)}
        errorMessage={errors.RespondByEmail?.errorMessage}
        hasError={errors.RespondByEmail?.hasError}
        {...getOverrideProps(overrides, "RespondByEmail")}
      ></SwitchField>
      <SwitchField
        label="Respond by social"
        defaultChecked={false}
        isDisabled={false}
        isChecked={RespondBySocial}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Header,
              Body,
              Anonymous,
              RespondByText,
              RespondByEmail,
              RespondBySocial: value,
            };
            const result = onChange(modelFields);
            value = result?.RespondBySocial ?? value;
          }
          if (errors.RespondBySocial?.hasError) {
            runValidationTasks("RespondBySocial", value);
          }
          setRespondBySocial(value);
        }}
        onBlur={() => runValidationTasks("RespondBySocial", RespondBySocial)}
        errorMessage={errors.RespondBySocial?.errorMessage}
        hasError={errors.RespondBySocial?.hasError}
        {...getOverrideProps(overrides, "RespondBySocial")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || commentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || commentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
