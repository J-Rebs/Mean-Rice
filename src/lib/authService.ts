import * as createAuth0ClientStuff from "@auth0/auth0-spa-js";
import type { Auth0Client, PopupLoginOptions } from "@auth0/auth0-spa-js";
import { user, isAuthenticated, popupOpen } from "$lib/store";


const createAuth0Client = createAuth0ClientStuff.createAuth0Client;
export async function createClient(): Promise<Auth0Client> {
  const auth0Client = await createAuth0Client({
    domain: import.meta.env.VITE_AUTH0_DOMAIN as string,
    clientId: import.meta.env.VITE_APP_CLIENT_ID as string
  });
  return auth0Client;
}

export async function loginWithPop(clientId: Auth0Client, options?: PopupLoginOptions): Promise<void> {
  popupOpen.set(true);
  try {
    await clientId.loginWithPopup(options);

    user.set(await clientId.getUser());
    isAuthenticated.set(true);
  } catch (e) {
    console.error(e);
  } finally {
    popupOpen.set(false);
  }
}

export function logout(clientId: Auth0Client): void {
  clientId.logout();
}

