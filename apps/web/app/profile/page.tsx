import { ProfileForm } from "@/components/profile/profile-form"
import { ProfileStats } from "@/components/profile/profile-stats"

export default function ProfilePage() {
  return (
    <div className="container px-4 py-8 mx-auto ">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
          <p className="text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <ProfileForm />
          <ProfileStats />
        </div>
      </div>
    </div>
  )
}