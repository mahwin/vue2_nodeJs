import Vue from "vue";
import $axios from "axios";

class AxiosExtend {
  instance = null;
  constructor() {
    this.instance = $axios.create({
      baseURL:
        process.env.NODE_ENV === "production"
          ? "릴리즈서버 REST api uri"
          : "http://127.0.0.1:3000",
      timeout: 1000,
      withCredentials: true,
    });
    this.instance.interceptors.request.use(
      (config) => {
        //JWT 토큰 관련 처리
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        let message = null;

        if (error.response?.data?.error) {
          message = error.response.data.error;
        } else {
          switch (error.response?.status) {
            case 0:
              message =
                "REST API 서버에 접근할 수 없습니다\n 서버 관리자에게 문의하세요";
              break;
            case 400:
              message = "잘못된 요청입니다.";
              break;
            case 404:
              message = "요청하신 자원을 찾을 수 없습니다.";
              break;
            case 500:
              message = "서버 내부 오류입니다.";
              break;
            default:
              message = "잘못된 요청입니다.";
              break;
          }
          alert(message);
          return Promise.reject(error);
        }
      }
    );
  }
}
