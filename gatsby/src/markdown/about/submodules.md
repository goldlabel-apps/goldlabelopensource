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