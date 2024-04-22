import { useState, useEffect } from 'react';

const useTime = () => {
  // 1. Відстежувати стан поточної дати. Функція `useState` отримує функцію-ініціалізатор в якості свого початкового стану. Він виконується лише один раз при виклику хука, тому в початковому стані буде лише поточна дата, на спочатку встановлюється час виклику хука.
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    // 2. Оновлювати поточну дату щосекунди за допомогою `setInterval`.
    const id = setInterval(() => {
      setTime(new Date()); // ✅ Добре: неідемпотентний код більше не виконується під час рендеру
    }, 1000);
    // 3. Поверніть функцію очищення, щоб не витік таймер `setInterval`.
    return () => clearInterval(id);
  }, []);

  return time;
};

const Clock = () => {
  const time = useTime();
  return <div style={{fontWeight: 'bold'}}>{time.toLocaleString()}</div>;
};

export default Clock;
