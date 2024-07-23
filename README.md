# nextjs-team-template

![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC.svg?logo=typescript&style=flat)
![React](https://img.shields.io/badge/React-18.3.3-blue)
![Nextjs](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Node](https://img.shields.io/badge/Node-20.14.10-green)
![Python](https://img.shields.io/badge/-Python-F9DC3E.svg?logo=python&style=flat)
![Python Version](https://img.shields.io/badge/python-3.11-blue)

## Description

### Branch Naming Rules

| Branch Name                    | Description            | Supplemental |
| ------------------------------ | ---------------------- | ------------ |
| main                           | latest release         |              |
| dev/main                       | latest for development |              |
| hotfix/{module name}/{subject} | Hotfix branch          |              |
| sandbox/{anything}             | test code, etc.        |              |

### Basic Branch Operation Rules

-   Work is branched from each latest branch
-   Delete working branches after merging
-   Review as much as possible (have someone do it for you)
-   Build, deploy, etc. are discussed separately.

## Front End

The react app is created using [next.js](https://nextjs.org) because it is the recommended library on the [react getting started](https://react.dev/learn/start-a-new-react-project).

1. **Install dependencies:**

    Install NodeJS
    [node](https://nodejs.org/en/download/package-manager)

    Make sure you have [pnpm](https://pnpm.io/) installed. If not, install it using:

    ```sh
    cd frontend
    npm install -g pnpm
    ```

    ```
    nodenv install 20.12.2
    nodenv local 20.12.2
    node -v
    ```

    This should return v20.12.2

    Then, install the project dependencies:

    ```sh
    pnpm install
    pnpm run dev
    ```

Make sure to have .env file on `frontend/.env`

```bash

```

## Dependencies

| Package             | Version |
| ------------------- | ------- |
| next                | 14.2.4  |
| react               | ^18.3.1 |
| react-dom           | ^18.3.1 |
| tailwind-merge      | ^2.3.0  |
| tailwindcss-animate | ^1.0.7  |
| eslint              | ^8.57.0 |
| postcss             | ^8.4.39 |
| tailwindcss         | ^3.4.4  |
| typescript          | ^5.5.3  |

## Commit message

Please refer to the following template for the commit message.

```plaintext
🐞 Bugs and Performance
#🐛 :bug: bug fixes.
#🚑 :ambulance: fix a critical bug
#🚀 :rocket: performance improvements
#💻 Code quality and style
#👍 :+1: feature improvements
#♻️ :recycle: refactoring
#👕 :shirt: Lint error fixes and code style fixes

🎨 UI/UX and design
#✨ :sparkles: add new features
#🎨 :art: design changes only

🛠️ Development Tools and Settings.
#🚧 :construction: WIP (Work in Progress)
#⚙ :gear: config change
#📦 :package: add new dependency
#🆙 :up: update dependency packages, etc.

documentation and comments.
#📝 :memo: fix wording
#📚 :books: documentation
#💡 :bulb: add new ideas and comments

🛡️ security
#👮 :op: security-related improvements

🧪 testing and CI.
#💚 :green_heart: fix/improve testing and CI

🗂️ file and folder manipulation.
#📂 :file_folder: Folder manipulation
#🚚 :truck: file movement

#📊 :log: logging and tracking
#💢 :anger: conflicts
#🔊 :loud_sound: add log
#🔇 :mute: log deleted.
#📈 :chart_with_upwards_trend: add analytics or tracking code

💡 Other.
#🧐 :monocle_face: code reading and questions.
#🍻 :beers: code that was fun to write.
#🙈 :see_no_evil: .gitignore addition.
#🛠️ :hammer_and_wrench: bug fixes and basic problem solving
```
