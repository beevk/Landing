/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
    runtime: 'edge',
    unstable_allowDynamic: [
        // allows a single file
        '/lib/utilities.js',
        // use a glob to allow anything in the function-bind 3rd party module
        '/node_modules/function-bind/**',
    ],
};

export default nextConfig;
