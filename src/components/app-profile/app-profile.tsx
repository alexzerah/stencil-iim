import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css'
})
export class AppProfile {

  private router: HTMLIonRouterElement = document.querySelector('ion-router')

  @State() user: AppUser;
  @Prop({ context: "isServer" }) private isServer: boolean;

  componentWillLoad() {
    console.log(">>>componentWillLoad");
    if (!this.isServer) {
      let token = JSON.parse(localStorage.getItem("okta_id_token"));
      if (token) {
        this.user = token.claims;
        console.log(this.user);
      } else {
        this.router.push("/login");
      }
    }
  }

  componentWillUpdate() {
    console.log(">>>componentWillUpdate");
    if (!this.isServer) {
      let token = JSON.parse(localStorage.getItem("okta_id_token"));
      if (token) {
        this.user = token.claims;
        console.log(this.user);
      } else {
        this.router.push("/login");
      }
    }
  }

  logout() {
    if (!this.isServer) {
      localStorage.removeItem("okta_id_token");
      location.reload();
    }
  }

  render() {
    {this.user}
    if (this.user) {
      let keys = Object.keys(this.user);
      return <div class="app-profile">
        <h2>{this.user.name}</h2>
        <ul>
          {keys.map(key => <li><span>{key}</span>: {this.user[key]}</li>)}
        </ul>
        <ion-button onClick={this.logout}>
          Logout
      </ion-button>
      </div>;
    }
    else {
      <div>Oh no ! 😨</div>
    }
  }
}
