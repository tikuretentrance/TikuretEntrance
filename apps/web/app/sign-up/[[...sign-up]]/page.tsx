import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 px-4">
      <SignUp
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

export async function generateStaticParams() {
  return [{ "sign-up": [] }];
}