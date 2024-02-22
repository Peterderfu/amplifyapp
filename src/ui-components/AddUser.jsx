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
  SelectField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
export default function AddUser(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const { tokens } = useTheme();
  const initialValues = {
    User: "",
    OS: "",
    Device: "",
  };
  const [User, setUser] = React.useState(initialValues.User);
  const [OS, setOS] = React.useState(initialValues.OS);
  const [Device, setDevice] = React.useState(initialValues.Device);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUser(initialValues.User);
    setOS(initialValues.OS);
    setDevice(initialValues.Device);
    setErrors({});
  };
  const validations = {
    User: [{ type: "Required" }],
    OS: [],
    Device: [{ type: "Required" }],
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
      padding={tokens.space.small.value}
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          User,
          OS,
          Device,
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
        await onSubmit(modelFields);
      }}
      {...getOverrideProps(overrides, "AddUser")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>User</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        placeholder="Add user name here"
        value={User}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User: value,
              OS,
              Device,
            };
            const result = onChange(modelFields);
            value = result?.User ?? value;
          }
          if (errors.User?.hasError) {
            runValidationTasks("User", value);
          }
          setUser(value);
        }}
        onBlur={() => runValidationTasks("User", User)}
        errorMessage={errors.User?.errorMessage}
        hasError={errors.User?.hasError}
        {...getOverrideProps(overrides, "User")}
      ></TextField>
      <SelectField
        label="OS"
        placeholder="Please select an OS type"
        value={OS}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              OS: value,
              Device,
            };
            const result = onChange(modelFields);
            value = result?.OS ?? value;
          }
          if (errors.OS?.hasError) {
            runValidationTasks("OS", value);
          }
          setOS(value);
        }}
        onBlur={() => runValidationTasks("OS", OS)}
        errorMessage={errors.OS?.errorMessage}
        hasError={errors.OS?.hasError}
        {...getOverrideProps(overrides, "OS")}
      >
        <option
          children="Windows"
          value="Windows"
          {...getOverrideProps(overrides, "OSoption0")}
        ></option>
        <option
          children="macOS"
          value="macOS"
          {...getOverrideProps(overrides, "OSoption1")}
        ></option>
        <option
          children="Linux"
          value="Linux"
          {...getOverrideProps(overrides, "OSoption2")}
        ></option>
        <option
          children="Android"
          value="Android"
          {...getOverrideProps(overrides, "OSoption3")}
        ></option>
        <option
          children="iOS"
          value="iOS"
          {...getOverrideProps(overrides, "OSoption4")}
        ></option>
        <option
          children="Chrome"
          value="Chrome"
          {...getOverrideProps(overrides, "OSoption5")}
        ></option>
      </SelectField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Device ID</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        placeholder="Add device ID here"
        value={Device}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              OS,
              Device: value,
            };
            const result = onChange(modelFields);
            value = result?.Device ?? value;
          }
          if (errors.Device?.hasError) {
            runValidationTasks("Device", value);
          }
          setDevice(value);
        }}
        onBlur={() => runValidationTasks("Device", Device)}
        errorMessage={errors.Device?.errorMessage}
        hasError={errors.Device?.hasError}
        {...getOverrideProps(overrides, "Device")}
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
