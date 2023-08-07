import { FormI } from "./Components/Form";

export const apiJobtest = async (data: FormI) => {

  try {
    const response = await fetch(`https://api-jobtest.json2bot.chat/test`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    if (!response.ok) {
      throw json;
    }
    return json.data;
  } catch (error : any) {
    switch (error.httpcode) {
      case 500:
        return error.error;
      case 401:
        return error.error;
      default:
        return "알 수 없는 이유로 작업에 실패하였습니다.";
    }
  }
}