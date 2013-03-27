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

#### Common Server Tasks

[LAMP](http://en.wikipedia.org/wiki/LAMP_(software_bundle) stands for **Linux, Apache, MySQL, PHP** and it is the technology stack that we use at rtraction. Developers each have their own LAMP installed on a CentOS VirtualBox that mimics the environment on our test and live servers.

At rtraction your computer will come with LAMP already installed and configured.

A common task developers have to do is add a virtual host to their Apache setup. To do this:

Using your [Git Bash](#git), SSH into your virtual machine (replacing `your-dev.address.com` with your dev URL or your  virtual machine's IP address).
```cli
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
```cli
# service httpd restart
# exit
```

On your Windows machine, open up `C:\windows\system32\drivers\etc\hosts` and add a line. Change `000.000.000.000` with your virtual machine's IP address, and `mysite-dev.com` with your site's new URL.
```
000.000.000.000 mysite-dev.com
```

Save the file. Your new URL will now point to your site!


#### Mastery

To master LAMP, check out these tutorials.

##### Linux
* Essentials: [The 5-Minute Essential Shell Tutorial](http://community.linuxmint.com/tutorial/view/100) - *30 minutes*
* Mastery: [50 Most Frequently Used UNIX / Linux Commands (With Examples)](http://www.thegeekstuff.com/2010/11/50-linux-commands/) - *1 hour*

##### Apache

**Essentials**
* [Essential Apache Tutorial](http://linuxzoo.net/page/tut_eapache.html) (ignore the tests) - *1 hour*
* [The Ultimate Guide to .htaccess Files](http://net.tutsplus.com/tutorials/other/the-ultimate-guide-to-htaccess-files/) - *1 hour*

**Mastery**
* [Apache Web Server Tutorial for Linux](http://www.xenocafe.com/tutorials/linux/centos/apache_web_server/index.php) - *2 hours*
* [Apache Configuration Files](Configuration Files) - *2 hours*
* [Apache HTTP Server Tutorial: .htaccess files](http://httpd.apache.org/docs/current/howto/htaccess.html) - *2 hours*
* [THE Ultimate Htaccess](http://www.askapache.com/htaccess/htaccess.html) - *3 hours*

##### MySQL
* [Tutorial 1]() - 4 hours
* [Article 1]() - 1 hour

##### PHP
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



