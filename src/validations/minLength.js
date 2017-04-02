export default function minLength(min) {
  return (value) => {
    return value && value.length < min ? ` must be at lest ${min} characters` : undefined
  }
}
