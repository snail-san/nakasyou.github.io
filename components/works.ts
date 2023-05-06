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
    imageUrl: "/work-images/liberluna-page.jpeg"
  }
]

export default works