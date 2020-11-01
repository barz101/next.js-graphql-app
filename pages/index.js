import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { request, gql } from 'graphql-request'
// import fetcher from '../lib/fetcher.js'
// import { request } from 'graphql-request'
const fetcher = query => request(API, query)
const QUERY = gql`
  {
    viewer {
 site {
  name
  orgName
  processes {
    items {  
      processId
      description
      name
    }
 }
}
}
  }
`
const API = 'https://omni-prerelease.insights.us/api/graphql'

function Home() {
  // console.log(data);
  const { data, error } = useSWR(
    QUERY,
    fetcher
  )
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>blablalalalal</p>
        {data &&
        <p>{data.viewer.site.name}</p> }
        {/* {data && data.viewer.processes.items.map((process) =>
          <ProcessPreview process={process} key={processId} />
        )} */}
      </section>
        
    </Layout>
  )

}
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const data = request(API, query).then((res) => console.log(res))
//   console.log(data);
//   // Pass data to the page via props
//   return { props: { data } }
// }
export default Home