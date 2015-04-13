var crawl = require( './' );
var test  = require( 'tape' );

var o = {
  foo : {
    bar : [
      {
        a : 123
      },
      [ 'a' ],
      'lorem ipsum'
    ]
  }
};

test( 'valid path', function ( t ) {
  t.is( o.foo, crawl( o, 'foo' ) );
  t.is( o.foo.bar, crawl( o, 'foo.bar' ) );
  t.is( o.foo.bar[ 0 ], crawl( o, 'foo.bar.0' ) );
  t.is( o.foo.bar[ 0 ].a, crawl( o, 'foo.bar.0.a' ) );
  t.is( o.foo.bar[ 1 ][ 0 ], crawl( o, 'foo.bar.1.0' ) );
  t.is( o.foo.bar[ 2 ], crawl( o, 'foo.bar.2' ) );

  t.end();
});

test( 'invalid path', function ( t ) {
  t.is( void 0, crawl( o, 'foo.' ) );
  t.is( void 0, crawl( o, '.foo' ) );
  t.is( void 0, crawl( o, 'foo.bar.0.1' ) );
  t.is( void 0, crawl( o, 'foo.bar.0.a.1' ) );

  t.end();
});

test( 'object and array notation', function ( t ) {
  t.is( crawl( o, 'foo[bar]' ), crawl( o, 'foo.bar' ) );
  t.is( crawl( o, 'foo[bar][0]' ), crawl( o, 'foo.bar.0' ) );
  t.is( crawl( o, 'foo[bar][0][a]' ), crawl( o, 'foo.bar.0.a' ) );
  t.is( crawl( o, 'foo[bar][1]' ), crawl( o, 'foo.bar.1' ) );
  t.is( crawl( o, 'foo[bar][1][0]' ), crawl( o, 'foo.bar.1.0' ) );

  t.end();
});
