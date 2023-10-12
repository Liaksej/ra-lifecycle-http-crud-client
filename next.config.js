/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production"
      ? "/ra-lifecycle-http-crud-client"
      : "",
};

module.exports = nextConfig;
