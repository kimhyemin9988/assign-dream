import { FormI } from "./Components/Form";

/* fetch를 사용 Post요청, 오류처리 */
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
    console.log(error);
    switch (error.httpcode) {
      case 500:
        return error.error;
      case 401:
        // 과제용 문서에는 400에러가 발생한다고 했으나 실제 401 "Unauthorized" 에러 발생
        return error.error;
      default:
        return "알 수 없는 이유로 작업에 실패하였습니다.";
    }
  }
}