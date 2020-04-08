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
                  buildHookId: '5e8e430fc226e042ddef9353',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-smartstudio-studio',
                  apiId: 'a47d533c-3eee-429a-a733-01f28f2676a9'
                },
                {
                  buildHookId: '5e8e430f4e12d68c18afb4e2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-smartstudio',
                  apiId: 'dea5eba7-a126-4a08-b239-1fd547872ddf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jortegamx/sanity-gatsby-blog-smartstudio',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-smartstudio.netlify.com', category: 'apps' }
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
