export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60aa688bf29cd0a342731fd8",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-miificg3",
                  apiId: "057ae6a0-7b82-4555-9ad1-cdd254f4531f",
                },
                {
                  buildHookId: "60aa688b3293e4741ff31bf2",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-qc9cdjh7",
                  apiId: "38c4ddb6-c359-40a2-829a-20c4c0bd2ef8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/vitorflg-draft/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-qc9cdjh7.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
