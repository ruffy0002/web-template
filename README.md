## Setup

Before starting, please install yarn globally onto your PC (Please do not use npm with this project)
[https://yarnpkg.com/getting-started/install](https://yarnpkg.com/getting-started/install)

This project was designed to be used with VSCode. Please install the following extensions for VSCode:

1. ESLint _by Dirk Baeumer_ (dbaeumer.vscode-eslint, tested with v2.1.1)
2. Prettier - Code formatter _by Esben Petersen _(esbenp.prettier-vscode, tested with v3.20.0)
3. stylelint _by stylelint_ (stylelint.vscode-stylelint, tested with 0.84.0)

The following extensions are recommended as well:

1. Close HTML/XML tag _by Compulim_ - Just to close html tags
2. React-Native/React/Redux snippets for es6/es7 _by EQuimper_ (equimper.react-native-react-redux, used v2.0.3) - Shortcuts for frequently typed codes
3. Automatic command performer _by Gabriel Woitechen_ (woitechen.auto-command-performer, used v1.0.0) - With this project's config, this runs both yarn server & client when u open VSCode
4. Bracket Pair Colorizer 2 _by CoenraadS_ (coenraads.bracket-pair-colorizer-2, used 0.0.29) - Colors matching brackets in your code

> ### Compilation Errors
>
> If the project is throwing errors when compiling, go to each package.json and remove the '^' sign from the version number of _each_ package. This would compile the project to the versions of packages it was tested with (Instead of latest versions of the packages, though the yarn.lock file should prevent this)
>
> If your project is installing projects from a private repo for npm, delete the yarn.lock files

## Project intro

Customized Create react project (3.4.0) with settings from [this post](https://www.sitepoint.com/react-with-typescript-best-practices/)

The project was also customized with the following:

1. Typescript (Type-checking, generated from CRA settings)
2. Prettier (Enforced code formatting)
3. ESLint (Code smells)

Besides those from the post, additional customization include

1. Customization of prettier rules

2. Setting of env variables

    - Default port 80
    - Setting src/ folder as the NODE_PATH
    - Default to no source maps generated (Without this turned off, your source code goes into production when packaged)
    - Does not open browser on "start" being executed

3. Removed CRA's default page (Cleaned up images used for this), replaced with BrowserRouter

4. Added custom libraries

    - [react-icons](https://react-icons.netlify.com/#/)
    - [@elastic/eui](https://elastic.github.io/eui/#/) (Please use the React components in this library and its design system for consistent UI design)

5. Stylelint (CSS Code smells, with rules turned off for prettier)

6. Custom VSCode settings

    - Includes a setting to auto run "yarn server & yarn client" if you install the 'Automatic Command Performer' VSCode extension

7. Base page is default 100% height
