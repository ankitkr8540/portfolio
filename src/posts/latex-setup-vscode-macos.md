---
title: 'The LaTeX Setup Saga in VSCode on macOS'
date: '2024-08-22'
slug: 'latex-setup-vscode-macos'
tags: ['LaTeX', 'VSCode', 'macOS', 'Tutorial']
category: 'Software & Deployment'
excerpt: "After helping a friend set up LaTeX on VS Code on macOS, she twisted my arm into writing this. So here it is — my reluctant gift to humanity."
---

So, I'll admit it — I'm usually way too lazy to write blogs. And let's be real, tech blogs are the worst! If you need my help, just find me. I'm like Batman, but instead of fighting crime, I'm fixing your tech issues with my superhero-level troubleshooting skills. But alas, after helping a friend set up LaTeX on her Visual Studio Code (on macOS, no less!), she twisted my arm into writing this. So, here it is — my reluctant gift to humanity.

---

## Step 1: Download the Holy Grail (a.k.a. MacTeX.pkg)

First things first, head over to [latex-project.org](https://www.latex-project.org) and grab the MacTeX.pkg. Don't worry, it's not as boring as it sounds... okay, maybe it is.

![Download MacTeX](https://cdn.hashnode.com/res/hashnode/image/upload/v1724377017341/0b8dffa6-4444-4891-99ae-3d8cad464231.png)

## Step 2: Install Like a Pro

![MacTeX installer](https://cdn.hashnode.com/res/hashnode/image/upload/v1724377412809/a8c5509d-785b-4842-8ef5-412de93a53e3.png)

Now, you've got your shiny new pkg file. What do you do? Smash that "Continue" button like you're playing a video game. If it asks you to agree to something, just nod and keep clicking until it's all over. You'll know you're done when it stops asking you questions and politely disappears.

## Step 3: Taming the Beast (a.k.a. VS Code)

Open up VS Code and install the extensions I'm about to drop on you. It's like giving your VS Code a spa day, but with more code and fewer scented candles.

![VS Code extensions](https://cdn.hashnode.com/res/hashnode/image/upload/v1724377558243/19c42716-ae11-40fb-bf43-30528e60b6c6.png)

## Step 4: Summon the Settings.json

To open the sacred scroll — err, `settings.json` — hit `Cmd + P`, then `Shift + >`, and search for "settings.json." Choose **Open User Settings** because we're about to perform some tech wizardry.

![Open settings.json](https://cdn.hashnode.com/res/hashnode/image/upload/v1724377774645/640cf524-c85f-40ca-9f13-d38a375f165a.png)

Now, type this in like you mean it:

```json
"latex-utilities.message.update.show": false,
"[latex]": {
  "editor.formatOnSave": false,
  "editor.defaultFormatter": "James-Yu.latex-workshop"
}
```

## Step 5: Test Your New Powers

Create a new folder, and inside it, create a file called `<File_name>.tex`. Now, write some LaTeX magic into it:

```latex
\documentclass{article}

\title{Sample LaTeX Document}
\author{John Doe}
\date{\today}

\begin{document}

\maketitle

\section{Introduction}
This is a simple LaTeX document. You can use LaTeX to create professional-looking documents with ease.

\section{Main Content}
Here is some more text. You can add sections, subsections, and even include mathematical equations like this one:

\[
E = mc^2
\]

\end{document}
```

Click on the run button on the top right after copying the above code.

![Run button](https://cdn.hashnode.com/res/hashnode/image/upload/v1724380160021/5e76dcd7-d464-4beb-86b3-5a579eea16e7.png)

## The Grand Finale

![Final result](https://cdn.hashnode.com/res/hashnode/image/upload/v1724379120690/1274e221-e45d-4533-9211-bc45e6d16d3e.png)

Congratulations! You've made it through the gauntlet. Hopefully, this blog has saved you a few headaches and some Google searches. If you loved it, great! If you didn't, well, at least I didn't make you read another listicle. Now go forth and LaTeX like a pro. Thanks for sticking around!
