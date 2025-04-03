"use client";

import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from "@/components/theme-provider";
// import { dark } from "@clerk/themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const isClerkEnabled = process.env.NEXT_PUBLIC_DISABLE_CLERK !== 'true';
  console.log('isClerkEnabled', isClerkEnabled);
  return isClerkEnabled ? (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} afterSignOutUrl={'/'}
      appearance={{
        // elements: {
        //   footer: "none"
        // },
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
        // baseTheme: dark,
      }}
    // signUpUrl="/sign-in"
    >
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </ClerkProvider>
  ) : (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  );
}