interface QuoteState {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

interface MyAppState {
    quote: QuoteState;
}
