interface ResultData {
    selectedNumbers: {
      firstField: number[];
      secondField: number[];
    };
    isTicketWon: boolean;
  }

export function sendResults(data: ResultData, attempt = 1) {
    fetch('https://jsonplaceholder.typicode.com/posts', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        console.log('Результаты успешно отправлены');
        return response.json(); // Процессируем ответ сервера
      } else {
        throw new Error('Не удалось отправить данные');
      }
    })
    .catch(error => {
      console.error('Ошибка:', error);
      if (attempt < 3) {
        setTimeout(() => sendResults(data, attempt + 1), 2000);
      } else {
        console.error('Превышено количество попыток отправки');
      }
    });
  }