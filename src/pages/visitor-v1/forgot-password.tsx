import AuthPageLayout from "components-v1/pages/auth-page";
import ForgotPasswordForm from "features/forget-password/components/organisms/forget-password-form";

export default function ForgotPassword() {
  return (
    <AuthPageLayout>
      <ForgotPasswordForm />
    </AuthPageLayout>
  );
}
