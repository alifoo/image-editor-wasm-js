const arquivo = "./target/wasm32-unknown-unknown/release/editor.wasm";

WebAssembly.instantiateStreaming(fetch(arquivo)).then((wasm) => {
  const { instance } = wasm;
  const { subtracao } = instance.exports;
  console.log(subtracao(28, 10));
});
