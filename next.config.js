module.exports = {
  async redirects() {
    return [
      {
        source: '/test',
        destination: 'https://pr0xy.cc/',
        permanent: false,
      },
    ]
  },
}
