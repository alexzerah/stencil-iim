import { Component, h, State } from "@stencil/core";

@Component({
    tag: "app-root",
    styleUrl: "app-root.css"
})
export class AppRoot {
    @State() idToken;

    componentWillLoad() {
        this.idToken = localStorage.getItem("okta_id_token");
    }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          {!this.idToken && <ion-route-redirect from="*" to="/login" />}
          <ion-route url="/" component="app-home" />
          <ion-route url="/login" component="app-auth" />
          <ion-route url="/list" component="app-list" />
          <ion-route url="/view/:id" component="app-view" />
          <ion-route url="/profile/:name" component="app-profile" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
