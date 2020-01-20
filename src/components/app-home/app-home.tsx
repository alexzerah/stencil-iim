import "@stencil/redux";
import { Component, h, Prop, State } from "@stencil/core";
import { configureStore } from "../../store/index";
import { getRandomQuote } from "../../actions/quote";

@Component({
    tag: "app-home",
    styleUrl: "app-home.scss"
})
export class AppHome {
    storeUnsubscribe: any;
    getRandomQuote: typeof getRandomQuote;

    @State()
    name: MyAppState["quote"];

    @Prop({ context: "store" })
    store: any;
    @Prop() quote: QuoteState;

    async componentWillLoad() {
        const initialState: MyAppState = {
            quote: {
                userId: 1,
                id: 1,
                title: "delectus aut autem",
                completed: false
            }
        };
        this.store.setStore(configureStore(initialState));

        this.store.mapDispatchToProps(this, { getRandomQuote });
        this.storeUnsubscribe = this.store.mapStateToProps(this, (state: MyAppState) => {
            return {
                quote: state.quote
            };
        });

        this.getRandomQuote();
    }

    componentDidUnload() {
        this.storeUnsubscribe();
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>Home 🏡</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">
                <app-quote quote={this.quote} />

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
                </ion-grid>
            </ion-content>
        ];
    }
}
