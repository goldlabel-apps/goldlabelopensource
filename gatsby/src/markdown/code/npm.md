---
order: 450
slug: "/code/npm"
parentSlug: "/code"
title: "NPM Packages"
description: "git submodule add <isomorphic_repository_url>"
icon: "github"
image: "/png/git.png"
keywords: "How, Key Concept, Git, GitHub, NPM"
---
> Creating an npm package with a GitHub repository involves a few steps. Here's a basic guide

1. **Set Up Your GitHub Repository:**
   - Create a new repository on GitHub.
   - Initialize it with a README or add a .gitignore if needed.

2. **Set Up Your npm Package:**
   - Create a new directory for your npm package on your local machine.
   - Inside the directory, run `npm init` to create a `package.json` file. Follow the prompts to fill in details about your package.
   - Ensure that the `name` field in your `package.json` matches the repository name on GitHub.

3. **Write Your Code:**
   - Write the code for your npm package inside your local directory.

4. **Publish Your Package to npm:**
   - Run `npm login` to log in to your npm account.
   - Once logged in, run `npm publish`. This will publish your package to the npm registry.

5. **Link Your GitHub Repository with npm:**
   - Run `npm version <update_type>` where `<update_type>` is either `patch`, `minor`, or `major` depending on the version update you want.
   - Push your changes to GitHub with `git push origin master --tags`. This will push your code to GitHub along with the new version tag.

6. **Set Up GitHub Actions (Optional but recommended):**
   - You can set up GitHub Actions to automatically publish your package to npm whenever you push a new release tag. Create a workflow file (e.g., `.github/workflows/npm-publish.yml`) in your GitHub repository with appropriate actions to publish your package.

7. **Update Your Package:**
   - Make changes to your code as necessary.
   - Increment the version number in your `package.json`.
   - Commit your changes and push them to GitHub.
   - Publish the new version to npm with `npm publish`.

That's it! Your npm package is now linked to your GitHub repository, and whenever you make changes and push them to GitHub, you can publish new versions of your package to npm.