# object-crawl
object crawler

## usage

```js
var crawl = require( 'crawl' );

var object = {
    foo : 'lorem ipsum',
    bar: [
        {
            a: 1,
            b: true
        }
    ]
};

crawl( object, 'foo' ); // 'lorem ipsum'
crawl( object, 'bar' ); // [ { a: 1, b: true } ]
crawl( object, 'bar.0' ); // { a: 1, b: true }
crawl( object, 'bar[0]' ); // { a: 1, b: true }
crawl( object, 'bar.0.a' ); // 1
crawl( object, 'bar[0].a' ); // 1
crawl( object, 'bar[0][a]' ); // 1
crawl( object, 'bar.0.b' ); // true

crawl( object, 'baz' ); // undefined
crawl( object, 'foo.0' ); // undefined
crawl( object, 'foo[0]' ); // undefined
crawl( object, 'foo[1]' ); // undefined
crawl( object, 'bar.'); // undefined
crawl( object, 'bar..'); // undefined
```

## license

MIT
