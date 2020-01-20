import {Component, h} from '@stencil/core';

@Component({
    tag: 'app-view',
    styleUrl: 'app-view.scss'
})
export class AppView {

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/"/>
                    </ion-buttons>
                    <ion-title>View</ion-title>
                </ion-toolbar>
            </ion-header>
        ];
    }
}
