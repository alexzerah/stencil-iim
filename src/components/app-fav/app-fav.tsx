import "@stencil/redux";
import { Component, h } from "@stencil/core";

@Component({
    tag: "app-fav",
    styleUrl: "app-fav.scss"
})
export class AppFav {
    render() {
        const fav: string = localStorage.getItem("fav");
        const parseFav: any = fav && JSON.parse(fav);

        return [
            <app-menu />,

            <ion-content class="ion-padding">
                <ion-grid>
                    {parseFav ? (
                        [...parseFav]
                            .map(fav => (
                                <ion-col>
                                    <app-movie movie={fav} />
                                </ion-col>
                            ))
                            .reduce(function(r, element, index) {
                                index % 3 === 0 && r.push([]);
                                r[r.length - 1].push(element);
                                return r;
                            }, [])
                            .map(rowContent => <ion-row>{rowContent}</ion-row>)
                    ) : (
                        <p>No favorites</p>
                    )}
                </ion-grid>
            </ion-content>
        ];
    }
}
