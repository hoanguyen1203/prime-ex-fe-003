# Project - Typing speed tester
- Typing speed tester using ES6

- Submitted by: Hoa Nguyen
- Time spent: 3 Hours

## Usage
### Step 1 : Install and Update script using wget
`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash`


### Step 2 : Install node
`nvm install node`


### Step 3 : Install serve
`npm install serve`

### Step 4 : Set up information about project name, version, ... and create package.json
`npm init`

### Step 5 : Install Babel
`npm install -D babel-cli`

### Step 6 : Install env preset and create .babelrc file
- `npm install -D babel-preset-env`
- Create your `.babelrc` file:
    - `touch .babelrc`
- And write the following:
    - `{"presets": ["env"]}`

### Step 7 : Change package.json
- Open folder package.json add under line "test":
    - `"build": "babel src -d build",`
    - `"start": "serve"`

### Step 4 : Run the Babel command
`npm run build`

### Step 4 : Run Project
`npm start` 


# User Stories
- When user typing will be start, after that when user correct all text --> stop timer
- Click start over to clear text & reset timer
- The border of text will be tranform to green if correct & red if un-correct

## Preview how it work

![Typing speed tester!](https://github.com/hoanguyen1203/prime-ex-fe-003/blob/master/typing-speed-tester.gif)


# License
Copyright [2019] [HoaNguyen] Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.