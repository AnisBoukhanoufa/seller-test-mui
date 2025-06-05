import EmailField from "components-v1/email-field";
import PhoneInputValidation from "components-v1/phone-input/phone-input-validation";
import TextFieldComponent from "components-v1/text-field";
import { useFormContext } from "react-hook-form";
export default function PersonalInfoStep() {
  const { watch } = useFormContext(); 
  const password = watch("password"); // Get the current value of the password field

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <TextFieldComponent
          name="firstName"
          label="First Name"
          rules={{ required: `First Name is required` }}
        />
        <TextFieldComponent
          name="lastName"
          label="Last Name"
          rules={{ required: `Last Name is required` }}
        />
      </div>
      <EmailField
        name="email"
        label="Email"
        rules={{
          required: "Email is required",
        }}
      />
      <PhoneInputValidation
        name="phone1"
        label="Phone Number"
        rules={{ required: "Phone number is required" }}
      />
      <PhoneInputValidation name="phone2" label="Phone Number 2 (Optional)" />
      <TextFieldComponent
        name="password"
        label="Password"
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
            message:
              "Password must contain at least one letter, one number, and be at least 8 characters long",
          },
        }}
        type="password"
      />
      <TextFieldComponent
        name="confirmPassword"
        label="Confirm Password"
        rules={{
          required: "Confirm Password is required",
          validate: (value: string) =>
            value === password || "Passwords do not match",
        }}
        type="password"
      />
    </div>
  );
}
