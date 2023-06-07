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
import { User } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserCreateForm(props) {
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
    cognitoID: "",
    Email: "",
    First: "",
    Last: "",
    Phone: "",
    Newsletter: false,
  };
  const [cognitoID, setCognitoID] = React.useState(initialValues.cognitoID);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [First, setFirst] = React.useState(initialValues.First);
  const [Last, setLast] = React.useState(initialValues.Last);
  const [Phone, setPhone] = React.useState(initialValues.Phone);
  const [Newsletter, setNewsletter] = React.useState(initialValues.Newsletter);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCognitoID(initialValues.cognitoID);
    setEmail(initialValues.Email);
    setFirst(initialValues.First);
    setLast(initialValues.Last);
    setPhone(initialValues.Phone);
    setNewsletter(initialValues.Newsletter);
    setErrors({});
  };
  const validations = {
    cognitoID: [],
    Email: [{ type: "Required" }],
    First: [],
    Last: [],
    Phone: [],
    Newsletter: [],
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
          cognitoID,
          Email,
          First,
          Last,
          Phone,
          Newsletter,
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
          await DataStore.save(new User(modelFields));
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
      {...getOverrideProps(overrides, "UserCreateForm")}
      {...rest}
    >
      <TextField
        label="Cognito id"
        isRequired={false}
        isReadOnly={false}
        value={cognitoID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID: value,
              Email,
              First,
              Last,
              Phone,
              Newsletter,
            };
            const result = onChange(modelFields);
            value = result?.cognitoID ?? value;
          }
          if (errors.cognitoID?.hasError) {
            runValidationTasks("cognitoID", value);
          }
          setCognitoID(value);
        }}
        onBlur={() => runValidationTasks("cognitoID", cognitoID)}
        errorMessage={errors.cognitoID?.errorMessage}
        hasError={errors.cognitoID?.hasError}
        {...getOverrideProps(overrides, "cognitoID")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID,
              Email: value,
              First,
              Last,
              Phone,
              Newsletter,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="First"
        isRequired={false}
        isReadOnly={false}
        value={First}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID,
              Email,
              First: value,
              Last,
              Phone,
              Newsletter,
            };
            const result = onChange(modelFields);
            value = result?.First ?? value;
          }
          if (errors.First?.hasError) {
            runValidationTasks("First", value);
          }
          setFirst(value);
        }}
        onBlur={() => runValidationTasks("First", First)}
        errorMessage={errors.First?.errorMessage}
        hasError={errors.First?.hasError}
        {...getOverrideProps(overrides, "First")}
      ></TextField>
      <TextField
        label="Last"
        isRequired={false}
        isReadOnly={false}
        value={Last}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID,
              Email,
              First,
              Last: value,
              Phone,
              Newsletter,
            };
            const result = onChange(modelFields);
            value = result?.Last ?? value;
          }
          if (errors.Last?.hasError) {
            runValidationTasks("Last", value);
          }
          setLast(value);
        }}
        onBlur={() => runValidationTasks("Last", Last)}
        errorMessage={errors.Last?.errorMessage}
        hasError={errors.Last?.hasError}
        {...getOverrideProps(overrides, "Last")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={Phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID,
              Email,
              First,
              Last,
              Phone: value,
              Newsletter,
            };
            const result = onChange(modelFields);
            value = result?.Phone ?? value;
          }
          if (errors.Phone?.hasError) {
            runValidationTasks("Phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("Phone", Phone)}
        errorMessage={errors.Phone?.errorMessage}
        hasError={errors.Phone?.hasError}
        {...getOverrideProps(overrides, "Phone")}
      ></TextField>
      <SwitchField
        label="Newsletter"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Newsletter}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              cognitoID,
              Email,
              First,
              Last,
              Phone,
              Newsletter: value,
            };
            const result = onChange(modelFields);
            value = result?.Newsletter ?? value;
          }
          if (errors.Newsletter?.hasError) {
            runValidationTasks("Newsletter", value);
          }
          setNewsletter(value);
        }}
        onBlur={() => runValidationTasks("Newsletter", Newsletter)}
        errorMessage={errors.Newsletter?.errorMessage}
        hasError={errors.Newsletter?.hasError}
        {...getOverrideProps(overrides, "Newsletter")}
      ></SwitchField>
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
