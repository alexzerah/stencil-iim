import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: "app-view",
    styleUrl: "app-view.scss"
})
export class AppView {
    @Prop() id: string;

    componentWillLoad() {
        console.log(this.id);
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/" />
                    </ion-buttons>
                    <ion-title>View</ion-title>
                </ion-toolbar>
            </ion-header>,
            <ion-content class="ion-padding">
                <ion-card class="movie-card">
                    <img class="movie-img" src="https://ionicframework.com/docs/demos/api/card/madison.jpg" />
                    <ion-fab class="movie-fav" horizontal="end" edge>
                        <ion-fab-button color="warning">
                            <ion-icon name="heart" />
                        </ion-fab-button>
                    </ion-fab>
                    <ion-card-header>
                        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                        <ion-card-title>Card Title</ion-card-title>
                    </ion-card-header>

                    <ion-card-content>
                        Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your
                        spirit clean.
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet massa suscipit metus lobortis tristique a et tortor. Duis semper
                        ultricies nisl eget consectetur. Phasellus nec nunc nec leo tincidunt imperdiet. Donec eget pellentesque odio. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Pellentesque placerat mi sit amet lacus sodales, nec ultrices enim mattis. Vestibulum nunc enim,
                        congue elementum ipsum vulputate, sagittis lacinia orci. Quisque velit lacus, suscipit sed erat non, pharetra dignissim ipsum. Sed
                        elementum odio iaculis enim varius ornare.
                        <br />
                        <br />
                        Nam et ultricies elit. Nunc nec metus elementum, consequat erat a, eleifend orci. Mauris in consectetur lacus. Curabitur a sem
                        fermentum, sodales felis sit amet, tempus justo. Sed dui tellus, porttitor quis convallis non, lacinia vitae ante. Nullam efficitur nisi
                        eu nisl bibendum finibus. Vivamus dapibus ligula sit amet lectus condimentum, in lobortis felis convallis.
                        <br />
                        <br />
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vel arcu ante. Proin porta, mi a tempor posuere, mauris dui
                        placerat enim, id efficitur urna dolor eu libero. Fusce ac leo justo. In vitae elit ullamcorper, cursus neque in, imperdiet elit. In
                        iaculis justo at arcu tristique, sagittis feugiat massa luctus. Quisque egestas nunc id urna efficitur, id auctor lectus posuere.
                    </ion-card-content>
                </ion-card>
            </ion-content>
        ];
    }
}
