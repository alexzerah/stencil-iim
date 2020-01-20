import "@stencil/redux";
import {Component, h, Prop, State} from '@stencil/core';
import {configureStore} from "../../store/index";
import {getRandomQuote} from "../../actions/quote";

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.css'
})
export class AppHome {
    storeUnsubscribe: any;
    getRandomQuote: typeof getRandomQuote;

    @State()
    name: MyAppState["quote"];

    @Prop({context: "store"})
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
                <p>
                    Welcome to the PWA Toolkit. You can use this starter to build entire
                    apps with web components using Stencil and ionic/core! Check out the
                    README for everything that comes in this starter out of the box and
                    check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
                </p>

                <app-quote quote={this.quote} />

                <ion-button href="/profile/ionic" expand="block">Profile page</ion-button>
            </ion-content>
        ];
    }
}
