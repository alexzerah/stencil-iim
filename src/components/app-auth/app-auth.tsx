import { Component, State, Element, Listen, h } from "@stencil/core";
declare const OktaAuth: any;

@Component({
    tag: "app-auth",
    styleUrl: "app-auth.css"
})
export class AppAuth {
    @State() authClient: any;
    @Element() host: HTMLElement;
    private nav: HTMLIonNavElement = document.querySelector("ion-nav");

    constructor() {
        this.authClient = new OktaAuth({
            clientId: process.env.okta_clientId,
            url: process.env.okta_url,
            issuer: "default"
        });
    }

    componentWillLoad() {
        let idToken = localStorage.getItem("okta_id_token");
        if (idToken) {
            this.nav.push("/profile");
        }
    }

    @Listen("keydown")
    handleKeyDown(ev: KeyboardEvent) {
        if (ev.key === "Enter") {
            this.login();
        }
    }

    login() {
        let inputs = this.host.querySelectorAll("input");
        let user = {
            username: inputs[0].value,
            password: inputs[1].value
        };

        return this.authClient
            .signIn(user)
            .then(res => {
                if (res.status === "SUCCESS") {
                    return this.authClient.token
                        .getWithoutPrompt({
                            responseType: "id_token",
                            scopes: ["openid", "profile", "email"],
                            sessionToken: res.sessionToken,
                            redirectUri: process.env.redirectUri
                        })
                        .then(token => {
                            localStorage.setItem("okta_id_token", JSON.stringify(token));
                            this.nav.push("app-profile");
                        });
                } else {
                    throw `Unable to handle ${res.status} status code`;
                }
            })
            .fail(function(err) {
                console.error(err);
            });
    }

    render() {
        return (
            <form class="app-auth">
                <div class="form-item">
                    <label>
                        Username:
                        <input type="text" name="username" autocomplete="username" />
                    </label>
                </div>
                <div class="form-item">
                    <label>
                        Password:
                        <input type="password" name="password" autocomplete="current-password" />
                    </label>
                </div>
                <div class="form-actions">
                    <button type="button" onClick={() => this.login()}>
                        Login
                    </button>
                </div>
            </form>
        );
    }
}
