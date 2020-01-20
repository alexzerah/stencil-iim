import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: "app-quote"
})
export class AppQuote {
    @Prop() quote: QuoteState;

    render() {
        return (
            <div>
                <p>{"UserID: " + this.quote.userId}</p>
                <p>{"ID: " + this.quote.id}</p>
                <p>{"Title: " + this.quote.title}</p>
                <p>{"Completed: " + this.quote.completed}</p>
            </div>
        );
    }
}
