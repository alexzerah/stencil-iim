import { Component, h, Prop } from "@stencil/core";
import { getMovieByID } from "../../actions/movie";
import { configureStore } from "../../store";

@Component({
    tag: "app-view",
    styleUrl: "app-view.scss"
})
export class AppView {
    storeUnsubscribe: any;
    getMovieByID: typeof getMovieByID;

    @Prop() id: string;
    @Prop({ context: "store" })
    store: any;
    @Prop() movies: {
        movie: MovieDetailsState;
        movieLoading: boolean;
    };

    async componentWillLoad() {
        const initialState: MyAppState = {
            movies: []
        };
        this.store.setStore(configureStore(initialState));

        this.store.mapDispatchToProps(this, { getMovieByID });
        this.storeUnsubscribe = this.store.mapStateToProps(this, (state: MyAppState) => {
            return {
                movies: state.movies
            };
        });

        this.getMovieByID(this.id);
    }

    componentDidUnload() {
        this.storeUnsubscribe();
    }

    render() {
        const { movie } = this.movies;
        console.log(movie);
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
                {this.movies.movieLoading ? (
                    <p>Loading....</p>
                ) : (
                    <ion-card class="movie-card">
                        <img class="movie-img" src={`${process.env.movie_db_image_url}${movie.backdrop_path}`} />
                        <ion-fab class="movie-fav" horizontal="end" edge>
                            <ion-fab-button color="warning">
                                <ion-icon name="heart" />
                            </ion-fab-button>
                        </ion-fab>
                        <ion-card-header>
                            <ion-card-subtitle>
                                {movie.genres.map((genre, index) => (movie.genres[index + 1] ? genre.name + ", " : genre.name))}
                            </ion-card-subtitle>
                            <ion-card-title>
                                {movie.original_title} ({movie.release_date})
                            </ion-card-title>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-row>
                                <ion-item>{`Revenu: ${movie.revenue} $`}</ion-item>
                                <ion-item>{`Budget: ${movie.budget} $`}</ion-item>
                            </ion-row>
                            <ion-row>
                                <ion-item>{movie.overview}</ion-item>
                            </ion-row>
                            {[...movie.production_companies]
                                .map(company => (
                                    <ion-col>
                                        <p>{company.name}</p>
                                        {company.logo_path && <img class="movie-img" src={`${process.env.movie_db_image_url}${company.logo_path}`} />}
                                    </ion-col>
                                ))
                                .reduce(function(r, element, index) {
                                    index % 3 === 0 && r.push([]);
                                    r[r.length - 1].push(element);
                                    return r;
                                }, [])
                                .map(rowContent => (
                                    <ion-row>{rowContent}</ion-row>
                                ))}
                        </ion-card-content>
                    </ion-card>
                )}
            </ion-content>
        ];
    }
}
