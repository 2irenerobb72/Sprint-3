# Review

Looks like you got a good start on the product objectives and user needs. You can continue to refine these as we go through the process. You'll learn more this week about job stories (or user stories) and by next week we'll be putting these strategies into play.

Your HTML is almost perfect! What happened to the role attributes? Also, be sure that all your attribute values are in double quotes:

This:

```html
<abbr title=hypertext markup language>HTML</abbr>
```

Should be:

```html
<abbr title="hypertext markup language">HTML</abbr>
```

Nice use of `<abbr>` by the way! A vastly underused HTML feature. Also, be sure to indent content. Your line lengths are joy to behold (I'm tempted to weep with joy). Watch the indentation. This:

```html
<p>
The <em>HTML</em> Section Element (<code>&gt;section&gt;</code>)
represents a generic section of a document, i.e., a thematic grouping of
content, typically with a heading. Each &gt;section&gt; should be
identified, typically by including a heading (&gt;h1&gt;-&gt;h6&gt;
element) as a child of the &gt;section&gt; element.
</p>
```

Should be this:

```html
<p>
  The <em>HTML</em> Section Element (<code>&gt;section&gt;</code>)
  represents a generic section of a document, i.e., a thematic grouping of
  content, typically with a heading. Each &gt;section&gt; should be
  identified, typically by including a heading (&gt;h1&gt;-&gt;h6&gt;
  element) as a child of the &gt;section&gt; element.
</p>
```

I know it's a small thing, and it won't make any difference to the way it looks to the user. But these fine points of HTML formatting are a freebie. When you get into progamming languages, attention to detail makes the difference between code that works right the first time, and spending hours debugging.

This is especially true when you start working with whitespace-sensitive languages such as Python, or for that matter Jade or HAML. One wrong indent and you get a disaster. So practice now getting it right and noticing every little detail.

One trick is to start at the bottom and read from bottom up. This forces you to see the lines instead of seeing whole blocks at once. You can read sentences backwards, too, to find typos. A neat trick.

Thanks for your comments on perceivability and responsiveness. Glad you agree.

Now, to your JavaScript:

Your `cube` function is perfect! Style is great, too. Very nice.

Your `absolute` function is also perfect. Note, however, that `-` is an operator for negation as well as for subtraction. If you put it in front of a value, it negates the value. So you could also do it this way:

```js
function absolute (x) {
  if (x < 0) {
    return -x
  } else {
    return x
  }
}
```

And because the first `return` ends the function, we don't really need the else. We can simplify like this:

```js
function absolute (x) {
  if (x < 0) return -x

  return x
}
```

Didn't expect you to come up with that; just giving you some ideas. Try it in the node REPL and see if it works. Does this make sense to you? If not, ask Aaron or Slack me.

Your next function fails in the REPL. Did you test it? Always test your code in the REPL to make sure it works. (I always regret it when I forget to do this. So easy to make little mistakes.)

You have this:

```js
names.map(function(name) {
  return name concat("y")
})
```

The array is great. Smart move, passing in an anonymous function, too. But `return name concat("y")` throws an error. I think you probably meant to calle the `concat` method on the `name` string, right? In that case, you need the `.`:

```js
names.map(function (name) {
  return name.concat("y")
})
```

That works. Note: you should be using only single quotes, and don't forget the space before the `(` in the function definition. You're defining it, not calling it. Also, you can just as easily use the `+` operator for concatenation of strings:

```js
names.map(function (name) {
  return name + 'y'
})
```

Is that more readable? I think so. Beautiful job, though. Is this making sense to you? You understand that calling `map` on the names array and passing it a function causes it to return a new array in which each item is the item from the original array *passed through the function you supplied*? So here, each member of the names array gets passed into the anonymous function as `name`, has 'y' appended to it, and then get's returned as part of a new array?

As for the `makeKiaOra` function, watch your indentation! Otherwise, perfect. Does this make sense to you? Are you testing these in the REPL? Make sure you're not just putting out stuff that you found online (or got from a classmate) without understanding how it works. Ping me on Slack if you need help.

Oh, and don't put your empathy responses in the `sprint` repo. We made the weka-2015-ee repo for them. See instructions on Slack or ping Pete.
