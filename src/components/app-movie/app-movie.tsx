import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: "app-movie"
})
export class AppMovie {
    @Prop() movie: MovieState;

    render() {
        return (
            <ion-card>
                <img src={`${process.env.movie_db_image_url}${this.movie.backdrop_path}`} />
                <ion-fab vertical="center" horizontal="end" edge>
                    <ion-fab-button color="warning">
                        <ion-icon name="heart" />
                    </ion-fab-button>
                </ion-fab>
                <ion-card-header>
                    <ion-card-subtitle>{this.movie.original_language}</ion-card-subtitle>
                    <ion-card-title>{this.movie.original_title}</ion-card-title>
                </ion-card-header>

                <ion-card-content>{this.movie.overview}</ion-card-content>
                <ion-item href={`/view/${this.movie.id}`} class="activated" color="primary" detail>
                    <ion-label>View</ion-label>
                </ion-item>
            </ion-card>
        );
    }
}
