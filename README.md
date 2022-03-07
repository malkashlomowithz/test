# test
Created with CodeSandbox
 
RANDERING CHUNKS 

The App.js receives as a prop an array of strings called
"items", the component renders a button that when clicked, it opens a menu that will allow to
scroll down the list of items received as a prop.
The component renders the list in chunks of 20 items every time you scroll down to the
end of the current chunk, which means that when you scroll down the list, as you get close
to the end of the current chunk it will render the next 20 items.
When rendering the next 20 items, the previous chunks will not disappear, and when
you scroll back they will be rendered already, which means that when you scrolled to the
end of the items you received as a prop the entire list will be rendered.

https://sizil.csb.app/
