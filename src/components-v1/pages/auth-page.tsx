import { AuthLeftSide } from "../organisms/auth-left/auth-left";
import { AuthRightSide } from "../organisms/auth-right/auth-right";

export default function AuthPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex w-full min-h-screen">
      <AuthLeftSide />
      <AuthRightSide>{children}</AuthRightSide>
    </div>
  );
}
