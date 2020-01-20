import "@stencil/redux";
import { Component, h } from "@stencil/core";

@Component({
    tag: "app-fav",
    styleUrl: "app-fav.scss"
})
export class AppFav {
    render() {
        return [
            <app-menu />,

            <ion-content class="ion-padding">
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-card>
                                <ion-card-header>
                                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                                    <ion-card-title>Card Title</ion-card-title>
                                </ion-card-header>

                                <ion-card-content>
                                    Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods.
                                    Wash your spirit clean.
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                        <ion-col>
                            <ion-card>
                                <ion-card-header>
                                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                                    <ion-card-title>Card Title</ion-card-title>
                                </ion-card-header>

                                <ion-card-content>
                                    Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods.
                                    Wash your spirit clean.
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                        <ion-col>
                            <ion-card>
                                <ion-card-header>
                                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                                    <ion-card-title>Card Title</ion-card-title>
                                </ion-card-header>

                                <ion-card-content>
                                    Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods.
                                    Wash your spirit clean.
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-card>
                                <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg" />
                                <ion-fab vertical="center" horizontal="end" edge>
                                    <ion-fab-button color="warning">
                                        <ion-icon name="heart" />
                                    </ion-fab-button>
                                </ion-fab>
                                <ion-card-header>
                                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                                    <ion-card-title>Card Title</ion-card-title>
                                </ion-card-header>

                                <ion-card-content>
                                    Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods.
                                    Wash your spirit clean.
                                </ion-card-content>
                                <ion-item href="/view/15" class="activated" color="primary" detail>
                                    <ion-label>View</ion-label>
                                </ion-item>
                            </ion-card>
                        </ion-col>
                        <ion-col>
                            <ion-card>
                                <ion-card-header>
                                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                                    <ion-card-title>Card Title</ion-card-title>
                                </ion-card-header>

                                <ion-card-content>
                                    Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods.
                                    Wash your spirit clean.
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                        <ion-col>
                            <ion-card>
                                <ion-card-header>
                                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                                    <ion-card-title>Card Title</ion-card-title>
                                </ion-card-header>

                                <ion-card-content>
                                    Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods.
                                    Wash your spirit clean.
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-content>
        ];
    }
}
