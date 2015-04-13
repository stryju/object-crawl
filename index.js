module.exports = crawl;

function crawl( obj, key ) {
  var chain = key.replace( /\[\s*([\w_]+)\s*\]/g, '.$1' ).split( '.' );
  var chainLength = chain.length;
  var chainStep = 0;
  var alias = obj;

  try {
    while ( alias !== void 0 && chainStep < chainLength && typeof alias !== 'string' ) {
      alias = alias.hasOwnProperty( chain[ chainStep ] ) ?
        alias[ chain[ chainStep++ ] ] :
        void 0;
    }
  } catch( e ) {
    alias = void 0;
  }

  // won't allow to return a 1-char substring ;-)
  if ( typeof alias === 'string' && chainStep < chainLength ) {
    return void 0;
  }

  return alias;
}
