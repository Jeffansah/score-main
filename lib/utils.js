import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function ordinalSuffix(number) {
  let suffix;
  const modulo100 = number % 100;

  if (modulo100 >= 11 && modulo100 <= 13) {
      suffix = 'th'; // Handle special cases for 11th, 12th, 13th
  } else {
      switch (number % 10) {
          case 1:
              suffix = 'st';
              break;
          case 2:
              suffix = 'nd';
              break;
          case 3:
              suffix = 'rd';
              break;
          default:
              suffix = 'th';
      }
  }

  return `${number}${suffix}`;
}
