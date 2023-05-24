export async function getAllUsers() {
  const response = await fetch('https://th-apex-http-callout.herokuapp.com/animals');
  console.log('data response',response);
  return await response.json();
}