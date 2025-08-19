// Media móvil simple
export function movingAverage(series, window) {
    if (!Array.isArray(series) || series.some(x => !Number.isFinite(x))) {
        throw new TypeError('Series must be an array of finite numbers');
    }
    if (!Number.isInteger(window) || window < 2 || window > series.length) {
        throw new RangeError('Window must be integer >=2 and <= series.length');
    }
    const result = [];
    for (let i = 0; i <= series.length - window; i++) {
        const avg = series.slice(i, i + window).reduce((a, b) => a + b, 0) / window;
        result.push(+avg.toFixed(2));
    }
    return result;
}
