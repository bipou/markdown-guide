# Editor

In addition to providing runnable code playpens, mdBook optionally allows them
to be editable. In order to enable editable code blocks, the following needs to
be added to the ***book.toml***:

```toml
[output.html.playpen]
editable = true
```

To make a specific block available for editing, the attribute `editable` needs
to be added to it:

<pre><code class="language-markdown">```rust,editable
fn main() {
    let number = 5;
    print!("{}", number);
}
```</code></pre>

The above will result in this editable playpen:

```rust,editable
fn main() {
    let number = 5;
    print!("{}", number);
}
```

Note the new `Undo Changes` button in the editable playpens.

## Customizing the Editor

By default, the editor is the [Ace](https://ace.c9.io/) editor, but, if desired,
the functionality may be overriden by providing a different folder:

```toml
[output.html.playpen]
editable = true
editor = "/path/to/editor"
```

Note that for the editor changes to function correctly, the `book.js` inside of
the `theme` folder will need to be overriden as it has some couplings with the
default Ace editor.
