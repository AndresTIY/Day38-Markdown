## MarkDown NoteDown ShowDown

Building an app to create markdown friendly notes

---

#### Basic Mode

- Use React, Redux, React Router
- Create an app that allows users to write up notes in text area in _markdown_
  - See a live preview of that notes on same page
  - Submit to save note on the server
- App will use multiple react components to present a text area to the user where they can type a note
- As user types in textarea, they should see their md code parsed and previewed in a box of the same side on the right hand side of the page
- When user hits submit, the content should be sent to BEL and saved
  - Notes need to be longer than 50 chars, anything less should not be sent to BEL
  - User should get confirmation on the page that their post was saved successfully
  - Text area should empty after their post is saved
- To handle MD parsing, I will need
  - Marked JS library
    - https://github.com/chjj/marked
  - Know how to dangerously set inner html
   - https://facebook.github.io/react/docs/dom-elements.html#dangerouslysetinnerhtml
---
### Notes
##### dangerouslySetInnerHTML
This is React's replacement for using `innerHTML` in the browser DOM. In general, setting HTML from code is risky because it's easy to inadvertently expose your user to a cross site scripting attack (XSS). So, you can set HTML directly from React, but you have to type out `dangerouslySetInnerHTML` and pass an object with a `__html` to remind yourself that it's dangerous

```js
function createMarkup(){
  return {__html: 'First &middot; Second'}
}

function myComponent(){
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}

```
---
### Plan and Checklist

- [X] Research, install, and try out Marked JS Library
- [X] Clone it, Install It
---
- [X] Research and try out dangerouslySetInnerHTML
- [X] dangerouslySetInnerHTML is used with Marked JS Library
---
- [ ] Set up CSS
---
- [ ]

- [ ]
- [ ]
- [ ]
- [ ]
- [ ]



 Is this needed?
 - so far marked() doesn't work in console
 -
### Challenges and Questions
- What is parsing? : _analyze (a string or text) into logical syntactic components, typically in order to test conformability to a logical grammar._
- MDN Definition: _The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned._
-
