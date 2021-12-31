// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  // auto redirect for page /about
  async redirects() {
    return [
      {
        source: '/missing',
        destination: '/',
        permanent: true // triggers 308
      }
    ]
  }
};

module.exports = withNx(nextConfig);
