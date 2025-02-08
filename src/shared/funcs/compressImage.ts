export const compressImage = (
    file: File | undefined,
    quality: number = 0.7
): Promise<Blob> => {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject('File not found');
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target?.result as string;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                if (!ctx) return reject('Canvas context error');

                const maxWidth = 600; // Максимальная ширина
                const maxHeight = 600; // Максимальная высота
                let { width, height } = img;

                // Масштабирование изображения
                if (width > maxWidth || height > maxHeight) {
                    const scale = Math.min(
                        maxWidth / width,
                        maxHeight / height
                    );
                    width *= scale;
                    height *= scale;
                }

                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);

                // Получаем сжатое изображение
                canvas.toBlob(
                    (blob) => {
                        if (blob) resolve(blob);
                        else reject('Compression error');
                    },
                    'image/jpeg', // Можно поменять на 'image/png'
                    quality // 0.0 - максимальное сжатие, 1.0 - оригинальное качество
                );
            };
        };
        reader.onerror = (error) => reject(error);
    });
};
