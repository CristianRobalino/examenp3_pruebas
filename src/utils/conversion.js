// Funciones de conversión de temperatura
export function toCelsius(f) {
    if (!Number.isFinite(f)) throw new TypeError('Input must be a finite number');
    return +( ((f - 32) * 5 / 9).toFixed(1) );
}

export function toFahrenheit(c) {
    if (!Number.isFinite(c)) throw new TypeError('Input must be a finite number');
    return +( ((c * 9 / 5) + 32).toFixed(1) );
}
