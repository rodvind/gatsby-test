import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby'

// import Footer from '../components/footer'
// import Header from '../components/header'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
  // Markdown posts
  // const data = useStaticQuery(graphql `
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // console.log(data)

  // CMS posts (Contentful)
  const data = useStaticQuery(graphql `
    query {
      allContentfulBlogPost(
        sort: {
          fields: publishedDate
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  
  return (
    <div>
      <Layout>
        <Head title="Blog"/>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>  
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
  // return (
  //   <div>
  //     <Layout>
  //       <h1>Blog</h1>
  //       <ol className={blogStyles.posts}>
  //         {data.allMarkdownRemark.edges.map(edge => {
  //           return (
  //             <li className={blogStyles.post}>
  //               <Link to={`/blog/${edge.node.fields.slug}`}>
  //                 <h2>{edge.node.frontmatter.title}</h2>
  //                 <p>{edge.node.frontmatter.date}</p>
  //               </Link>  
  //             </li>
  //           )
  //         })}
  //       </ol>
  //     </Layout>
  //   </div>
  // )
}

export default BlogPage