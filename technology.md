Technology
==========

> I actually hate programming, but I love solving problems.
> - *[Rasmus Lerdorf](https://en.wikipedia.org/wiki/Rasmus_Lerdorf)*

Contents
--------

**Server**
* [LAMP](#lamp)
* [Drupal](#drupal)
* [Wordpress](#wordpress)
* [Laravel](#laravel)

**Version Control**
* [GIT](#git)

**Client-side**
* [Javascript](#javascript)
* [jQuery](#jquery)
* [HTML5 Boilerplate](#html5-boilerplate)
* [Bootstrap](#bootstrap)

**Mobile**
* [jQMobi](#jqmobi)
* [320 And Up](#320-and-up)
* [HTML5 Mobile Boilerplate](#html5-mobile-boilerplate)
* [Phonegap](#phonegap)

**Testing**
* [QUnit](#qunit)
* [PHPUnit](#phpunit)
* [Selenium](#selenium)


**Semi-Retired**
* [CakePHP](#cakephp)
* [CodeIgniter](#codeigniter)

**[The Future](#the-future)**

Server
======

LAMP
-----------------------------

#### Common Server Tasks

[LAMP](http://en.wikipedia.org/wiki/LAMP_(software_bundle) stands for **Linux, Apache, MySQL, PHP** and it is the technology stack that we use at rtraction. Developers each have their own LAMP installed on a CentOS VirtualBox that mimics the environment on our test and live servers.

At rtraction your computer will come with LAMP already installed and configured.

* [Adding a VirtualHost](https://github.com/rtraction/yellow-brick-road/wiki/Adding-a-VirtualHost) - *5 minutes*


#### Linux

Essentials:
* [The 5-Minute Essential Shell Tutorial](http://community.linuxmint.com/tutorial/view/100) - *30 minutes*

Mastery:
* [50 Most Frequently Used UNIX / Linux Commands (With Examples)](http://www.thegeekstuff.com/2010/11/50-linux-commands/) - *1 hour*

#### Apache

Essentials:
* [Essential Apache Tutorial](http://linuxzoo.net/page/tut_eapache.html) (ignore the tests) - *1 hour*
* [The Ultimate Guide to .htaccess Files](http://net.tutsplus.com/tutorials/other/the-ultimate-guide-to-htaccess-files/) - *1 hour*

Mastery:
* [Apache Web Server Tutorial for Linux](http://www.xenocafe.com/tutorials/linux/centos/apache_web_server/index.php) - *2 hours*
* [Apache Configuration Files](Configuration Files) - *2 hours*
* [Apache HTTP Server Tutorial: .htaccess files](http://httpd.apache.org/docs/current/howto/htaccess.html) - *2 hours*
* [THE Ultimate Htaccess](http://www.askapache.com/htaccess/htaccess.html) - *3 hours*

#### MySQL
* [Tutorial 1]() - 4 hours
* [Article 1]() - 1 hour

#### PHP
* [Tutorial 1]() - 4 hours
* [Article 1]() - 1 hour


Drupal
------

Wordpress
---------

Laravel
-------
Install & Setup:
* [Quick Start](http://laravel.com/docs/quick) - *__ minutes*
* [Installing and updating Laravel 4](http://niallobrien.me/2013/03/installing-and-updating-laravel-4/) - *5 minutes*
* [Getting Started With Laravel 4](http://chris-schmitz.com/getting-started-with-laravel-4/) - *10 minutes*

Essentials:
* `Video Series` [What's New in Laravel 4](https://tutsplus.com/course/whats-new-in-laravel-4/) - *5 hours*

Mastery:
* `Reference` [Laravel Documentation](http://four.laravel.com/)
* `Video Series` [Inversion of Control](http://phpmaster.com/inversion-of-control-the-hollywood-principle/)
* [IoC part1](http://vimeo.com/album/2157913/video/53009943)
* [IoC part2](http://vimeo.com/album/2157913/video/53029232)


Version Control
===============

GIT
---
Essentials
* `Tutorial` [Try Git](http://www.codeschool.com/courses/try-git) - *15 minutes*
* [Introduction To Git](http://learn.github.com/p/index.html) - *20 minutes*
* [git-rebase](http://blog.izs.me/post/37650663670/git-rebase) - *1 hour*
* [How I Learned To StopP Worrying and Love Rebase](http://www.pyladies.com/blog/how-I-learned-to-love-rebase/) - *30 minutes*

Mastery:
* `Book` [Git](https://peepcode.com/products/git)
* [Understanding the Git Workflow](https://sandofsky.com/blog/git-workflow.html) - *30 minutes*
* [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/) - *1 hour*


Client-side
===========

Javascript
----------
http://javascriptissexy.com/how-to-learn-javascript-properly/
http://javascriptissexy.com/learn-intermediate-and-advanced-javascript/
http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/


jQuery
------
[SuperHeroJS](superherojs.com)

Bootstrap
---------

HTML5 Boilerplate
-----------------
[Chrome DevTools](http://discover-devtools.codeschool.com/)
[Browser Diet](http://browserdiet.com/)


Mobile
======

jQMobi
-------

320 And Up
----------

HTML5 Mobile Boilerplate
------------------------

Phonegap
--------

Testing
=======

QUnit
-----

Essentials:
* [Introduction To JavaScript Unit Testing](http://coding.smashingmagazine.com/2012/06/27/introduction-to-javascript-unit-testing/)
* `Reference` [QUnit](http://qunitjs.com/)


PHPUnit
-------
* http://www.sitepoint.com/tutorial-introduction-to-unit-testing-in-php-with-phpunit/
* http://www.phpunit.de/manual/3.7/en/automating-tests.html
* https://leanpub.com/grumpy-phpunit
* `Book` [The Grumpy Programmer's Guide To Building Testable PHP Applications](https://leanpub.com/grumpy-testing)

Selenium
--------


Semi-Retired
===============

CakePHP
-------

CodeIgniter
-----------

The Future
==========

This document goes into review every 6 months. At that point we evaluate the technologies we use and replace them with new technologies that will help us to be more productive, efficient and awesome. Here are a few things we may consider implementing in the future if they evaluate well.

* [GruntJS]()
* [Sass]() or [Less]()
* [Compass]()
* [Foundation](http://foundation.zurb.com/templates.php)

Evaluating New Technologies
-----------

* Does it have favourable peer reviews?
* Does it appear to be better than how we do things now?
* Is it open source? How active is the developer community? How fresh vs. stable is the code base?
* Does it work in IE8? We are some of the few who still care. (Bootstrap sliders, for example, does not work in IE8)
