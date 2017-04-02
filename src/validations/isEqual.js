export default function isEqual(field) {
  return (value, allValues) => {
    return value && value !== allValues[field] ? ' is not the same' : undefined
  }
}
