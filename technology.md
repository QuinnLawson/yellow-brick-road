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
* [jQuery](#jquery)
* [HTML5 Boilerplate](#html5boilerplate)
* [Bootstrap](#bootstrap)

**Mobile**
* [jQMobi](#jqmobi)
* [320 And Up](#320andup)
* [HTML5 Mobile Boilerplate](#html5mobile)
* [Phonegap](#phonegap)

**Semi-Retired**
* [CakePHP](#cakephp)
* [CodeIgniter](#codeigniter)



Server
======

<a id="lamp"></a>LAMP
-----------------------------

#### How We Use LAMP

[LAMP](http://en.wikipedia.org/wiki/LAMP_(software_bundle) stands for **Linux, Apache, MySQL, PHP** and it is the technology stack that we use at rtraction. Developers each have their own LAMP installed on a CentOS VirtualBox that mimics the environment on our test and live servers.

At rtraction your computer will come with LAMP already installed and configured.

A common task developers have to do is add a virtual host to their Apache setup. To do this:

Using your [Git Bash](#git), SSH into your virtual machine. replace `your-dev.address.com` with your dev URL or your  virtual machine's IP address.
```bash
$ ssh root@your-dev.address.com
(enter your password)
# vi /etc/httpd/conf/httpd.conf
```

Page down until you get to the end of the file. Press `i` to enter `Insert Mode` in `vi`. Add a virtual host by typing the following. Replace `/websites/mysite` with the folder location of your site. Replace `mysite-dev.com` with a new URL for your site.
```xml
<VirtualHost *:80>
  DocumentRoot /websites/mysite
  ServerName mysite-dev.com
</VirtualHost>
```

Press `esc`, and type `:wq` and press enter to save the file. Now you have to restart your virtual machine and end your SSH session:
```bash
# service httpd restart
# exit
```

On your Windows machine, open up `C:\windows\system32\drivers\etc\hosts` and add a line. Change `000.000.000.000` with your virtual machine's IP address, and `mysite-dev.com` with your site's new URL.
```
000.000.000.000 mysite-dev.com
```

Save the file. Your new URL will now point to your site!


#### Install

These links teach you how to install LAMP:

* [Link 1]() - 30 minutes
* [Link 2]() - 15 minutes

#### Get Started

These links will give you enough knowledge to get started working with LAMP.

* [Tutorial 1]() - 1 hour
* [Tutorial 2]() - 2 hours

#### Master

To master LAMP, go through each of these tutorials.

* [Tutorial 1]() - 4 hours
* [Article 1]() - 1 hour

<a id="drupal"></a>Drupal
-----------------------------

<a id="wordpress"></a>Wordpress
-----------------------------

<a id="laravel"></a>Laravel
-----------------------------



Version Control
===============

<a id="git"></a>GIT
-------------------



Client-side
===========

<a id="jquery"></a>jQuery
-----------------------------

<a id="bootstrap"></a>Bootstrap
-----------------------------

<a id="html5boilerplate"></a>HTML5 Boilerplate
-----------------------------



Mobile
======

<a id="jqmobi"></a>jQMobi
-----------------------------

<a id="320andup"></a>320 And Up
-----------------------------

<a id="html5mobile"></a>HTML5 Mobile Boilerplate
-----------------------------

<a id="phonegap"></a>Phonegap
-----------------------------

Semi-Retired
===============

<a id="cakephp"></a>CakePHP
---------------------------

<a id="codeigniter"></a>CodeIgniter
-----------------------------



