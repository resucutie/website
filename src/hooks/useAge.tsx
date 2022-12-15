import { useState, useEffect } from 'react';

export default () => {
  // Initialize the age to null
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    const currentDate = new Date();
    const birthDate = new Date(2005 - 1, 11, 27); // weird bug. had to sub 1 from years

    const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
    console.log(ageInMilliseconds)

    // Convert the age from milliseconds to years, and round down to the nearest whole number
    const calculatedAge = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));

    // Update the age in state
    setAge(calculatedAge);
  }, []);

  return age;
}