export const encodeToBase64: (file: File) => Promise<string> = (file: File) => {
  const reader = new FileReader()
  if (file) reader.readAsDataURL(file)
  return new Promise<string>((resolve, reject) => {
    reader.onload = () => {
      resolve(reader.result as string);
    }
    reader.onerror = (error) => {
      reject(error)
    }
  })
}
export default encodeToBase64
