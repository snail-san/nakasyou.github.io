interface Work {
  imageUrl?: string
  title: string
  link: string
}
type Works = Work[]

const works: Works = [
  {
    title: "Liberluna page",
    link: "https://liberluna.github.io",
    desc: "Liberlunaのサイトを作りました",
    imageUrl: "/work-images/liberluna-page.jpeg",
  },
  {
    title: "借金時計",
    link: "https://nakasyou.github.io/debt-clock",
    desc: "OSSの借金時計がなかったので、作ってみました。",
    imageUrl: "/work-images/debt-clock.jpeg",
  },
  {
    title: "NoWikipediaAd",
    link: "https://github.com/nakasyou/NoWikipediaAd",
    desc: "Wikipediaの募金広告を消します。既存の広告ブロッカーが消さないので、作りました。",
  },
]

export default works
