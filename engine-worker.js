try {
  importScripts('./stockfish/stockfish-19-asm.js');
} catch (error) {
  postMessage('ENGINE_ERROR ' + (error && error.message ? error.message : String(error)));
}
