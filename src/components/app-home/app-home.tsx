import "@stencil/redux";
import { Component, h, Prop } from "@stencil/core";
import { configureStore } from "../../store/index";
import { getPopularMovie } from "../../actions/movie";

@Component({
    tag: "app-home",
    styleUrl: "app-home.scss"
})
export class AppHome {
    storeUnsubscribe: any;
    getPopularMovie: typeof getPopularMovie;

    @Prop({ context: "store" })
    store: any;
    @Prop() movies: {
        movies: MovieState[];
        loading: boolean;
        totalPages: number;
    };

    async componentWillLoad() {
        const initialState: MyAppState = {
            movies: []
        };
        this.store.setStore(configureStore(initialState));

        this.store.mapDispatchToProps(this, { getPopularMovie });
        this.storeUnsubscribe = this.store.mapStateToProps(this, (state: MyAppState) => {
            return {
                movies: state.movies
            };
        });

        this.getPopularMovie();
    }

    componentDidUnload() {
        this.storeUnsubscribe();
    }

    render() {
        return [
            <app-menu />,

            <ion-content class="ion-padding">
                {this.movies.loading ? (
                    <div>Loading...</div>
                ) : (
                    <ion-grid>
                        {[...this.movies.movies]
                            .map(movie => (
                                <ion-col>
                                    <app-movie movie={movie} />
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
                    </ion-grid>
                )}
                Pagination : 1/{this.movies.totalPages}
            </ion-content>
        ];
    }
}
