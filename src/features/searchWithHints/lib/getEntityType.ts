import { ENTITIES_ICONS } from "../../../shared/constants/icons";

export const getEntityType = (entity: any): keyof typeof ENTITIES_ICONS => {
	if (entity.isAuthor) return 'author';

	if (entity.displayName) return 'user'

	if (entity.subscribers !== undefined) return 'playlist'

	return 'song'
}