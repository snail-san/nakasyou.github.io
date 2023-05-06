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
  }
]

export default works