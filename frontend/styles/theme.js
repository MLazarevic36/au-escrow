import { theme as base, extendTheme } from "@chakra-ui/react"
import "@fontsource/epilogue"
import "@fontsource/epilogue/300.css"
import "@fontsource/epilogue/400.css"
import "@fontsource/epilogue/500.css"
import "@fontsource/epilogue/600.css"
import "@fontsource/epilogue/700.css"
import "@fontsource/epilogue/800.css"

export const colors = {
	_orange: "#DC6F32",
	_white: "#E2E7EF",
	_lightGray: "#575B61",
	_mediumGray: "#33373d",
	_darkGray: "#303338",
	_black: "#1C1F24",
	_green: "#3BEA6C",
	_darkGreen: "#41A056",
	_red: "#EA3B46",
}

const theme = extendTheme({
	colors: colors,
	fonts: {
		body: `Epilogue, ${base.fonts.body}`,
		heading: `Epilogue, ${base.fonts.heading}`,
	},
	// sizes: {
	// 	container: {
	// 		xxl: "1440px",
	// 	},
	// },
	shadows: {
		activeGreen:
			"0 0 2px rgba(59, 234, 108,0.5),0 0 4px rgba(59, 234, 108,0.5),0 0 8px rgba(59, 234, 108,0.5),0 0 20px rgba(59, 234, 108,0.5)",
		activeRed:
			"0 0 2px rgba(234, 59, 70,0.5),0 0 4px rgba(234, 59, 70,0.5),0 0 8px rgba(234, 59, 70,0.5),0 0 20px rgba(234, 59, 70,0.5)",
	},
	components: {
		Heading: {
			variants: {
				h1: {
					color: "_white",
					fontSize: ["16px", "26px", "35px"],
					fontWeight: 800,
				},
			},
		},
		Text: {
			variants: {
				subT: {
					fontSize: ["14px", "18px"],
					color: "_white",
					fontWeight: 400,
				},
			},
		},
		Button: {
			variants: {
				primary: {
					minW: "114px",
					height: ["46px", "54px"],
					borderRadius: "12px",
					bg: "_orange",
					color: "_white",
					fontWeight: 800,
					fontSize: ["14px", "16px"],
					_hover: { opacity: 0.85 },
				},
				// success: {
				// 	minW: "114px",
				// 	height: ["46px", "54px"],
				// 	borderRadius: "12px",
				// 	bg: "_darkGreen",
				// 	color: "_white",
				// 	fontWeight: 800,
				// 	fontSize: ["14px", "16px"],
				// 	_hover: { opacity: 0.85 },
				// },
			},
		},
		Input: {
			variants: {
				// theme: {
				field: {
					border: "1px solid",
					borderColor: "_white",
					borderRadius: "xl",
					// bg: "transparent",
					h: ["46px", "54px"],
					textColor: "_darkGray",
					_focus: {
						boxShadow: "0 0 2px 2px #38B2AC",
					},
					// _placeholder: {
					// 	color: "_white",
					// },
				},
				// },
			},
		},
	},
})
export default theme
