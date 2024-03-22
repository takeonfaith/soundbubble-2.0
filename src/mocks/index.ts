import { TSong } from "../entities/song/model/types";

export const MOCKS = {
	songs: [{
		id: '123',
		authors: [{
			displayName: 'test',
			uid: '3131'
		}],
		cover: 'https://fox40.com/wp-content/uploads/sites/13/2022/07/GettyImages-1308695861.jpg?strip=1',
		imageColors: ['red', 'black', 'white', 'green'],
		lyrics: [],
		songSrc: '',
		releaseDate: '31.07.2001',
		listens: 12,
		name: 'Test Song',
	}, {
		id: '123',
		authors: [{
			displayName: 'test',
			uid: '3131'
		}],
		cover: 'https://fox40.com/wp-content/uploads/sites/13/2022/07/GettyImages-1308695861.jpg?strip=1',
		imageColors: ['red', 'black', 'white', 'green'],
		lyrics: [],
		songSrc: '',
		releaseDate: '31.07.2001',
		listens: 12,
		name: 'Test Song',
	}] as TSong[]
}