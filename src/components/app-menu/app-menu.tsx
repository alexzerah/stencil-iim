import { Component, h } from "@stencil/core";

@Component({
    tag: "app-menu",
    styleUrl: "app-menu.scss"
})
export class AppMenu {
    render() {
        return [
            <ion-header>
                <ion-toolbar color="dark">
                    <ion-title>Stencil movie website 2.0</ion-title>
                    <ion-buttons slot="end">
                        <ion-back-button></ion-back-button>
                        <ion-button href="/">Home</ion-button>
                        <ion-button href="/fav/">My movies</ion-button>
                        <ion-button href="/login/">Login</ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
        ];
    }
}
