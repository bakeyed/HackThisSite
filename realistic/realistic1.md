
## Realistic Challenge 1

**Prompt:**

> **Message:** Hey man, I need a big favor from you. Remember that website I showed you once before? [Uncle Arnold's Band Review Page](https://www.hackthissite.org/missions/realistic/1/)? Well, a long time ago, I made a $500 bet with a friend that my band would be at the top of the list by the end of the year. Unfortunately, as you already know, two of my band members passed away in a horrendous car accident… but this guy still insists the bet is on!  
> I know you're great with computers, so I was wondering if there’s any way you could hack this website and get my band to the top of the list? My band is Raging Inferno. Thanks a lot, man!

First off, RIP to the band members of HeavyMetalRyan.  

To help him out and save his $500, let's bring his band to #1 for once! This is a very simple challenge.

If we check out the website, we see it has a voting system that sends data to a PHP page that calculates the average of all votes.  

![image](https://github.com/user-attachments/assets/6843b32c-2436-4c1b-8810-07bbeace2d73)

Right now, Raging Inferno only has an average score of 2 and is at the bottom of the list.
We can raise their score by voting high, of course, but we notice that "Imposing Republic," which is in the lead, has 21 more points!  

![image](https://github.com/user-attachments/assets/9c713736-31ec-4ffe-aa71-80c91a769ec9)

To solve this, we can use "Inspect Element" to adjust the voting value directly, like this:

![image](https://github.com/user-attachments/assets/374e92e1-da40-4db7-9ccd-d7146d827692)
