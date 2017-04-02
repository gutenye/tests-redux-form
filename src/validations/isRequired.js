export default function isRequired() {
  return (value) => {
    return value ? undefined : ' is Required'
  }
}
