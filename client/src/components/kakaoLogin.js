import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import KakaoR from "./kakaoregister";
const { Kakao } = window;

function KakaoLogin() {
  let history = useHistory();
  const [Id, setId] = useState("");
  const loginWithKakao = () => {
    const scope = " account_email";
    Kakao.Auth.login({
      scope,
      // success는 인증 정보를 응답(response)으로 받는다.
      success: function (response) {
        //카카오 SDK에 사용자 토큰을 설정한다.
        window.Kakao.Auth.setAccessToken(response.access_token);
        //console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);

        let ACCESS_TOKEN = window.Kakao.Auth.getAccessToken();

        window.Kakao.API.request({
          url: "/v2/user/me",
          success: function ({ kakao_account }) {
            //어떤 정보 넘어오는지 확인

            const { email } = kakao_account;
            setId(email);
          },
          fail: function (error) {
            console.log(error);
          },
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
    axios
      .post(
        "http://localhost:5000/company/kakaoCompanyLogin",
        { userId: Id },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("id", res.data);
        if (res.data.message) {
          history.push("/company/login");
        } else {
          history.push("/register");
        }
      });
  };

  return (
    <>
      <KakaoR />
      <div>
        <button onClick={loginWithKakao}>aaaa</button>
      </div>

      <div>{Id}</div>
    </>
  );
}
export default KakaoLogin;