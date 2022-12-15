import { useState, useEffect } from 'react';

export default (): boolean => {
  const [value, setValue] = useState<boolean>(false);

  useEffect(() => {
    const storedValue = localStorage.getItem('styleify');
    if (storedValue) {
      setValue(storedValue === 'true');
    }
  }, [value]);

  useEffect(() => {
    function handleStorageEvent(event: StorageEvent) {
      console.log(event.key)
      if (event.key === 'styleify') {
        setValue(event.newValue === 'true');
      }
    }

    window.addEventListener('storage', handleStorageEvent);

    return () => {
      window.removeEventListener('storage', handleStorageEvent);
    };
  }, []);

  return value;
}