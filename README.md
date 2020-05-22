# Implementation of Love-Letter Game in MERN Stack 

## Description: What is Love Letter?
All of the eligible young men (and many of the not-so-young) seek to woo the princess of Tempest. Unfortunately, she has locked herself in the palace, and you must rely on others to take your romantic letters to her. Will yours reach her first? <br /><br />
***Love Letter*** is a game of risk, deduction, and luck for 2 – 4 players. Your goal is to get your love letter into Princess Annette's hands while deflecting the letters from competing suitors. From a deck with only sixteen cards, each player starts with only one card in hand; one card is removed from play. On a turn, you draw one card, and play one card, trying to expose others and knock them from the game. Powerful cards lead to early gains, but make you a target. Rely on weaker cards for too long, however, and your letter may be tossed in the fire!

## Installation and Run
To install and run this MERN app on your local machine you will need to do bunch of steps first :
- [Download and install node.js and npm](#download)
- [Clone this repository to your computer](#clone)
- [Open terminal and `cd` into cloned repo's directory](#open)
- [Install dependencies using `npm` node package manager](#dependencies)
- [Run the app on your machine](#run)


## Download and install node.js and npm
### Check if it's already installed
Firstly, if there is a chance of node.js and npm being already installed on your computer, check them by :
```
node --version
npm --version
```
So if these output you anything, like *v12.16.1* or *6.5.1*, it means you already have node.js installed on your machine.

If not, please do the below steps to install it properly.

### For Windows machines
If you have Windows as your OS, you can download and install node.js easily on
> https://nodejs.org/en/download/

make sure you choose **windows installer**.

### For Linux (Unix) machines
One of most ways to install node.js and npm in your linux machine, is to install it by [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager).We suggest you to do it this way as it is a practical tool for managing multiple Node.js versions. 
#### 1. To install NVM, download the installation script from Github.For that, you will use the curl command line.
   - If you do not have `curl`, install it by running:
   
   - `sudo apt install curl`
   
   - Press **y** to confirm the installation and hit **Enter**
   
#### 2. Now, download the NVM installation script with the command:
   - `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`
   - After it automatically clones the NVM repository and adds the NVM path to ZSH or Bash, you will receive the        following output:
   
![Couldn't found image](https://phoenixnap.com/kb/wp-content/uploads/2019/03/download-nvm-installation-script.png   'NVM post-installation output')

#### 3. To **enable nvm**:
   - Close and open the terminal or
   - Run the given command in the above figure

#### 4. Check whether the installation was successful by verifying `nvm` version:
   - `nvm --version`
   
   - Once you have installed **`nvm`**, you can find a list of all the available Node.js versions with the command: 
   
   - `nvm ls-remote`
   
   - This will list all available versions of **`nvm`**
   
![Couldn't found image](https://phoenixnap.com/kb/wp-content/uploads/2019/03/list-available-nvm-versions.png 'Output of the comment nvm ls-remote')

#### 5. Finally, install a specific version
   - NVM is a package manager; it can install and manage multiple Node.js versions.
   
   - To install a particular version, use the command `nvm install` and add the number of the version.
   
   - For the sake of this particular project, we will use version **12.16.1**
   
   - To install, just type the following command:
   
   - `nvm install 12.16.1`
   
So that's it.Now you have node and npm installed on your machine.You can check the versions by typing:
- **`node --version`**
- **`npm --version`**



## Clone this repository to your computer
Next step is cloning the current repo to your machine to get this MERN app installed on your computer. <br />
You can clone it with `git clone` <br />
`git clone https://github.com/Nauboys/LoveLetter.git`



## Open terminal and `cd` into cloned repo's directory
Once the cloning process is complete, don't close the terminal, type: <br />
`cd LoveLetter` <br />
instead, this will take you to the project source
