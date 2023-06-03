/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Comment } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CommentCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    UserID: "",
    Header: "",
    Body: "",
  };
  const [UserID, setUserID] = React.useState(initialValues.UserID);
  const [Header, setHeader] = React.useState(initialValues.Header);
  const [Body, setBody] = React.useState(initialValues.Body);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserID(initialValues.UserID);
    setHeader(initialValues.Header);
    setBody(initialValues.Body);
    setErrors({});
  };
  const validations = {
    UserID: [],
    Header: [],
    Body: [],
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
          UserID,
          Header,
          Body,
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
          await DataStore.save(new Comment(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CommentCreateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={UserID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              UserID: value,
              Header,
              Body,
            };
            const result = onChange(modelFields);
            value = result?.UserID ?? value;
          }
          if (errors.UserID?.hasError) {
            runValidationTasks("UserID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("UserID", UserID)}
        errorMessage={errors.UserID?.errorMessage}
        hasError={errors.UserID?.hasError}
        {...getOverrideProps(overrides, "UserID")}
      ></TextField>
      <TextField
        label="Header"
        isRequired={false}
        isReadOnly={false}
        value={Header}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              UserID,
              Header: value,
              Body,
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
        isRequired={false}
        isReadOnly={false}
        value={Body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              UserID,
              Header,
              Body: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
