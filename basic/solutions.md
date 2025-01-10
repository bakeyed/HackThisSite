### Mission 1:

Basic test of your skills to see if you can do any of these missions. Requirements: HTML

> Hint: Something to do with HTML

To get the html source code I used `ctrl + U`
The password was hidden in the comment

```html
<!--An html comment looks like this-->
```

### Mission 2:

A slightly more difficult challenge, involving an incomplete password script. Requirements: Common sense.

> Hint: It says that Network security Sam forgot to upload the password file

The unencrypted text file compares the data user entered with the file. Since there is no file to compare to, it lets the user through when the input is NULL. So, no password is needed to moveon to next level, just had to click the submit button.

### Mission 3:

Some intuition is needed to find the location of the hidden password file. Requirements: Basic HTML knowledge

> Hint: The **unencrypted** password file has been uploaded

The file could directly be accessed through

`https://www.hackthissite.org/missions/basic/3/password

### Mission 4:

An email script has been set up, which sends the password to the administrator. Requirements: HTML knowledge, an email address

> Hint: There is a script that emails the password to Sam

The email the password is sent to can be easily changed via inspect element

![image](https://github.com/user-attachments/assets/83c7b93a-77e7-4e99-81ee-ed853c0ffdac)

### Mission 5:

Same as Mission 4

### Mission 6:

An encryption system has been set up, which uses an unknown algorithm to change the text given. Requirements: Persistence, some general cryptography knowledge.

> Hint: Encrypted password has been given, we just have to find the algorithm.

While checking with various inputs I found that:

```
hello123 = hfnos68:
aaaaa = abcde
11111 = 12345
```

So I concluded that each position's decimal equivalent of the ASCII character has been incremented by the index at that position. So to find the decrypted password we must subtract it by the index value.

![image](https://github.com/user-attachments/assets/fae9207c-d58d-40c0-8136-24351447cdd9)
![final pwd](https://github.com/user-attachments/assets/c39da66c-8050-4e44-b7fd-b4fe7f7b865c)

### Mission 7:

The password is hidden in an unknown file, and Sam has set up a script to display a calendar. Requirements: Basic UNIX command knowledge.

> Hint: Password can be assessed through UNIX commands

As we know the script has been set up to display the calander based on the year user inputs.
Since this is a UNIX command, it looks like

```bash
cal 2005
```

This returns the callander for the year, Sam has set up somehting that only as cal. We can perform command injection to list the password file and directly accesses it via http header

```bash
2005 && ls -a
```

### Mission 8:

The password is yet again hidden in an unknown file. Sam's daughter has begun learning PHP, and has a small script to demonstrate her knowledge. Requirements: Knowledge of SSI (dynamic html executed by the server, rather than the browser)

> Hint: PHP script, server side includes

We can perform SSI injection and list out the files by entering this to the uncheck user input filed:

```php
<!--exec cmd="ls ../"-->
```

#### Mission 9:

Same as mission 8, just go up a directory

```php
<!--exec cmd="ls ../9/"-->
```

### Mission 10:

This time Sam used a more temporary and "hidden" approach to authenticating users, but he didn't think about whether or not those users knew their way around javascript...

> Hint: We can work around the javascript

HTTP cookies can be used to check if users have been authenticated. Since Sam doesn't know enough to handle that, We can easily to to the application cookie settings and edit the cookie into saying "yes"

![inspect elemnt](https://github.com/user-attachments/assets/7bac15a5-d220-4956-b9d0-259c460221b0)

### Mission 11:

Sam decided to make a music site. Unfortunately, he does not understand Apache. This mission is a bit harder than the other basics.

> **Hint**: Music site and Apache knowledge

Apache servers often use configuration files such as `.htaccess` to handle directories and file access permissions.

In this mission, visiting the provided link doesn't directly ask for a password. Instead, it displays lyrics from Elton John songs. However, navigating deeper into the directory (`https://www.hackthissite.org/missions/basic/11/e/l/t/o/n/`) reveals a `.htaccess` file.

The `.htaccess` file contains:

```
IndexIgnore DaAnswer.* .htaccess
<Files .htaccess>
require all granted
</Files>
```

This indicates that files matching `DaAnswer.*` are ignored unless accessed directly. Visiting `https://www.hackthissite.org/missions/basic/11/e/l/t/o/n/DaAnswer` gives a clue:

> "The answer is around! Just look a little harder."

The real trick is in the message. The word **"around"** is the actual answer. Navigating back to `index.php` and entering `around` as the password completes the mission.

**Key Tools Used:**

- Knowledge of Apache `.htaccess` files
- Understanding directory navigation and file access

**Optional Commands:**  
Using `dirb` to brute force directory contents:

```bash
sudo dirb https://www.hackthissite.org/missions/basic/11/ wordlist.txt -w
```

This command reveals hidden files and directories. However, a manual approach with attention to `.htaccess` logic is sufficient for this mission.
