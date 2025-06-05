import AuthPageLayout from "components-v1/pages/auth-page";
import SignInForm from "features/sign-in/components/organisms/sign-in-form";

export default function SignIn() {
  return (
    <AuthPageLayout>
      <SignInForm />
    </AuthPageLayout>
  );
}
