import { writeFile } from 'fs';

// Конвертация объекта в JSON-строку
export const setDataToJson = (data: object) => {
  const jsonData = JSON.stringify(data, null, 2);

// Путь к файлу, в который будет производиться запись
  const filePath = 'data.json';

// Запись JSON-строки в файл
  writeFile(filePath, jsonData, (err) => {
    if (err) {
      console.error('Ошибка при записи в файл:', err);
      return;
    }
    console.log('Данные успешно записаны в файл:', filePath);
  });

}

