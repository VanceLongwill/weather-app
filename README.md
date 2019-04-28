### Weather App :sunny:

> Live demo at [weather-app.vancelongwill.now.sh](https://weather-app.vancelongwill.now.sh)

#### Features:

##### Stack :computer:

- [Next.js](https://nextjs.org) Node/React framework supporting SSR (the first row in the ForecastList table is server-side rendered)
- [Zeit now]() for serverless deployment
- [React]() for a view library
- [Antd]() design/ui library for high quality components (NB: [babel-plugin-import]() used to reduce bundle size by importing css as required)
- [Styled-components]() CSS-in-JS solution for easily extending component based styles

##### Code Quality :microscope:

- Static type checking with [Typescript]()
- Linting with [tslint]() for typescript and [stylelint]() for styled-components css template literals
- Code formatting via [prettier]() to ensure a consistent style
- Enforces the javascript standard code style [standardjs](https://standardjs.com)
- [Husky]() & [lint-staged]() powered pre-commit hook to prevent non-compliant commits entering the codebase
- [Semantic commit messages](https://seesparkbox.com/foundry/semantic_commit_messages) making the git commit history a readable changelog
- HTML structuring best practices

##### Testing :white_check_mark:

- [Jest]() testing framework/test runner
- [Enzyme]() for rendering react components
- [Enzyme-to-json]() for human readable snapshot tests
- [Storybook](https://storybook.js.org) for developing components in isolation
- [redux-devtools]() enabled for easy redux debugging in browser

###### Coverage Report

File                      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------------------|----------|----------|----------|----------|-------------------|
All files                 |    90.32 |    78.57 |    82.61 |    91.53 |                   |
 __test__                 |      100 |      100 |      100 |      100 |                   |
  stateStub.ts            |      100 |      100 |      100 |      100 |                   |
 actions                  |      100 |      100 |      100 |      100 |                   |
  forecastActions.ts      |      100 |      100 |      100 |      100 |                   |
  index.ts                |        0 |        0 |        0 |        0 |                   |
 components/ForecastItem  |      100 |      100 |      100 |      100 |                   |
  ForecastItem.tsx        |      100 |      100 |      100 |      100 |                   |
  index.tsx               |        0 |        0 |        0 |        0 |                   |
 components/ForecastList  |      100 |      100 |      100 |      100 |                   |
  ForecastList.tsx        |      100 |      100 |      100 |      100 |                   |
 components/PageContainer |      100 |      100 |      100 |      100 |                   |
  PageContainer.tsx       |      100 |      100 |      100 |      100 |                   |
 components/Search        |    78.57 |      100 |    66.67 |    83.33 |                   |
  Search.tsx              |    78.57 |      100 |    66.67 |    83.33 |             32,33 |
 reducers                 |      100 |      100 |      100 |      100 |                   |
  forecastReducer.ts      |      100 |      100 |      100 |      100 |                   |
 sagas                    |     87.5 |      100 |       50 |     87.5 |                   |
  forecastSagas.ts        |     87.5 |      100 |       50 |     87.5 |                33 |
 utils                    |    77.78 |        0 |    66.67 |       75 |                   |
  api.ts                  |    77.78 |        0 |    66.67 |       75 |              9,14 |


### Setup

1. clone this repo
2. run `npm install`
3. start the dev server with `npm run dev`

#### Available scripts

- `npm run types` - typescript type check (also performed on starting the server)
- `npm test` - run all project tests
- `npm test:watch` - run all project tests and watch for changes
- `npm test:coverage` - generate a test coverage report
- `npm run format` - lint & format code
- `npm run lint` - only lint
- `npm run lint:fix` - lint code and autofix where possible
- `npm run lint:css` - only lint css template literals
- `npm run storybook` - start the storybook instance

- `npm run build` - build a production bundle
- `npm run start` - start a production server
- `npm run dev` - start the development server with HMR
- `npm run export` - build a static render of the app
- `npm run deploy` - build a static render of the app and deploy it to github pages
