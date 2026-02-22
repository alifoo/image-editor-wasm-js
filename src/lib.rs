#[unsafe(no_mangle)]
pub extern "C" fn subtracao(numero_a: u8, numero_b: u8) -> u8 {
    numero_a - numero_b
}
