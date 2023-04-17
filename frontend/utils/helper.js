export const formatPrice = (price, fractionDigit) => {
	const formattedString = price.toLocaleString("en", { minimumFractionDigits: fractionDigit, maximumFractionDigits: fractionDigit })
	return formattedString.replace(",", ".")
}
