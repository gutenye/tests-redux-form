import { subYears, isAfter } from 'date-fns'

export default function isDate() {
  return (value) => {
    if (!value)
      return ' is Required'
    const day = parseInt(value.day, 10)
    if (isNaN(day))
      return ' DD must be a number'
    if (day < 1 || day > 31)
      return ' must be 31 >= DD >= 1'
    const month = parseInt(value.month, 10)
    if (isNaN(month))
      return ' MM must be a number'
    if (month < 1 || month > 12)
      return ' must be 12 >= MM >= 1'
    const year = parseInt(value.year, 10)
    if (isNaN(year))
      return ' YYYY must be a number'
    if (year < 1816)
      return ' YYYY must after 1816'
    const date = new Date(year, month-1, day)
    if (date.getMonth() !== month-1)
      return ' is Invalid'
    const eighteenYearsAgo = subYears(new Date(), 18)
    if (isAfter(date, eighteenYearsAgo))
      return ' must be at lest 18 years old'
    return undefined
  }
}
