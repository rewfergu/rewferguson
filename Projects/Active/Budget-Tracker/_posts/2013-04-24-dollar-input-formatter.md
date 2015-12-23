---
title: Dollar Input Formatter
layout: post
---
I needed a quick way to enter a dollar value into a mobile application.  The critical thing for me was being able to enter data as fast as possible, or the application wasn&#8217;t going to be useful.  I could see myself trying to enter info with one hand, probably on the go, and I didn&#8217;t want to hit even one extra button.  My ATMs have an auto format feature where you just start entering digits, and the machine formats the decimal for you, so 999 translates into 9.99.  Entering in an extra two digits on a keypad is easier for me than switching keyboard layouts and finding the period key.  What I mean is 9 might be faster than typing 900, but 499 is faster than 4.99. If that makes any sense.

[<img class="alignnone  wp-image-467" alt="dollar formatter" src="/img/Budget-Tracker/dollarFormat.png" width="419" height="260" />][1]

<a href="https://github.com/rewfergu/dollarformat" target="_blank">https://github.com/rewfergu/dollarformat</a>

All that was really required was for javascript to look at the string of digits and put the decimal in the right spot before I save to the database.  There is a regular expression to check for keys other than numeric keys, but on an iPhone it wasn&#8217;t really necessary.  To bring up the super fast numeric keypad I just needed to add a pattern attribute to my input.

    <input id="addExpense" type="text" pattern="[0-9]*" placeholder="0.00" />

[<img class="alignnone  wp-image-468" alt="add transaction screen" src="/img/Budget-Tracker/photo.png" width="448" height="672" />][2]

 [1]: https://github.com/rewfergu/dollarformat
 [2]: /img/Budget-Tracker/photo.png
