export const getBackground = (abbr: string) => {
	if (abbr?.length === 0) return 'linear-gradient(45deg, #c47200, #da471f)'

	switch (abbr?.[0]) {
		case "A":
		case "D":
		case "G":
		case "J":
		case "X":
			return 'linear-gradient(45deg, #b42db4, #7d35ca)'
		case "L":
		case "M":
		case "P":
		case "Z":
		case "1":
		case "2":
			return 'linear-gradient(45deg, #2db42f, #35ca98)'
		case "F":
		case "K":
		case "Y":
		case "S":
		case "4":
		case "3":
		case "Т":
			return 'linear-gradient(45deg, #3f2db4, #3558ca)'
		case "H":
		case "E":
		case "T":
		case "U":
		case "C":
		case "5":
		case "6":
		case "7":
		case "С":
			return 'linear-gradient(45deg, #b42d2d, #ca3578)'
		case "А":
		case "Б":
		case "В":
		case "Г":
		case "И":
		case "Ь":
		case "Ъ":
		case "Ы":
			return 'linear-gradient(45deg, #b42d2d, #ca3578)'

		default:
			return 'linear-gradient(45deg, #c47200, #da471f)'
	}
}