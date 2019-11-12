import { request } from 'graphql-request'

const GRAPHCMS_ENDPOINT = 'https://api-uswest.graphcms.com/v1/ck2v2on9h04w501hg3zmr5m0d/master';

const query = `
{
  posts {
    id
    title
    image {
      handle
    }
    content
    tags
    author {
      id
      name
    }
  }
  
  authors {
    id
    name
    avatar {
      handle
    }
    bibliography
  }
}
`

export default {
    getsiteData: () => ({
      title: 'React Static',
    }),
  
getRoutes: async () => {
  const{ posts, authors } = await request(GRAPHCMS_ENDPOINT, query) 

    return [
      {
        path: '/',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/pages/post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/about',
        component: 'src/pages/about',
        getData: () => ({
          authors
        })
      }
    ];
  }
};
