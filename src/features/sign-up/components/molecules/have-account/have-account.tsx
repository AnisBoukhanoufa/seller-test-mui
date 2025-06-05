import TextLink from "components-v1/text-link";
import "./have-account.scss";
export const HaveAccount = () => {
  return (
    <div className="flex gap-2 have-account text-sm">
      <p className="first-letter:capitalize text-sm text-[var(--color-gray)] ">
        already have an account?
      </p>
      <TextLink url={"/sign-in"}>sign in</TextLink>
    </div>
  );
};
