### Mission 1: The IDIOT Test

> Faith is learning JavaScript. The only thing protecting her from hackers is luck.

This is a really simple challenge. If we check the source code using `Ctrl+U`, we find:

```javascript
function check(x) {
  if (x == "cookies") {
    alert("win!");
    window.location += "?lvl_password=" + x;
  } else {
    alert("Fail D:");
  }
}
```

So, obviously, the password is `"cookies"`.

### Mission 2: Disable JavaScript

The hint is in the name! To pass this level, all we have to do is disable JavaScript.

In your browser settings:
For Chrome: `Chrome Tabs > Site Settings > Privacy and Security > Disable JavaScript`
(look up yours)

### Mission 3: Math Time!

> Faith is going to test your math skills and JavaScript operations.

Here’s the given script:

```javascript
var foo = 5 + 6 * 7;
var bar = foo % 8;
var moo = bar * 2;
var rar = moo / 3;
function check(x) {
  if (x.length == moo) {
    alert("win!");
    window.location += "?lvl_password=" + x;
  } else {
    alert("fail D:");
  }
}
```

As we can see, the function checks if the length of the entered password matches the value of the variable `moo`.

We _could_ spend time solving this manually, but why bother? Simply run:

```javascript
console.log(moo);
```

This gives you the answer in one line :)
