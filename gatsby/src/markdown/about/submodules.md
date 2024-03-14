---
order: 480
slug: "/about/submodules"
parentSlug: "/about"
title: "Git Submodules"
description: "git submodule add <isomorphic_repository_url>"
icon: "github"
image: "/png/git.png"
keywords: "How, Key Concept, Git subtree, Git submodules, git"
---
> Imagine you have a github repository called `your-repo`.  In the folder `/path/dir/` you might like to have another repository called `other-repo`. You can develop separately and thus keep your app updated when `other-repo` changes

### Using Git submodules or Git subtree

How to do this? you can use Git submodules or Git subtree. Here's a general outline of how you could set this up using submodules

1. **Initialize Git Repository in `your-repo` if not already done**:
   If your `your-repo` repository isn't already a Git repository, initialize it:

   ```bash
   cd /path/to/your-repo
   git init
   ```

2. **Add `other-repo` Repository as a Submodule**:
   Navigate to the `/path/dir/` directory and add the `other-repo` repository as a submodule:

   ```bash
   cd /path/to/your-repo/path/dir/
   git submodule add <other-repo>
   ```

   Replace `<other-repo>` with the URL of your `other-repo` repository.

3. **Commit the Changes**:
   After adding the submodule, commit the changes to the `your-repo` repository:

   ```bash
   git commit -am "Added other-repo submodule"
   ```

4. **Updating the Submodule**:
   To update the `other-repo` submodule within `your-repo`, navigate to the submodule directory and pull the changes:

   ```bash
   cd /path/to/your-repo/gatsby/src/isomorphic
   git pull origin master
   ```

5. **Commit the Updated Submodule Reference**:
   After updating the submodule, you need to commit the changes in the main repository to record the updated reference to the submodule:

   ```bash
   cd /path/to/goldlabelopensource/path/dir/other-repo
   git commit -am "Updated other-repo submodule"
   ```

With this setup, you can develop `other-repo` separately, and changes made in `other-repo` will be tracked within `your-repo` as a submodule

You can push changes from `other-repo` independently of `your-repo`, and other users who clone `your-repo` will also get the `other-repo` submodule.

___


The `.gitmodules` file in a Git repository is used to define submodule configurations. Submodules are essentially nested Git repositories within your main Git repository. They allow you to include external repositories as a subdirectory of your main project. 

Here's how it works:

1. **Adding a submodule**: When you add a submodule to your Git repository using the `git submodule add` command, Git creates an entry in the `.gitmodules` file. This entry contains the URL of the submodule repository and the path where the submodule will be located within your main repository.

2. **`.gitmodules` structure**: The `.gitmodules` file is typically structured like an INI file. Each submodule entry contains configuration details like the submodule's URL, path, and optionally other settings like branch, commit, etc.

3. **Tracking changes**: When you clone a repository with submodules, or when you fetch changes from a repository that contains submodules, Git doesn't automatically update the submodules. Instead, it maintains a reference to a specific commit in each submodule. This means that when you initially clone a repository with submodules, you need to run `git submodule update --init --recursive` to fetch the submodule contents.

4. **Updating submodules**: To update the contents of submodules to the latest commit, you need to navigate to the submodule directory and run `git pull` or `git checkout` commands. Alternatively, you can use `git submodule update --remote` to fetch the latest changes for all submodules.

5. **`.git/config`**: Alongside the `.gitmodules` file, Git also tracks submodule configurations in the `.git/config` file of the main repository. This file contains information about the commit of the submodule currently checked out in your working tree.

In summary, the `.gitmodules` file acts as a configuration file for submodules within a Git repository. It helps Git manage the relationships between the main repository and its submodules, including their URLs, paths, and other relevant settings.