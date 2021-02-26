export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60394200e9dfff0f5322af0f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-aexiarar',
                  apiId: '8e274af1-c6b5-44d7-92fb-4df87ab933ed'
                },
                {
                  buildHookId: '60394200d698860f053bb543',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-emnuo4to',
                  apiId: '23828876-7cf0-42e1-bdbc-cfb6e3c2cc8b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomalex0/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-emnuo4to.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
