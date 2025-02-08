import axios from 'axios';

export class Server {
    static url = 'http://localhost:3000';
    static api = axios.create({ baseURL: this.url });
    static async uploadAudio(audioFile: File, id: string) {
        const formData = new FormData();

        // Append the audio file
        formData.append('audio', audioFile);

        // Append additional data
        formData.append('id', id);

        try {
            const response = await this.api.post('/audio', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status !== 200) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.data;
            console.log('Upload successful:', result);
        } catch (error) {
            console.error('Error uploading audio:', error);
        }
    }

    static async transformById(id: string) {
        if (!id) return null;
        const formData = new FormData();
        formData.append('id', id);

        try {
            await this.api.post('/transform-by-id', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (error) {
            console.error('Error transforming by id:', error);
            throw new Error(`Error transforming by id: ${error}`);
        }
    }

    static async youtubeLink(url: string) {
        const formData = new FormData();
        formData.append('youtubeLink', url);
        try {
            const res = await this.api.post('/youtube', formData, {
                responseType: 'blob',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (res.status !== 200) {
                throw new Error('Не удалось получить файл');
            }

            const data = await res.data;

            return data as File | null;
        } catch (error) {
            console.error('Error transforming by id:', error);
            throw new Error(`Error transforming by id: ${error}`);
        }
    }
}
