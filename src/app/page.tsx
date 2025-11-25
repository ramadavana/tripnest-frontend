"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle, Globe, DollarSign } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

const tripData = [
  { name: "Jan", trips: 400 },
  { name: "Feb", trips: 300 },
  { name: "Mar", trips: 600 },
  { name: "Apr", trips: 800 },
  { name: "May", trips: 500 },
  { name: "Jun", trips: 700 },
];

export default function Home() {
  const form = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = (data: NewsletterForm) => {
    console.log("Newsletter signup:", data);
    // Here you would typically send to your backend
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl font-bold text-fontColorPrimary mb-4">
          Welcome to TripNest
        </h1>
        <p className="text-xl text-fontColorSecondary mb-8 max-w-2xl">
          Discover amazing destinations, plan unforgettable trips, and create memories that last a lifetime.
          Your journey starts here.
        </p>
        <div className="flex gap-4">
          <Button size="lg">
            Start Planning
          </Button>
          <Button variant="outline" size="lg">
            Explore Destinations
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-fontColorPrimary mb-12">
            Why Choose TripNest?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                <CardTitle>Easy Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fontColorSecondary">
                  Plan your trips effortlessly with our intuitive tools and personalized recommendations.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="w-16 h-16 text-warning mx-auto mb-4" />
                <CardTitle>Global Destinations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fontColorSecondary">
                  Explore thousands of destinations worldwide with detailed guides and local insights.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="w-16 h-16 text-accent mx-auto mb-4" />
                <CardTitle>Budget Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fontColorSecondary">
                  Find the best deals and manage your travel budget with our smart cost tracking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section with Chart */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-fontColorPrimary mb-12">
            Trip Statistics
          </h2>
          <Card>
            <CardContent className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={tripData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="trips" fill="#2D6A6A" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-fontColorPrimary mb-4">
            Stay Updated
          </h2>
          <p className="text-fontColorSecondary mb-8">
            Subscribe to our newsletter for the latest travel tips and exclusive deals.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4 max-w-md mx-auto">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </Form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-card text-card-foreground border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-fontColorSecondary">
            © 2025 TripNest. All rights reserved. | Made with ❤️ for travelers.
          </p>
        </div>
      </footer>
    </div>
  );
}
