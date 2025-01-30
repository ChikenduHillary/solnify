"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Footer } from "@/components/footer";
import { ImageIcon, Loader2 } from "lucide-react";
import {
  onboardingSchema,
  type OnboardingFormValues,
} from "@/lib/schemas/onboarding-schema";

export default function OnboardingPage() {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OnboardingFormValues>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      twitter: "",
      instagram: "",
      website: "",
    },
  });

  const onSubmit = async (data: OnboardingFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    // Here you would typically send the data to your backend
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Complete Your Profile
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="relative w-32 h-32">
                  {avatarPreview ? (
                    <Image
                      src={avatarPreview || "/placeholder.svg"}
                      alt="Avatar preview"
                      fill
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#242435] rounded-full flex items-center justify-center border-2 border-dashed border-gray-700">
                      <ImageIcon className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
              <p className="text-center text-sm text-gray-400">
                Click to upload profile picture
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="username"
                      placeholder="Your unique username"
                      className="bg-[#242435] border-gray-700 focus:border-purple-500"
                    />
                  )}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      className="bg-[#242435] border-gray-700 focus:border-purple-500"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Controller
                  name="bio"
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      id="bio"
                      placeholder="Tell us about yourself"
                      className="bg-[#242435] border-gray-700 focus:border-purple-500 min-h-[100px]"
                    />
                  )}
                />
                {errors.bio && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.bio.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="twitter">Twitter</Label>
                <Controller
                  name="twitter"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="twitter"
                      placeholder="Your Twitter profile URL"
                      className="bg-[#242435] border-gray-700 focus:border-purple-500"
                    />
                  )}
                />
                {errors.twitter && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.twitter.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="instagram">Instagram</Label>
                <Controller
                  name="instagram"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="instagram"
                      placeholder="Your Instagram profile URL"
                      className="bg-[#242435] border-gray-700 focus:border-purple-500"
                    />
                  )}
                />
                {errors.instagram && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.instagram.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="website">Website</Label>
                <Controller
                  name="website"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="website"
                      placeholder="Your personal website URL"
                      className="bg-[#242435] border-gray-700 focus:border-purple-500"
                    />
                  )}
                />
                {errors.website && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.website.message}
                  </p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Profile...
                </>
              ) : (
                "Create Profile"
              )}
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
