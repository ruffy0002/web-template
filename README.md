# Web template

This project provides multiple web project templates. Zip and download one of the folders listed below

> ### Compilation Errors
>
> -   If the project is throwing errors when compiling, go to each package.json and remove the '^' sign from the version number of _each_ package. This would compile the project to the versions of packages it was tested with (Instead of latest versions of the packages)
> -   If your project is installing projects from a private repo for npm, delete the yarn.lock files

## Frontend only (frontend-only)

Customized Create react project (3.4.0) with settings from [this post](https://www.sitepoint.com/react-with-typescript-best-practices/), and some additional customization

This includes:

1. Typescript (Type-checking)
2. Prettier (Enforced code formatting)
3. ESLint (Code smells)

Besides those from the post, additional customization include

1. Customization of prettier rules

2. Setting of env variables

    - Default port 80
    - Setting src/ folder as the NODE_PATH
    - Default to no source maps generated (Without this turned off, your source code goes into production when packaged)

3. Removed CRA's default page (Cleaned up images used for this), replaced with BrowserRouter

4. Added custom libraries
    - react-icons
