export default {
  title: 'Verses',
  name: 'verses',
  type: 'object',
  fields: [
    {
      title: 'Verse',
      name: 'verse',
      type: 'string',
    },
    {
      name: "imageVerse",
      title: "Image Verse",
      type: "image",
      fields: [
        // {
        //   name: "caption",
        //   type: "string",
        //   title: "Image caption",
        //   description: "Appears below image.",
        //   options: {
        //     isHighlighted: true
        //   }
        // },
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true
          }
        }
      ],
      options: {
        hotspot: true
      }
    },
   {
      name: "english",
      title: "English Translation",
      description:
        "The excerpt is used in blog feeds, and also for search results",
      type: "text",
      rows: 5,
      validation: Rule => Rule.max(2000)
    },
     {
      name: "swahili",
      title: "Swahili Translation",
      description:
        "The excerpt is used in blog feeds, and also for search results",
      type: "text",
      rows: 5,
      validation: Rule => Rule.max(2000)
    },
    
    {
      title: 'English Audio',
      name: 'englishAudio',
      type: 'string',
    },
    {
      title: 'Swahili Audio',
      name: 'swahiliAudio',
      type: 'string',
    },
     {
      name: "body",
      title: "Body",
      type: "blockContent"
    }
  ],
};