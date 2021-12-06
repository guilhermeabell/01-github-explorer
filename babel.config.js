module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime: 'automatic' // Possibilita não utilizar o import do React 
    }]
  ]
}