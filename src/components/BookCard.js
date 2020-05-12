import { html } from 'htm/preact'
import ButtonDetails from './ButtonDetails'

export default class BookCard {
  constructor (book) {
    this.title = book.volumeInfo.title
    this.price = book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : 0
    this.thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''
  }

  render () {
    const buttonDetailsComponent = new ButtonDetails()
    const buttonAddFavorite = new ButtonAddFavorite()
    const buttonAddCheckout = new ButtonAddCheckout()

    return html`
        <article class="book-card">
        <img src="${this.thumbnail}" />

        <div class="info">
        <p class="book-title">${this.title}</p>
        <p class="book-price">${this.price}</p>
        </div>
        
        </article>
        `
  }
}
