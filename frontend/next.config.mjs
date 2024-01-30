/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  env: {
    NEXT_PUBLIC_BACKEND_URL: "http://localhost:8000",
  },
};

export default nextConfig;
