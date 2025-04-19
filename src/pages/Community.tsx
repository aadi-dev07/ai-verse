
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Users, Bell, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

const Community = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("Welcome aboard! Check your email for the invite.");
  };

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold font-heading mb-4 bg-gradient-to-r from-tech-purple to-autoverse-600 bg-clip-text text-transparent">
          Be Part of the AutoVerse Family
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Connect with other business owners, share automation strategies, and get exclusive updates and support.
        </p>
      </div>

      {/* Highlights Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <Users className="w-12 h-12 text-tech-purple mb-4" />
          <h3 className="text-xl font-semibold mb-2">Networking & Collaboration</h3>
          <p className="text-gray-600">Meet like-minded business owners and automation enthusiasts.</p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <Bell className="w-12 h-12 text-tech-purple mb-4" />
          <h3 className="text-xl font-semibold mb-2">Early Access & Updates</h3>
          <p className="text-gray-600">Be the first to try our new agents and features.</p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <MessageSquare className="w-12 h-12 text-tech-purple mb-4" />
          <h3 className="text-xl font-semibold mb-2">Community Support</h3>
          <p className="text-gray-600">Discuss ideas, troubleshoot and grow together.</p>
        </Card>
      </div>

      {/* Join Form Section */}
      <div className="max-w-md mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your business name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-tech-purple to-autoverse-600 hover:from-autoverse-600 hover:to-tech-purple"
            >
              Join Now
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Community;
