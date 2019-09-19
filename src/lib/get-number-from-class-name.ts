export const getNumberFromClassName = (className: string): string => {
  return className.replace(/\D/g, '')
}
