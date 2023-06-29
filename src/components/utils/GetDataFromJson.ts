import { readFile,  } from 'fs';
export const getDataFromJson = () => {
  // Путь к файлу, из которого будем читать данные
  const filePath = 'data.json';

// Чтение данных из JSON-файла
  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка при чтении файла:', err);
      return;
    }

    try {
      // Преобразование JSON-строки в объект
      const jsonData = JSON.parse(data);

      // Использование данных из файла
      console.log('Прочитанные данные:', jsonData);
    } catch (error) {
      console.error('Ошибка при парсинге JSON:', error);
    }
  });
}

