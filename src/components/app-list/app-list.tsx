import {Component, h} from '@stencil/core';

@Component({
    tag: 'app-list',
    styleUrl: 'app-list.scss'
})
export class AppProfile {

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/"/>
                    </ion-buttons>
                    <ion-title>List</ion-title>
                </ion-toolbar>
            </ion-header>
        ];
    }
}
