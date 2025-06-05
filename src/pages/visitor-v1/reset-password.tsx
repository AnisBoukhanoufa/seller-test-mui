import AuthPageLayout from "components-v1/pages/auth-page";
import ResetPasswordForm from "features/reset-password/components/organisms/reset-password-form";

export default function ResetPassword() {
  return (
    <AuthPageLayout>
      <ResetPasswordForm />
    </AuthPageLayout>
  );
}
