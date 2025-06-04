import Image from "next/image";
import Link from 'next/link';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Save Lives Through Blood Donation
              </h1>
              <p className="mt-4 text-lg">
                Connect with blood donors and recipients in your area. Our platform makes it easy to donate blood and find donors when you need them most.
              </p>
              <div className="mt-8 flex gap-4">
                <Button
                  component={Link}
                  href="/register"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Register as Donor
                </Button>
                <Button
                  component={Link}
                  href="/request"
                  variant="outlined"
                  color="inherit"
                  size="large"
                >
                  Request Blood
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/hero-image.jpg"
                alt="Blood donation"
                width={600}
                height={400}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Our Platform?
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: 'Real-time Location',
    description: 'Find donors and blood banks near you with our interactive map interface.',
    icon: (
      <svg
        className="h-6 w-6 text-primary-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Emergency Requests',
    description: 'Quick response system for urgent blood requirements with priority handling.',
    icon: (
      <svg
        className="h-6 w-6 text-primary-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Secure Platform',
    description: 'Your data is protected with state-of-the-art security measures.',
    icon: (
      <svg
        className="h-6 w-6 text-primary-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
];
