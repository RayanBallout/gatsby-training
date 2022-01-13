import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
    {
        site {
            info: siteMetadata {
                author
                description
                title
                simpleData
                person {
                    age
                    name
                }
                complexData {
                    age
                    name
                }
            }
        }
    }
`;

const FetchData = () => {
    const {
        site: {
            info: { title }
        }
    } = useStaticQuery(getData);
    return (
        <div>
            <h1>Hello from fetch {title}</h1>
        </div>
    )
}

export default FetchData
