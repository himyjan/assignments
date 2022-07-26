Introduction to Git

First Commits

Git Concepts

#What is a "commit" in Git?

A version of your project's files that you've stored in the repository.

#What does it mean when we say a version control system is "distributed"?

Every copy of the repository stores all the old versions of the files; they're not just stored on one central server.

#What do all git commands start with?

git

#How do you specify command line options to Git?

A single dash ("-") followed by a letter, or a double-dash ("--") followed by a word.

#What does a version control system do?

It keeps old versions of your files.

#What is the value of a distributed version control system, as opposed to a centralized system?

If something happens to the version history on one repository, the history on any other copy of the repository can be used to restore it.

---

First Commits

Challenge Task 1 of 4

#We're working on our first novel, and we want to track our changes in Git. But first, we need to change into the directory where our text files are. Using this shell prompt, change into the novel directory.
https://teamtreehouse.com/community/1st-code-challenge-for-introduction-to-git

cd novel

#Initialize a new Git repo here in the current directory.
https://teamtreehouse.com/community/initialize-a-new-git-repo-here-in-the-current-directory

git init

#Add the file chapter1.txt to the staging area for committing.
https://teamtreehouse.com/community/bummer-you-dont-need-to-pass-any-commandline-options

git add chapter1.txt

#Finally, commit the staged file, with a message of "Add chapter 1". Rather than letting Git launch an editor, specify your commit message on the command line: use the -m command line option, and specify your message between "quotation marks".
https://teamtreehouse.com/community/bummer-you-dont-need-to-pass-any-commandline-options

git commit -m "Add chapter1.txt"

#In the command line below, we're still inside the "novel" repo. We've added a dramatic plot twist to chapter1.txt. Add the modified file to the staging area for committing.
https://teamtreehouse.com/community/in-the-command-line-below-were-still-inside-the-novel-repo-weve-added-a-dramatic-plot-twist-to-chapter1txt-add

git add chapter1.txt

#Commit the staged changes, with the message "Add plot twist". Use the -m option instead of the editor.
https://teamtreehouse.com/community/hey-guys-im-stuck-on-this-git-introduction-challenge

git commit -m "Add plot twist"

---

File Status

#We've updated one file in the repo, and created another file. Run the git command that will show you the status of the repo's files.

git status

#Stage chapter1.txt.

git add chapter1.txt

#Now stage chapter2.txt.

git add chapter2.txt

#Run the "git diff" command again, but this time add the option that will show you the staged changes. (When you have the command right, changes to both the file that was previously tracked and the file that was previously untracked will be shown.)

git diff

#Now run the git command that will show you the changes made within the files. (Changes to the tracked file will be shown, but not the untracked file.)

git diff --cached

#Finally, commit all the staged files. Use the -m flag, with any commit message you like.

git commit -m "This commit"

---

Managing Committed Files

Removing Files

#We've committed an appendix.txt file to the repo, but we decided we don't want it any more. Run the git command to remove the file.
https://teamtreehouse.com/community/help-with-git

git rm appendix.txt

#Run the command to display the status of the repo's files.

git status

#Commit the file removal. Use the -m flag, with any commit message you like.

git commit -m "appendix.txt"

---

Moving files

#We accidentally committed a file with the wrong file name extension. Run the git command to move the "chapter3.text" file to the name "chapter3.txt".
https://teamtreehouse.com/community/git-mv-command-challenge-1-of-3-getting-error-need-to-specify-the-file-to-move

git mv chapter3.text chapter3.txt

#Run the command to display the status of the repo's files.

git status

#Commit the file renaming. Use the -m flag, with any commit message you like.

git commit -m "chapter3.txt"

---

UnStaging Files

#We staged a change to a file, but we've decided it wasn't a good idea. Run "git status" to display the staged file names.

git status

Running git status gave the following output:
```
On branch master Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   chapter3.txt
```
Let's run the command it suggests to unstage the file.

git reset HEAD chapter3.txt

---

Discarding File Changes

#We've unstaged chapter3.txt, but the file is still modified in the working directory. Run "git status" to display its status.

git status

#Running git status gave the following output:
```
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   chapter3.txt

no changes added to commit (use "git add" and/or "git commit -a")
```
Let's run the command it suggests to discard the changes to chapter3.txt.

git checkout -- chapter3.txt

---

Recovering Deleted Files

#Oops! We accidentally deleted some files from the working directory! Run "git status" to see which ones.

git status

#Running git status gave the following output:
```
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        deleted:    chapter2.txt
        deleted:    chapter3.txt

no changes added to commit (use "git add" and/or "git commit -a")
```
We want to bring chapter2.txt back, and we can do so by "discarding the change" to the file. ("Discarding" the deletion will bring the file back.) Run the command suggested in the output to discard changes to chapter2.txt.

git checkout -- chapter2.txt

#Now git status gives this output:
```
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        deleted:    chapter3.txt

no changes added to commit (use "git add" and/or "git commit -a")
```
We want to bring chapter3.txt back as well. Run the necessary command.

git checkout -- chapter3.txt

---

Undoing Commits

#We've decided we need to get back the appendix.txt file that we deleted before. First, we need to find the commit where we removed it. Run the command that will show the log of all prior commits.

git log

#Running git log gave the following output:
```
commit 70692324faa22f3eaeeb4d80e0958f349f4155bc
Author: Treehouse Student <me@example.com>
Date:   Fri Jan 19 13:13:30 2018 -0700

    Fix file name

commit 962f0e9138bab1ebb5b3e21d18a747fe18236714
Author: Treehouse Student <me@example.com>
Date:   Fri Jan 19 12:57:04 2018 -0700

    Remove appendix
...
```
We want to bring appendix.txt back, which we can do by reverting the commit with the message "Remove appendix". Find the SHA checksum for that commit, and use it in the appropriate command. (This command triggers a new commit, so normally, an editor would pop up to allow you to edit that new commit's message. For this challenge, though, we just want you to run the command.)

git revert 962f

---

GitHub and Other Remote Repositories

Cloning Repositories

#Let's try cloning a Git repository. But this time, instead of cloning a local repo, we'll clone one from the Internet.

Here's a terminal on a different computer. Run the "git clone" command. Instead of a local directory name to clone from, give it a URL of "https://github.com/treehouse-courses/novel.git". By default, this will clone to a local directory named novel, but you can specify a different directory name after the URL, if you want.

git clone https://github.com/treehouse-courses/novel.git

---

Pulling Commits

#We're here in our local clone of the https://github.com/treehouse-courses/novel.git repo. Before we begin work, we want to make sure we have any changes that have been committed to the remote repo.

To ensure the remote repo is set up, run the git remote command.

git remote

#The git remote command returned the following output:
```
origin
```
It looks like the remote repo is set up. Run the git command to pull changes from it.

git pull

---

Adding Remotes

#We've created a local repo to hold our fan fiction, and now we'd like to push it to GitHub. We've created a repo on GitHub as well, with the URL https://github.com/treehouse-courses/fan-fiction.git.

GitHub is recommending we run this command to add the remote repo:
```
git remote add origin https://github.com/treehouse-courses/fan-fiction.git
```
Run that command now.

git remote add origin https://github.com/treehouse-courses/fan-fiction.git

#Next, GitHub recommends that you push your existing commits to the remote repo. They suggest running the command:
```
git push -u origin master
```
That will push to the new origin remote from the master branch. The -u option will set up the git push command to push to the given remote from the given branch by default. Run the suggested command now.

git push -u origin master

---

Introduction to Git Review

#What command will give you a list of available remote repositories?

git remote

#Which command will show you the lines of an unstaged file that have been changed since the previous commit?

git diff

#Let's say you want to unstage a file, but you don't remember the command to do it. What command will give you a hint for what you should type?

#Which of these Git subcommands can set up a new repository?

git init

#Which command will show you the lines of an unstaged file that have been changed since the previous commit?

git diff

#Which command will show you lines that have changed since the last commit in staged files?

git diff --staged

#Why is Git referred to as a "distributed" version control system?

There is no "central" repository, at least not at an architectural level. Every clone of a repo has a full copy of the version history.

#What command retrieves commits from a remote repo?

git pull

#What command sends commits to a remote repository?

git push

#What type of software is Git?

A version control system

#What are Git commits?

They represent a version, or snapshot, of your files as they appeared at one point in time

#What is a Git repository?

The collection of all the versions of your project's files

#Which subcommand stages files that are already being tracked by Git?

git add

#What are the 40-character strings of letters and numbers that appear in "git log" called?

Commit SHAs

#When you want to discard changes to a modified file, but don't remember the command to do so, what command can you run to get a hint for what to type?

git status

---

HTML Basics

Getting Stßarted with HTML

Headings and Paragraphs Challenge

Challenge Task 1 of 3

#Set the main headline to a heading level 1 element. Then, place the line of text below the main headline inside opening and closing paragraph tags.
```
<!DOCTYPE html>
<html>
  <head>
    <link href="styles.css" rel="stylesheet">
    <title>Headings and Paragraphs</title>
  </head>
  <body>
    This is the Main Headline!
    Oat cake chocolate bar jelly. Tootsie roll cheesecake sweet gummies candy cookie pudding cotton candy carrot cake. Souffl&eacute; caramels brownie oat cake cheesecake.

    Level 2 Heading
    Ice cream candy canes muffin icing pudding muffin jelly topping carrot cake. I love gingerbread dessert jujubes bonbon cupcake tootsie roll I love. Oat cake topping caramels I love cupcake oat cake chocolate topping donut.

    Level 3 Heading
    Cotton candy topping halvah sugar plum gummies souffl&eacute;. Ice cream danish donut sugar plum. Macaroon carrot cake gummies. Caramels oat cake chocolate cake.
  </body>
</html>
```

```
<!DOCTYPE html>
<html>
  <head>
    <link href="styles.css" rel="stylesheet">
    <title>Headings and Paragraphs</title>
  </head>
  <body>
    <h1>his is the Main Headline!</h1>
    <p>TOat cake chocolate bar jelly. Tootsie roll cheesecake sweet gummies candy cookie pudding cotton candy carrot cake. Souffl&eacute; caramels brownie oat cake cheesecake.</p>

    Level 2 Heading
    Ice cream candy canes muffin icing pudding muffin jelly topping carrot cake. I love gingerbread dessert jujubes bonbon cupcake tootsie roll I love. Oat cake topping caramels I love cupcake oat cake chocolate topping donut.

    Level 3 Heading
    Cotton candy topping halvah sugar plum gummies souffl&eacute;. Ice cream danish donut sugar plum. Macaroon carrot cake gummies. Caramels oat cake chocolate cake.
  </body>
</html>
```

#Next, set the subheading to a heading level 2 element and the line of text below it to a paragraph element.

```
<!DOCTYPE html>
<html>
  <head>
    <link href="styles.css" rel="stylesheet">
    <title>Headings and Paragraphs</title>
  </head>
  <body>
    <h1>his is the Main Headline!</h1>
    <p>TOat cake chocolate bar jelly. Tootsie roll cheesecake sweet gummies candy cookie pudding cotton candy carrot cake. Souffl&eacute; caramels brownie oat cake cheesecake.</p>

    <h2>Level 2 Heading</h2>
    <p>Ice cream candy canes muffin icing pudding muffin jelly topping carrot cake. I love gingerbread dessert jujubes bonbon cupcake tootsie roll I love. Oat cake topping caramels I love cupcake oat cake chocolate topping donut.</p>

    Level 3 Heading
    Cotton candy topping halvah sugar plum gummies souffl&eacute;. Ice cream danish donut sugar plum. Macaroon carrot cake gummies. Caramels oat cake chocolate cake.
  </body>
</html>
```

#Finally, set the third heading to a heading level 3 element and the text below it to a paragraph.

```
<!DOCTYPE html>
<html>
  <head>
    <link href="styles.css" rel="stylesheet">
    <title>Headings and Paragraphs</title>
  </head>
  <body>
    <h1>his is the Main Headline!</h1>
    <p>TOat cake chocolate bar jelly. Tootsie roll cheesecake sweet gummies candy cookie pudding cotton candy carrot cake. Souffl&eacute; caramels brownie oat cake cheesecake.</p>

    <h2>Level 2 Heading</h2>
    <p>Ice cream candy canes muffin icing pudding muffin jelly topping carrot cake. I love gingerbread dessert jujubes bonbon cupcake tootsie roll I love. Oat cake topping caramels I love cupcake oat cake chocolate topping donut.</p>

    <h3>Level 3 Heading</h3>
    <p>Cotton candy topping halvah sugar plum gummies souffl&eacute;. Ice cream danish donut sugar plum. Macaroon carrot cake gummies. Caramels oat cake chocolate cake.</p>
  </body>
</html>
```

---

List and Link Challenge

#Convert the text inside the <body> tags into an unordered list.
```
<!DOCTYPE html>
<html>
  <head>
    <title>Lists and Links</title>
  </head>
  <body>

  Cakes
  Pies
  Candy

  </body>
</html>
```
```
<!DOCTYPE html>
<html>
  <head>
    <title>Lists and Links</title>
  </head>
  <body>

  <ul>
    <li>Cakes</li>
    <li>Pies</li>
    <li>Candy</li>
  </ul>

  </body>
</html>
```

#Make the text inside each list item a link. The first item should link to cakes.html, the second to pies.html and the third to candy.html.

```
<!DOCTYPE html>
<html>
  <head>
    <title>Lists and Links</title>
  </head>
  <body>

  <ul>
    <li><a href="cakes.html">Cakes</a></li>
    <li><a href="pies.html">Pies</a></li>
    <li><a href="candy.html">Candy</a></li>
  </ul>

  </body>
</html>
```

---

Structuring Your Content

Structuring Content Challenge

#Place the ul, h1 and p elements at the top of the page inside an element that represents a group of introductory content.
```
<!DOCTYPE html>
<html>
  <head>
    <link href="styles.css" rel="stylesheet">
    <title>My Portfolio</title>
  </head>
  <body>
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <h1>My Web Design &amp; Development Portfolio!</h1>
    <p>A site featuring my latest work.</p>

    <h2>Welcome</h2>
    <p>Fusce semper id ipsum sed scelerisque. Etiam nec elementum massa. Pellentesque tristique ex ac ipsum hendrerit, eget feugiat ante faucibus.</p>
    <ul>
      <li><a href="#">Recent project #1</a></li>
      <li><a href="#">Recent project #2</a></li>
      <li><a href="#">Recent project #3</a></li>
    </ul>

    <p>&copy; 2017 My Portfolio</p>
    <p>Follow me on <a href="#">Twitter</a>, <a href="#">Instagram</a> and <a href="#">Dribbble</a></p>
  </body>
</html>
```
```
<!DOCTYPE html>
<html>
  <head>
    <link href="styles.css" rel="stylesheet">
    <title>My Portfolio</title>
  </head>
  <body>
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <h1>My Web Design &amp; Development Portfolio!</h1>
    <p>A site featuring my latest work.</p>

    <h2>Welcome</h2>
    <p>Fusce semper id ipsum sed scelerisque. Etiam nec elementum massa. Pellentesque tristique ex ac ipsum hendrerit, eget feugiat ante faucibus.</p>
    <ul>
      <li><a href="#">Recent project #1</a></li>
      <li><a href="#">Recent project #2</a></li>
      <li><a href="#">Recent project #3</a></li>
    </ul>

    <p>&copy; 2017 My Portfolio</p>
    <p>Follow me on <a href="#">Twitter</a>, <a href="#">Instagram</a> and <a href="#">Dribbble</a></p>
  </body>
</html>
```

---

Grouping Content Challenge

#Group each set of h3 and p elements using an element that describes self-contained pieces of content.
```
<!DOCTYPE html>
<html>
  <head>
    <link href="styles.css" rel="stylesheet">
    <title>My Blog</title>
  </head>
  <body>
    <header>
      <h1>My Web Design &amp; Development Blog!</h1>
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">Recent Work</a></li>
        </ul>
      </nav>
    </header>

    <h2>The Main Articles</h2>

    <h3>My Favorite HTML Courses</h3>
    <p>Fusce semper id ipsum sed scelerisque. Etiam nec elementum massa. Pellentesque tristique ex ac ipsum hendrerit, eget <a href="#">feugiat ante faucibus</a>.</p>

    <h3>10 Handy CSS Features</h3>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci lßuctus et <a href="#">ultrices posuere</a>.</p>

    <h3>Follow Me on Social Media:</h3>
    <ul>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Facebook</a></li>
      <li><a href="#">LinkedIn</a></li>
    </ul>

    <footer>
      <p>&copy; 2017 My Blog</p>
    </footer>
  </body>
</html>
```
```
<!DOCTYPE html>
<html>
  <head>
    <link href="styles.css" rel="stylesheet">
    <title>My Blog</title>
  </head>
  <body>
    <header>
      <h1>My Web Design &amp; Development Blog!</h1>
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">Recent Work</a></li>
        </ul>
      </nav>
    </header>

    <h2>The Main Articles</h2>

    <h3>My Favorite HTML Courses</h3>
    <p>Fusce semper id ipsum sed scelerisque. Etiam nec elementum massa. Pellentesque tristique ex ac ipsum hendrerit, eget <a href="#">feugiat ante faucibus</a>.</p>

    <h3>10 Handy CSS Features</h3>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et <a href="#">ultrices posuere</a>.</p>

    <h3>Follow Me on Social Media:</h3>
    <ul>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Facebook</a></li>
      <li><a href="#">LinkedIn</a></li>
    </ul>

    <footer>
      <p>&copy; 2017 My Blog</p>
    </footer>
  </body>
</html>
```

---

Structuring Your Content Review

#The first element inside a <section> should be:

a heading  (<h1>-<h6>) that indicates what the section is about

#Please fill in the correct answer in each blank provided below.
https://teamtreehouse.com/community/the-element-contains-content-thats-indirectly-related-to-the-main-content-of-the-page-3

The _(aside)_ element contains content that's indirectly related to the main content of the page.

#Which element should be used only when no other semantic element (like <article> or <aside>) is appropriate?

<div>

#Introductory content like the site logo, navigation and main heading should be placed inside which element?

<header>

#Markup that describes the meaning of content rather than define its presentation is:

semantic

#The content of a _____ element should be unique to the document; therefore, you should use it only once per page.

<main>

#Which element describes a self-contained piece of content, like a blog entry?

<article>

---

Images, Text and Links

Images and FilePaths Challenge

#Inside the <body>, display the image moon.jpg located inside a folder named img.
```
<!DOCTYPE html>
<html>
  <head>
    <title>The Moon</title>
  </head>
  <body>

  </body>
</html>
```
```
<!DOCTYPE html>
<html>
  <head>
    <title>The Moon</title>
  </head>
  <body>
    <img src="img/moon.jpg" />
  </body>
</html>
```

#Next, provide the browser alternative text describing the image.

```
<!DOCTYPE html>
<html>
  <head>
    <title>The Moon</title>
  </head>
  <body>
    <img src="img/moon.jpg" alt="text" />
  </body>
</html>
```

#Finally, add a caption that describes the image.
https://www.w3schools.com/tags/tag_figcaption.asp

```
<!DOCTYPE html>
<html>
  <head>
    <title>The Moon</title>
  </head>
  <body>
    <figure>
      <img src="img/moon.jpg" alt="text"  />
      <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
    </figure>
  </body>
</html>
```


---

Text Level Elements Challenge

#Add line breaks to the address in the second paragraph.
```ß
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Text</title>
  </head>
  <body>
    <p>Mike's favorite course is HTML Basics</p>
    <p>
      Mike T. Frog
      100 Lilypad Way
      Portland, OR 97227
    </p>
  </body>
</html>
```
```
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Text</title>
  </head>
  <body>
    <p>Mike's favorite course is HTML Basics</p>
    <p>
      Mike T. Frog</br>
      100 Lilypad Way</br>
      Portland, OR 97227</br>
    </p>
  </body>
</html>
```

#Give the text "Mike T. Frog" strong importance, using the element that displays text in bold.

```
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Text</title>
  </head>
  <body>
    <p>Mike's favorite course is HTML Basics</p>
    <p>
      <strong>Mike T. Frog</strong></br>
      100 Lilypad Way</br>
      Portland, OR 97227</br>
    </p>
  </body>
</html>
```

#Use the element that displays text in italic to add emphasis to the words "HTML Basics".

```
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Text</title>
  </head>
  <body>
    <p>Mike's favorite course is <em>HTML Basics</em></p>
    <p>
      <strong>Mike T. Frog</strong></br>
      100 Lilypad Way</br>
      Portland, OR 97227</br>
    </p>
  </body>
</html>
```

---

Going Further with HTML

Links and Paths Challenge

---

Email Links and Entities Challenge

---

Going Further with HTML Review

#Which of the following is an example of an HTML comment?

#What type of file path is the following link using?
<a href="../pets/doggos.html">

#The ___ attribute gives an element a unique identifier that can be used to navigate to a specific section of a page.

#Which paths work only when a website is uploaded to a web server or when you have a local web server running on your computer?

Root-relative

#Which characters are reserved for use in HTML code only?

#You can target any HTML element and change its appearance (like size, color and position) with:

---

Responsive Layouts
https://teamtreehouse.com/library/responsive-layouts

Responsive Theory
Quiz Question 1 of 3

#Which of the following best defines responsive web design?

Responsive web design is a collection of techniques for building websites that work on multiple screen sizes.

#In general, what are the three parts of responsive web design?

In general, responsive design consists of fluid grids, fluid images, and media queries.

#Why is responsive web design preferred over traditional techniques?

Maintaining multiple versions of the same website is not a sustainable strategy.

#Which of the following is a relative unit in CSS?

em

#Please fill in the correct answer in each blank provided below

Elements that use percentages are relative to their_(parent)_container

#Prior to responsive design, why did most web designers use fixed units for the width of web pages and layouts?

Web design was initially influenced by print design, where the medium is a known size. Additionally, there weren't as many screen sizes as there are today.

#Instead of fixed units like pixels, what are the units of responsive design?

Relative units like percentages or ems

#In general, what is a breakpoint?

Generally, any media query that adjusts the layout based on a certain width could be called a breakpoint.

#What is the practical cost of creating new breakpoints?

Each breakpoint slightly increases the complexity of design and code.


#Why should breakpoints be used in combination with fluid grids?

In a mobile first approach, a single column layout won't look good when stretched across a large monitor. The layout "breaks" and must be adjusted.

#A breakpoint should be created based on the width of popular screen sizes.

False

---

Media Queries

#What are media queries?

Media queries are CSS rules that include CSS code only when certain conditions are met.

#What is a media feature?

A media feature is the expression or set of conditions inside a media query.

#Which of the following is NOT a media feature?
Hint: You should use the MDN documentation on media features to find the answer.

pixel

#Consider the following media query:
```
@media only screen and (min-width: 768px)
```
There are expressions before and after the boolean operator and. When will this media query be applied?

The media query will be applied only if both expressions are true.

---
Responsive Patterns

#In general, how many columns should be included in a portrait-mode mobile layout?

Most mobile layouts are a single column, because they lend themselves to scrolling.

#In computer programming, two common boolean operators are "and" and "or". Media queries use the keyword "and", but how could a media query represent an "or" if there's no keyword for it?

Media queries can express an "or" by using a comma to separate two different media queries. If any one of the expressions returns true, then the whole media query is true. Here is an example of this:
```
@media only screen and (min-width: 768px),
       only screen and (min-width: 700px) and (orientation: landscape)
```


#Why is it important to create breakpoints based on content rather than based on popular device screen sizes?

If breakpoints are based on popular screen sizes, then they will not be ready for devices that have not yet been released.

#Responsive web design can be used with any kind of backend (PHP, Ruby, WordPress, etc) because the principles remain the same.

True

#What is flexbox?

Flexbox is a collection of CSS properties for adjusting page layout based on different screen sizes.

#Consider the following media query:
```
@media only screen and (min-width: 768px)
```
Will this media query be applied if the width of the browser is 768 pixels across?

Yes. The min-width media feature is inclusive, so a browser width that is equal to the min-width will make the media query true.

#Which of the following are acceptable values for the media feature orientation?

landscape

---
Responsive Patterns

---
Mobile-First CSS Layout
https://teamtreehouse.com/library/css-flexbox-layout
https://teamtreehouse.com/community/quiz:1632

Add a wrapper <div> around the content inside <body>. Give it the class 'container'.
```
<!DOCTYPE html>
<html>
    <head>
        <title>Getting Started with CSS Layout</title>
        <link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="page.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <header>
                <h1>Best City Guide</h1>
            </header>

            <div class="main">
                <h2>Welcome!</h2>
                <p>Dessert toffee chocolate lollipop fruitcake cake sweet. Pudding cotton candy chocolate pudding liquorice jelly marzipan. Muffin gummies topping lollipop. Caramels chocolate cake donut liquorice.</p>
                <p>Cake sesame snaps sweet tart candy canes tiramisu I love oat cake chocolate bar. Jelly beans pastry brownie sugar plum pastry bear claw tiramisu tootsie roll.</p>
            </div>

            <footer>
                <p>&copy;2015 Residents of The Best City.</p>
            </footer>
        </div>
	</body>
</html>
```

 Set the wrapper's width to 80% of the browser width. Then use margins to center the wrapper in the browser.
https://teamtreehouse.com/community/how-do-you-do-this-26
```
.container {
    width: 80%;
    margin: auto;
}
```

Quiz Question 1 of 6

#The element that centers a layout in the browser and keeps it from looking too wide or narrow is usually called a:

Wrapper

#In web design, a sticky footer is:

A footer that's forced to the bottom of the page regardless of the amount of content above it

#Which of the following best describes the "mobile first" layout approach?

Basic styles are served to mobile devices by default, then gradually adjusted for wider screens, using media queries.

#What does a CSS reset do?

It removes all browser inconsistencies to ensure that your layout displays as consistently as possible across all browsers.

#It's common to have more than one wrapper on a page. You can even have containers inside of containers.

True

#When do vertical margins collapse?

When there is no border, padding or content area to interrupt two touching margins.

---

React Basics

First Steps in React

JSX Review

Quiz Question 1 of 6

#Is using JSX with React optional?

Yes

#What is the purpose of curly braces { } in JSX?

They are used to evaluate JavaScript expressions

#Which of the following JSX snippets applies a class of 'container' to the div?

```
<div className="container">...</div>
```

#Please fill in the correct answer in each blank provided below.

Display the value of the petName variable inside the <p> tags.
```
const petName =  'Ernie';
const header = (
  <header>
    <p>I have a pet named _{petName}_.</p>
  </header>
);
```

#Elements written in JSX get transpiled to:

React.createElement() functions


#What tool do we use to translate JSX into standard JavaScript?

Babel

---

Thinking in Components

React Components Review

#A ________ renders a reusable piece of the UI.

component

#How do you create a React component?

#Please fill in the correct answer in each blank provided below.
Define a component that creates a reusable 'footer'.
https://teamtreehouse.com/community/define-a-component-that-creates-a-reusable-footer
```
function _(Footer)_ () {
  return (
    <footer>
      <h2>The Footer</h2>
      <span>This is the awesome footer!</span>
    </footer>
  );
}
```

#Please fill in the correct answer in each blank provided below.
Use a JSX tag to render a component named Scoreboard into the DOM.
https://teamtreehouse.com/community/need-help-221
```
ReactDOM.render(
  _<Scoreboard/>_,
  document.getElementById('root')
);
```

#React uses a templating language for creating components.

False. React components are written in plain JavaScript, with the help of JSX.

---

Thinking in Components Review

#Which component do you usually pass to ReactDOM.render()?

The top-level component.

#When a component contains other components, it's called:

composition

#Why is a capital letter necessary in the component name?

To differentiate custom components from native DOM elements

#Please fill in the correct answer in each blank provided below.
Complete the code below to create a Navigation component as a function.
https://teamtreehouse.com/community/complete-the-code-below-to-create-a-navigation-component-as-a-function
```
const Navigation = () => {
    _(return)_(
    <nav>
      <ul> ... </ul>
    </nav>
  );
}
```

#When should you break a component into smaller components?

When the component has too many responsibilities

---
Introducing Props

#Which property should you provide to components generated by iterating over an array?

key

#Please fill in the correct answer in each blank provided below.
Pass the score prop the number value 100.
https://teamtreehouse.com/community/fill-in-the-correct-answer-2
```
<Student name="Gob" score=_{100}_ />
```

#Which of the following best describes properties (or props) in React?

Props pass data from a parent component down to child components.

#Please fill in the correct answer in each blank provided below.
Enable the use of props inside the Header component. Then, add the code that displays the value of a prop named user.
https://teamtreehouse.com/community/enable-the-use-of-props-inside-the-header-component-then-add-the-code-that-displays-the-value-of-a-prop-named-user
```
const Header = (_props_) => {
  return (
    <h1>Hello, {_props.user_}!</h1>
  );
}
```

#How should you write an iteration method like map() in JSX?

It's a JavaScript expression, so it needs to be placed inside curly braces.

#A component can change the value of the props given to it.

False. Props are "read only" (or immutable). A component can only read the props given to it, never change them.

---

Understanding State

Understanding State Review

#What type of components allow you to initialize state?

Class components

#The only required method in a class component is:

render()

#Please fill in the correct answer in each blank provided below.
Complete the code to define a class component named Modal.
https://teamtreehouse.com/community/complete-the-code-to-define-a-class-component-named-modal
```
class Modal extends _(React.Component)_ {
  ...
}
```

#Can you define any stateless functional component as a class?

Yes

#Please fill in the correct answer in each blank provided below.
Complete the code to define a time state with an initial value of 0. Note that the state object is not inside a constructor().
```
class Timer extends React.Component {
  _(state)_ = {
   _(time)_ : _(0)_
  };
  render() { ... }
}
```

#Please fill in the correct answer in each blank provided below.
In the function below, update an isRunning state to true.
https://teamtreehouse.com/community/in-the-function-below-update-an-isrunning-state-to-true-in-react
```
startTimer = () => {
  this._(setState)_({ _(isRunning)_ : _(true)_ });
}
```

#Please fill in the correct answer in each blank provided below.
Add the code that will call a function named startTimer when the button is clicked.
https://teamtreehouse.com/community/what-the-react-am-i-doing-wrong-here
```
<button _(onClick)_ = {_this.startTimer_} >Start</button>
```

#Data from state is distributed through the application via ___.

props

#What type of state is available to the entire app?

Application state

#In React, state is never modified directly.

True. The only way React allows you to update state is by using its built-in

#State may be updated asynchronously. Whenever you need to update state based on previous state, you shouldn't rely on _____ to calculate the next state.

this.state

#Please fill in the correct answer in each blank provided below.
Complete the code so that the isConfirmed state updates its value based on the previous state.
https://teamtreehouse.com/community/i-cant-figure-out-whats-suppose-to-go-here-ive-reviewed-the-videos-a-few-times-i-guess-im-just-missing-it
```
confirmGuest = () => {
  this.setState( prevState => ({
    isConfirmed: !_(prevState)_.isConfirmed
  }));
}
```

#Please fill in the correct answer in each blank provided below.
Complete the code to display the value of a prop named time. Note that Clock is a class component.
https://teamtreehouse.com/community/having-trouble-understanding-this-question-2
```
class Clock extends React.Component {
  render() {
    return (
      <span className="time">_{this.props.time}_</span>
    );
  }
}
```