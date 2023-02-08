import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
export function useGoogleAuthentication() {
  const handleSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    try {
      if ("accessToken" in response) {
        const accessToken = response.accessToken;
        const data = await fetch(
          `${import.meta.env.VITE_API_URL}/google-authentication`,
          {
            method: "POST",
            body: JSON.stringify({
              token: accessToken,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        return await data.json();
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return {
    handleSuccess,
  };
}
