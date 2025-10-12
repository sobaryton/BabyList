# Wishlist Frontend

Use [`mise`](https://mise.jdx.dev/) to ensure you have the right version of required
tools installed.

# Start the app

Ensure the `.env` file exists, or create it from `.env.dist`.
Then run:

```bash
npm run dev
```

# Authentication

The Admin portal requires authentication using Authentik SSO.
The `/admin` route prefix is wrapped in an `AuthProvider` from
[`react-oidc-context`](https://github.com/authts/react-oidc-context).
When accessing a protected route without being authenticated:

- A redirect occurs to `/admin/login`
- The OIDC package generates a PKCE `code_verifier` and a `state`, and stores them in
  the context
- It calls Authentik's Wishlist app's `/.well-known/openid-configuration` to get the
  `auth` and `token` endpoints
- A new tab is open to Authentik's URL for the Wishlist app's `authorization_code + PKCE`
  flow, containing query parameters `code_challenge = BASE64URL-ENCODE(SHA256(ASCII(code_verifier)))`
  and `state`
- Authentik redirects back to the `/admin/login` page in the same tab after login, with
  a `code` and the `state` query parameters
- The OIDC package's `AuthProvider` automatically calls something like:
  `window.opener.postMessage("{code: X, state: Y}", "http://theAppURL")` to send the
  authentication details to its parent tab, and then closes
- In the parent tab the OIDC package reads the message with something like:
  ```ts
  window.addEventListener('message', event => {
    if (event.origin != 'theExpectedUrl') return;
    process(event.data);
  });
  ```
- The OIDC package then:
  - Validates the `state` value matches the one in the context
  - Exchanges the `code` and `code_verifier` for an Access Token using Authentik's
    `token` endpoint
  - Updates the authentication details in the context, and in the local storage

## Security

The `state` parameter in OAuth2's `authentication_code` flow protects against CSRF by
linking the response's authentication `code` with the original request's `state`.

On the other hand the Proof-key for code exchange (PKCE) protects against
man-in-the-middle attacks since only the real initiator knows the `code_verifier`
necessary to exchange the code for a token.

Because of this, the `react-oidc-context` OIDC package does not check the JWS signature.
