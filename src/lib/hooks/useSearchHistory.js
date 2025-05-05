import { useEffect, useState } from "react";

export default function useSarchHistory(key = "searchHistory") {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(key)) || [];
    setHistory(stored);
  }, [key]);

  const save = (value) => {
    if (!value?.trim()) return;
    let updated = history.filter((item) => item !== value);
    updated.unshift(value);
    if (updated.length > 10) updated.pop();
    localStorage.setItem(key, JSON.stringify(updated));
    setHistory(updated);
  };

  const remove = (item) => {
    const updated = history.filter((i) => i !== item);
    localStorage.setItem(key, JSON.stringify(updated));
    setHistory(updated);
  };

  const clear = () => {
    localStorage.removeItem(key);
    setHistory([]);
  };

  return {
    history,
    save,
    remove,
    clear,
    setHistory,
  };
}
