## Realistic Challenge 2

**Prompt:**

> **From:** DestroyFascism  
> **Message:** I’ve been informed that you have some impressive hacking skills. There’s a racist hate group using [their website](https://www.hackthissite.org/missions/realistic/2) to organize a large gathering of ignorant, hateful individuals. We cannot let this kind of bigotry go unchecked. If you can gain access to their administrator page and post messages to their main page, we would be incredibly grateful.

This is an important mission, and we need to act fast.  
At first glance, the website may seem like a simple, static HTML/CSS page, but the real question is: how are they posting messages with different accounts? While inspecting the source code, I noticed that the hate group discreetly included the following code in plaintext:

```html
<center><a href="[/missions/realistic/2/update.php](https://www.hackthissite.org/missions/realistic/2/update.php)"><font color="#000000">update</font></a></center>
```

This was in black font, making it invisible to the average Joe, but accessible through `ctrl+U` to view the page source

When visiting [https://www.hackthissite.org/missions/realistic/2/update.php](https://www.hackthissite.org/missions/realistic/2/update.php), we’re prompted to enter a username and password.  
![image](https://github.com/user-attachments/assets/4de02ee1-4606-48a5-881e-7665179a46dd)

I tried using some generic usernames and passwords, as well as brute force techniques using usernames found on the website (e.g., WhiteKing). I also checked the cookies but didn’t find anything useful. Any incorrect credentials lead us to the `update2.php` page:  
![image](https://github.com/user-attachments/assets/c6a66d8a-ec3a-4101-a39d-d6b55aa35e89)

Visiting `update2.php` directly through [https://www.hackthissite.org/missions/realistic/2/update2.php](https://www.hackthissite.org/missions/realistic/2/update2.php) shows:

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/1999/REC-html401-19991224/loose.dtd">
<html><head><title>missing title</title></head>
<body>Invalid username/password. Get the fuck out.</body>
</html>
```

It seems like there isn’t any actual verification happening here.  
Now, here’s where SQL injection comes into play. Assuming the website performs checks like this:

```sql
SELECT * FROM USERS WHERE username = 'input' AND password = 'input'
```

We can attempt to exploit this with a simple SQL injection payload to bypass authentication. The payload is:

```bash
' OR 1=1 --
```

This payload works by altering the query to always return true, bypassing the password check. The resulting query would look like this:

```sql
SELECT * FROM USERS WHERE username = '' OR 1=1 --' AND password = 'any'
```

This query would return a valid user because `1=1` is always true, and the `--` comments out the rest of the query, effectively ignoring the password check.
