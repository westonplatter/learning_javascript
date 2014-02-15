learning_javascript
===================

[![Build Status](https://travis-ci.org/denvercodeclub/learning_javascript.png?branch=master)](https://travis-ci.org/denvercodeclub/learning_javascript)

#### What is this?

__Short Answer:__  Learn javascript by proving concepts with tests. :)

__Longer Answer:__ This is a compilation of Javascript "code snippets" as I work through resources to master Javascript. Each resource (book/guide/tutorial/etc) has it's own folder with [Jasmine](http://pivotal.github.io/jasmine/) tests proving how the concepts apply in a semi real world context.

<br>

#### Resources
- [code](/resources/professional_javascript-zakas)  -    [Professional Javascript for Web Developers](http://www.amazon.com/Professional-JavaScript-Developers-Nicholas-Zakas/dp/1118026691) by Nicholas Zakas
- [code](/resources/javascript_patterns-stefanov)   -    [Javascript Patterns](http://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752) by Stoyan Stefanov
- [code](/resources/javascript_patterns-osmani)     -    [Javascript Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/) by Addy Osmani

<br>


#### How to install and use

##### Option 1 - Run tests in browswer
Download the project ([click here](https://github.com/denvercodeclub/learning_javascript/archive/master.zip)). Open the zip file, and find the  `learning_javascript/resources/professional_javascript-zakas/SpecRunner.html`  file, and double click on it. This runs the tests in your browser. Yay!! You're up and running.  

##### Option 2 - Run tests via NodeJS

1. Install node,  
    - Mac, `brew install nodejs` or [node downloads page](http://nodejs.org/download/)  
    - Linux, `sudo apt-get install node`  
    - Windows, [node downloads page](http://nodejs.org/download/)  

2. Install git,  
    - Mac, `brew install git` or [git downloads page](http://git-scm.com/downloads)  
    - Linux, `sudo apt-get install git`  
    - Windows, [git downloads page](http://git-scm.com/downloads)  

3. Shell Commands

```sh
git clone https://github.com/denvercodeclub/learning_javascript.git
cd learning_javascript
npm install -g grunt-cli
npm install

# using npm which calls to grunt
npm test 

# using grunt
grunt test
```

#### Contributions

We'd love your help! [Open a Github issue](https://github.com/westonplatter/learning_javascript/issues/new) about anything. The pros, cons, and everything in between. We'll make adjustments to the project so that the project is as helpful and as easy as possible.   

#### Inspiration
Credits to the [Denver Code Club](http://www.meetup.com/Denver-Code-Club/) for an awesome group of people to learn from.
