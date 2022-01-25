import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  query ProjectsPageQuery {
    projects: allSanitySampleProject(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const ProjectsPage = props => {
  const { data, errors } = props


  if (errors) {
    return (
			<h1>Whoa there, errors happened</h1>
    )
  }

	let projects = []
	projects = data?.projects?.edges?.map(({ node }) => node)

	console.log({ data, errors, projects })

  return (
    <div>
      <h1>Projects</h1>
			<ul>
			  {projects.map(({ title }) => (
					<li>
			  		<h4>{title}</h4>
					</li>
			  ))}
			</ul>
    </div>
  )
}

export default ProjectsPage
