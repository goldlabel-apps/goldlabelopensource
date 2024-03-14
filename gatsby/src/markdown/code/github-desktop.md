---
order: 485
slug: "/code/github-desktop"
parentSlug: "/code"
title: "GitHub Desktop"
description: "Creating and managing submodules"
icon: "github"
image: "/png/git.png"
keywords: "How, macOS, Git submodules, git"
---
> How do you create and manage submodules in GitHub Desktop on mac?

### By following these steps, you can create, manage, and update submodules in GitHub Desktop on macOS.

### 1. Install GitHub Desktop:
   If you haven't already, download and install GitHub Desktop from the official GitHub website.

### 2. Clone the Repository:
   - Open GitHub Desktop.
   - Clone the repository that contains submodules by clicking on "File" > "Clone Repository" and selecting the repository from the list or providing its URL.

### 3. Open Repository in Terminal:
   - After cloning the repository, navigate to the repository's directory using the Terminal app on your Mac.

### 4. Add Submodules:
   - Use the following command to add a submodule to your repository:
     ```
     git submodule add <submodule-repository-url> <path-to-submodule-directory>
     ```
     For example:
     ```
     git submodule add https://github.com/example/submodule.git path/to/submodule
     ```
   - After adding the submodule, stage the changes:
     ```
     git add .
     ```
   - Commit the changes:
     ```
     git commit -m "Added submodule"
     ```
   - Push the changes to the remote repository:
     ```
     git push
     ```

### 5. Manage Submodules in GitHub Desktop:
   - Open GitHub Desktop.
   - You should see the changes related to the addition of the submodule.
   - Commit the changes by providing a summary and description.
   - Push the changes to the remote repository.

### 6. Update Submodules:
   - To update submodules to the latest commit in their respective repositories, navigate to the repository directory in the Terminal and execute:
     ```
     git submodule update --remote
     ```
   - Then commit and push the changes as usual.

### 7. Cloning a Repository with Submodules:
   - If you're cloning a repository that contains submodules, GitHub Desktop should automatically initialize and fetch the submodules.
   - If not, you can manually initialize and fetch submodules by navigating to the repository directory in Terminal and executing:
     ```
     git submodule update --init --recursive
     ```

### 8. Updating Submodules in GitHub Desktop:
   - When the parent repository is updated, GitHub Desktop should reflect the changes in the submodules. If not, you can manually update submodules as described in step 6.
