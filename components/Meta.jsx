import Head from "next/head"


const Meta = ({ keywords, description, title }) => {
  return (
    <Head>
    <meta name="keywords" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <title>{title}</title>
  </Head>
  )
}

Meta.defaultProps = {
    title: "Ebue movie app",
    keywords: "free movies, popular movies",
    description: "browse through the most up to date movies"
}

export default Meta