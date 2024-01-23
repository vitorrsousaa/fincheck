export function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 1500));
}
