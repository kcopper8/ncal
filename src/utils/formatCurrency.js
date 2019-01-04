export default function formatCurrency(number) {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'KRW'
  }).format(Math.round(number))
}