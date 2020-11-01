import { request } from 'graphql-request'

const API = 'https://omni-prerelease.insights.us/api/graphql'

export default function fetcher(api, query) {
   var data = request(api, query).then((res) => console.log(res))
    return data
}