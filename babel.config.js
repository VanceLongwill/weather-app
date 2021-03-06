module.exports = api => {
  // You can use isTest to determine what presets and plugins to use.
  const isTest = api.env('test')

  const config = {
    presets: ['next/babel', '@zeit/next-typescript/babel'],
    plugins: [
      ['import', { libraryName: 'antd', style: 'css' }],
      ['styled-components', { ssr: true }],
    ],
  }

  if (isTest) {
    config.plugins = [['styled-components', { ssr: true }]]
  }

  return config
}
