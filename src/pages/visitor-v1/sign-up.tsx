import SignUpForm from "features/sign-up/components/organisms/sign-up-form/sign-up-form";
import { SignUpLefttSide } from "features/sign-up/sections/left/left";
import { SignUpRightSide } from "features/sign-up/sections/right/right";

export default function SignUp() {
  return (
    <div className="flex w-full min-h-screen">
      <SignUpLefttSide>
        <SignUpForm />
      </SignUpLefttSide>
      <SignUpRightSide />
    </div>
  );
}
