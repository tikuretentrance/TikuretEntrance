import { SignIn } from "@clerk/nextjs";

export async function generateStaticParams() {
  return [{ "sign-in": [] }];
}

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 px-4">
      <SignIn
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-card",
          },
        }}
      />
    </div>
  );
}
