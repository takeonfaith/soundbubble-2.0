import { ScrollingPart } from "../../layout/modal/style"
import { DefaultButton } from "../../shared/components/button/DefaultButton"
import { Input } from "../../shared/components/input"
import { Textarea } from "../../shared/components/textarea"
import { AddSongModalStyled } from "./styles"

export const AddSongModal = () => {
	return (
		<AddSongModalStyled>
			<ScrollingPart>
				<Input label="Song name" />
				<Input label="Release date" type="date" />
				<Textarea label="Lyrics" />
			</ScrollingPart>
			<DefaultButton appearance="primary">Add new song</DefaultButton>
		</AddSongModalStyled>
	)
}