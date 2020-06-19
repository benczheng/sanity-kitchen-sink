export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5eecaa9f8195a5cba213ebe2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-u6udrhvp',
                  apiId: '0b2aefde-fdf5-4c58-8744-02d897f285cd'
                },
                {
                  buildHookId: '5eecaaa03ee7b6fa787c2638',
                  title: 'Website',
                  name: 'covid-community-care',
                  apiId: '17d17c93-cbe5-4a77-853c-7ff0bbf797a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/benczheng/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-y4snshiv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
