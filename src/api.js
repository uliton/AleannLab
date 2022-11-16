const URL_API = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
const access_token = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

export const getJobList = async () => {
  try {
    const responce = await fetch(`${URL_API}?access_token=${access_token}`);

    return responce.json();
  }
  catch {
    throw new Error();
  }
}
