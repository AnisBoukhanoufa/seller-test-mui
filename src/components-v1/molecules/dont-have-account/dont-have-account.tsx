import TextLink from "components-v1/text-link";
import "./dont-have-account.scss";
export const DontHaveAccount = () => {
  return (
    <div className="flex gap-2 have-account text-sm my-4 mx-3">
      <p className="first-letter:capitalize text-[var(--color-gray)]  text-sm">
        dont have an account?
      </p>
      <TextLink url={"/sign-up"}>register here</TextLink>
    </div>
  );
};
