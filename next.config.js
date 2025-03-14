const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    // distDir: "build",
};

module.exports = withNextIntl(nextConfig);
