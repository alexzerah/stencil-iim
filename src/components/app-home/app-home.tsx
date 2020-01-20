import {Component, h} from '@stencil/core';

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.scss'
})
export class AppHome {
    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>Home</ion-title>
                </ion-toolbar>
            </ion-header>,

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
                                    Keep close to Nature's heart... and break clear away, once in awhile,
                                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
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
                                    Keep close to Nature's heart... and break clear away, once in awhile,
                                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
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
                                    Keep close to Nature's heart... and break clear away, once in awhile,
                                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-card>
                                <ion-card-header>
                                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                                    <ion-card-title>Card Title</ion-card-title>
                                </ion-card-header>

                                <ion-card-content>
                                    Keep close to Nature's heart... and break clear away, once in awhile,
                                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
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
                                    Keep close to Nature's heart... and break clear away, once in awhile,
                                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
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
                                    Keep close to Nature's heart... and break clear away, once in awhile,
                                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-content>
        ];
    }
}
