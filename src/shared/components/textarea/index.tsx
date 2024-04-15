import { Label, Required } from "../input/styles"
import { TextareaStyled, TextareaWrapper } from "./styles"

type Props = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
	label?: string
}

export const Textarea = ({ label, ...props }: Props) => {
	return <TextareaWrapper>
		{label && (
			<Label>
				{label} <Required>{props.required ? "*" : ""}</Required>
			</Label>
		)}

		<TextareaStyled {...props} />
	</TextareaWrapper>
}