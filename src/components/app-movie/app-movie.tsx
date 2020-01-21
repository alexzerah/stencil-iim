import { Component, Prop, h, State } from "@stencil/core";

@Component({
    tag: "app-movie"
})
export class AppMovie {
    @Prop() movie: MovieState;

    @State() fav: string = localStorage.getItem("fav");
    @State() parseFav?: any = this.fav && JSON.parse(this.fav);

    addFav = (movie: Object) => {
        if (this.parseFav) {
            this.parseFav = [...(localStorage.getItem("fav") && JSON.parse(localStorage.getItem("fav"))), movie];
            this.fav = JSON.stringify(this.parseFav);
            localStorage.setItem("fav", this.fav);
        } else {
            this.parseFav = [movie];
            this.fav = JSON.stringify(this.parseFav);
            localStorage.setItem("fav", this.fav);
        }
    };

    removeFav = (movie: { id: number }) => {
        if (this.parseFav) {
            this.parseFav = [...(localStorage.getItem("fav") && JSON.parse(localStorage.getItem("fav")))].filter(m => movie.id !== m.id);
            this.fav = JSON.stringify(this.parseFav);
            localStorage.setItem("fav", this.fav);
        }
    };

    render() {
        return (
            <ion-card>
                <img src={`${process.env.movie_db_image_url}${this.movie.backdrop_path}`} />
                {this.parseFav && this.parseFav.length > 0 && this.parseFav.find(movie => this.movie.id === movie.id) ? (
                    <ion-fab vertical="center" horizontal="end" edge onClick={() => this.removeFav(this.movie)}>
                        <ion-fab-button color="warning">Remove</ion-fab-button>
                    </ion-fab>
                ) : (
                    <ion-fab vertical="center" horizontal="end" edge onClick={() => this.addFav(this.movie)}>
                        <ion-fab-button color="warning">
                            <ion-icon name="heart" />
                        </ion-fab-button>
                    </ion-fab>
                )}
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
