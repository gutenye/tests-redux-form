export default function isEmail() {
  return (value) => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
      ' is Invalid' : undefined
  }
}
