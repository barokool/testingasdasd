import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useGoogleAuthentication } from "../hooks/useGoogleAuthentication";
import { gapi } from "gapi-script";
export function GoogleButton() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const { handleSuccess } = useGoogleAuthentication();

  const handleLog = async (response: any) => {
    const handle = await handleSuccess(response);
    console.log({ handle });
  };

  const onError = (error: any) => {
    console.log(error);
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Log in"
      // onSuccess={handleLog}
      onSuccess={handleLog}
      onFailure={onError}
      cookiePolicy={"single_host_origin"}
    />
  );
}
