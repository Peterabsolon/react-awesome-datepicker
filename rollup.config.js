import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'

export default {
  input: './src/index.tsx',

  output: [
    {
      file: './dist/react-awesome-datepicker.js',
      format: 'commonjs',
      exports: 'named',
    },
  ],

  plugins: [
    external(),
    typescript({
      clean: true,
    }),
  ],
}
