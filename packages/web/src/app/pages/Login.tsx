import styled from "styled-components";
import {useEffect} from "react";
import {useAppDispatch} from "../store/hooks";
import {setEmail} from "../store/user";
import {decodeJwt} from "../services/auth";

const LoginStyles = styled.div`
#button-container {
  padding: 2em 0;
}`

function isGooglePresent(window: Window): window is Window & { google: any } {
  return "google" in window
}

export function Login() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    if(!isGooglePresent(window)) {
      throw new Error('Need google')
    }
    window.google.accounts.id.initialize({
      client_id: '731118327920-2j1grdqv7udolk0qrcsc7pvot8vkduim.apps.googleusercontent.com',
      callback: (creds: {
        clientId: string
        client_id: string
        credential: string
        select_by: string
      }) => {
        const decoded = decodeJwt(creds.credential)
        localStorage.setItem('GCP_JWT', creds.credential)
        console.log('decoded', decoded)
        dispatch(setEmail(decoded.email))
      }
    });
    const parent = document.getElementById('g_id_onload');
    window.google.accounts.id.renderButton(parent, {theme: "filled_black"});
  })
  return (
    <LoginStyles>
      <div>
        <div id="button-container">
          <div id="g_id_onload"
               data-client_id="731118327920-2j1grdqv7udolk0qrcsc7pvot8vkduim.apps.googleusercontent.com"
               data-context="signin"
               data-ux_mode="popup"
               data-itp_support="true">
          </div>

          <div className="g_id_signin"
               data-type="standard"
               data-shape="rectangular"
               data-theme="outline"
               data-text="signin_with"
               data-logo_alignment="left">
          </div>
        </div>
      </div>
    </LoginStyles>
  );
}
