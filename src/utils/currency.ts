export function convertToEuro(value: number) {
    return value.toLocaleString('nl-NL', {
        style: 'currency',
        currency: 'EUR'
    });
}
