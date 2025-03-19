import { encodeGlobalID, decodeGlobalID } from "../shared/id.mjs";

// Fake Database
const nodes = [
  {
    __typename: "Person",
    id: encodeGlobalID("Person", "the-viewer"),
    name: "A. D. Veloper",
    profilePicture: {
      url: "/assets/a.png",
    },
    joined: "2023-01-01T00:00:00.000Z",
    location: {
      id: "viewer-location",
      name: "Wheresoever You Are",
    },
  },
  {
    __typename: "Person",
    id: encodeGlobalID("Person", "1"),
    name: "Chris P. Bacon",
    profilePicture: {
      url: "/assets/pig.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    location: {
      id: "10",
      name: "Poultropolis",
    },
  },
  {
    __typename: "Story",
    id: encodeGlobalID("Story", "2"),
    category: "ALL",
    title: "Local Yak Named Yak of the Year",
    summary:
      "The annual Yak of the Year awards ceremony took place last night, and this year's winner is none other than Max, a beloved yak from the small town of Millville. Max, who is known for his friendly personality and hardworking nature, beat out stiff competition from other yaks in the region to take home the coveted title.\n \nAccording to the judges, Max stood out due to his exceptional contributions to the community. He has been used as a pack animal to help transport goods to and from the town's market, and has also been a reliable source of milk and wool for local farmers. In addition, Max has become something of a local celebrity, often posing for photos with tourists and participating in community events.",
    authorID: encodeGlobalID("Organization", "7"),
    createdAt: "2020-01-01T00:00:00.000Z",
    attachments: [
      {
        url: "/assets/yak.png",
      },
    ],
    thumbnail: {
      url: "/assets/yak.png",
      altText: "Portrait of Max the Yak by a local artist",
    },
    likeCount: 5,
    doesViewerLike: false,
    comments: [
      {
        id: encodeGlobalID("Comment", "comment1"),
        text: "So proud of our local yak",
      },
      {
        id: encodeGlobalID("Comment", "comment2"),
        text: "I've been waiting my whole life for this moment",
      },
      {
        id: encodeGlobalID("Comment", "comment3"),
        text: "What's a yak???",
      },
      {
        id: encodeGlobalID("Comment", "comment4"),
        text: "We used to keep yaks in the old country",
      },
      {
        id: encodeGlobalID("Comment", "comment5"),
        text: "It's a yak attack, this award is whack",
      },
      {
        id: encodeGlobalID("Comment", "comment6"),
        text: "There are better yaks in every pasture of this country",
      },
      {
        id: encodeGlobalID("Comment", "comment7"),
        text: "Yak yak yak yak yak yak yak yak",
      },
      {
        id: encodeGlobalID("Comment", "comment8"),
        text: "He's a good yak, he saved my child from drowning",
      },
    ],
  },
  {
    __typename: "Story",
    id: encodeGlobalID("Story", "3"),
    category: "EDUCATION",
    title: "Why did the chicken cross the road? To get to the other side!",
    summary:
      "Chickens are curious animals and will often explore their surroundings, including crossing roads if the opportunity arises. It is important to note that chickens are intelligent and adaptable animals, and the specific reasons for any given chicken crossing the road may vary depending on the individual and its circumstances.",
    authorID: encodeGlobalID("Person", "1"),
    createdAt: "2020-01-01T00:00:00.000Z",
    attachments: [
      {
        url: "/assets/chicken.png",
      },
    ],
    thumbnail: {
      url: "/assets/chicken.png",
    },
    likeCount: 2,
    doesViewerLike: false,
    comments: [
      {
        id: encodeGlobalID("Comment", "comment9"),
        text: "I never knew!",
      },
      {
        id: encodeGlobalID("Comment", "comment10"),
        text: "This is a very deep joke.",
      },
    ],
  },
  {
    __typename: "Story",
    id: encodeGlobalID("Story", "4"),
    category: "NEWS",
    title: "New Hedgehog Species Discovered",
    summary:
      "Breaking news! Scientists have just announced the discovery of a new species of hedgehog, and you won't believe what makes this species unique.\n \n     According to the researchers, the new hedgehogs, which have been named 'sparklehogs,' are distinguished by their ability to produce rainbow-colored sparks from their spikes when they are feeling threatened.\n     \n     But that's not all! The sparklehogs have also been observed using their sparkling spikes to communicate with one another, creating dazzling light shows in the process.\n     \n     'We've never seen anything like it,' said lead researcher Dr. Maria Hernandez. 'These hedgehogs are truly one of a kind.'",
    authorID: encodeGlobalID("Organization", "6"),
    createdAt: "2020-01-01T00:00:00.000Z",
    attachments: [
      {
        url: "/assets/hedgehog.png",
      },
    ],
    thumbnail: {
      url: "/assets/hedgehog.png",
    },
    likeCount: 160,
    doesViewerLike: false,
    comments: [
      {
        id: encodeGlobalID("Comment", "comment11"),
        text: "Aren't hedges dark though???",
      },
    ],
  },
  {
    __typename: "Story",
    id: encodeGlobalID("Story", "99"),
    category: "NEWS",
    title: "Study: The egg came first, but only after the chicken",
    summary:
      'In a shocking new study, scientists have finally determined the age-old question of whether the chicken or the egg came first. And it turns out, the answer is both!\n      According to the research, the egg actually came first — but only after the chicken had already laid it.\n      \n      "We were amazed by the results," said lead researcher Dr. Janet Hennessy. "It seems that the chicken somehow managed to lay an egg before it even existed. It\'s a real chicken-and-egg paradox."\n      \n      The study, which involved observing hundreds of chickens on a farm, found that the birds would lay eggs and then, a short time later, a fully-formed chicken would emerge from the shell.\n      \n      "We always thought that the egg came first and the chicken was born from it," said Hennessy. "But it turns out, the chicken was there all along, just waiting to hatch."\n      \n      The findings have caused quite a stir in the scientific community, with many experts calling for further research to be done on the mysterious life cycle of the chicken.\n      \n      "It\'s a groundbreaking discovery that will change the way we think about the chicken and the egg," said Hennessy. "Who knows what other secrets these amazing creatures may be hiding?"',
    authorID: encodeGlobalID("Person", "30"),
    createdAt: "2020-01-01T00:00:00.000Z",
    attachments: [
      {
        url: "/assets/puzzled_egg.png",
      },
    ],
    thumbnail: {
      url: "/assets/puzzled_egg.png",
    },
    likeCount: 17,
    doesViewerLike: false,
    comments: [
      {
        id: encodeGlobalID("Comment", "comment13"),
        text: "Wait...",
      },
    ],
  },
  {
    __typename: "Person",
    id: encodeGlobalID("Person", "30"),
    name: "Brock Boc",
    profilePicture: {
      url: "/assets/chicken_lover.png",
    },
    joined: "2017-04-02T00:00:00.000Z",
    location: {
      id: "31",
      name: "Paradoxopolus",
    },
  },
  {
    __typename: "Story",
    id: encodeGlobalID("Story", "5"),
    category: "COOKING",
    title: "Onion Soup Recipe",
    summary:
      "I am so excited to share with you my all-time favorite recipe for French onion soup. I can't even begin to tell you how many times I've made this dish for my family and friends, and it never fails to impress.\n\n As a self-proclaimed wine mom, I always love finding new and creative ways to incorporate my favorite vintages into my cooking. And let me tell you, the dry white wine in this recipe really takes the flavor of the onions to the next level. Trust me, it's a game changer.\n \n But don't just take my word for it – give this recipe a try for yourself and see how it becomes a new staple in your household. Not only is it delicious, but it's also the perfect comfort food for those cold winter nights.\n \n So grab your wine glasses and let's get cooking!",
    authorID: encodeGlobalID("Person", "8"),
    createdAt: "2020-01-01T00:00:00.000Z",
    attachments: [
      {
        url: "/assets/recipe.png",
      },
    ],
    thumbnail: {
      url: "/assets/recipe.png",
    },
    likeCount: 12,
    doesViewerLike: false,
    comments: [
      {
        id: encodeGlobalID("Comment", "comment12"),
        text: "I tried it with passionfruit instead of onions, it's a great substitution!",
      },
    ],
  },
  {
    __typename: "Story",
    id: encodeGlobalID("Story", "story6"),
    category: "ALL",
    title: "What is my cat trying to tell me?",
    summary:
      "I just had the most surreal conversation with my cat. I was talking to her about my day and she just stared at me with this really intense look in her eyes and meowed. I have no idea what she was trying to say, but I have a feeling she was trying to impart some deep wisdom on me. Or maybe she just wanted more treats. Either way, it was a very interesting conversation. #catconvo #felinewisdom",
    authorID: encodeGlobalID("Person", "9"),
    createdAt: "2020-01-01T00:00:00.000Z",
    attachments: [
      {
        url: "/assets/cat.png",
      },
    ],
    thumbnail: {
      url: "/assets/cat.png",
    },
    likeCount: 12,
    doesViewerLike: false,
    comments: [],
  },
  {
    __typename: "Organization",
    id: encodeGlobalID("Organization", "6"),
    name: "Gazelle Gazette",
    profilePicture: {
      url: "/assets/gazelle.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    organizationKind: "JOURNALISTIC",
  },
  {
    __typename: "Organization",
    id: encodeGlobalID("Organization", "7"),
    name: "Baller Bovine Board",
    profilePicture: {
      url: "/assets/bovine.png",
      altText: "Blue-ribboned insignia of the Baller Bovine Board",
    },
    joined: "2020-01-01T00:00:00.000Z",
    organizationKind: "NONPROFIT",
  },
  {
    __typename: "Person",
    id: encodeGlobalID("Person", "8"),
    name: "Suzie Queue",
    profilePicture: {
      url: "/assets/blogger.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    location: {
      id: "11",
      name: "Venice",
    },
  },

  {
    __typename: "Person",
    id: encodeGlobalID("Person", "15"),
    name: "Jennifer Letuchyberg",
    profilePicture: {
      url: "/assets/j.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    location: {
      id: "16",
      name: "Zig Zag",
    },
  },
  {
    __typename: "Person",
    id: encodeGlobalID("Person", "13"),
    name: "Alexei Seligsteinwitz",
    profilePicture: {
      url: "/assets/alexei.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    location: {
      id: "14",
      name: "Mystery",
    },
  },

  {
    __typename: "Person",
    id: encodeGlobalID("Person", "19"),
    name: "Catalina Chaiman",
    profilePicture: {
      url: "/assets/c.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    location: {
      id: "20",
      name: "Weed",
    },
  },
  {
    __typename: "Person",
    id: encodeGlobalID("Person", "9"),
    name: "Katrina Starer",
    profilePicture: {
      url: "/assets/cat_avatar.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    location: {
      id: "12",
      name: "New York",
    },
  },
  {
    __typename: "Person",
    id: encodeGlobalID("Person", "17"),
    name: "Paige Talaberg",
    profilePicture: {
      url: "/assets/p.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    location: {
      id: "18",
      name: "Boring",
    },
  },
  {
    __typename: "Person",
    id: encodeGlobalID("Person", "21"),
    name: "Huy Li",
    profilePicture: {
      url: "/assets/h.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    location: {
      id: "22",
      name: "Cave Junction",
    },
  },
];

// Node interface resolvers
export const resolvers = {
  Query: {
    viewer: () => {
      return {
        actor: nodes.find(
          (node) => node.id === encodeGlobalID("Person", "the-viewer")
        ),
      };
    },
    topStory: (_, { category }) => {
      return nodes.find(
        (node) =>
          node.__typename === "Story" &&
          (!category || node.category === category)
      );
    },
    topStories: () => {
      return nodes.filter((node) => node.__typename === "Story");
    },
    _entities: (_, { representations }) => {
      return representations.map((ref) => {
        // Find the node in our database that matches the reference
        return nodes.find(
          (node) => node.__typename === ref.__typename && node.id === ref.id
        );
      });
    },
  },

  Actor: {
    __resolveType(obj) {
      return obj.__typename;
    },
  },

  Person: {
    __resolveReference(reference) {
      const { localID } = decodeGlobalID(reference.id);
      return nodes.find(
        (node) =>
          node.__typename === "Person" &&
          decodeGlobalID(node.id).localID === localID
      );
    },
  },

  Organization: {
    __resolveReference(reference) {
      const { localID } = decodeGlobalID(reference.id);
      return nodes.find(
        (node) =>
          node.__typename === "Organization" &&
          decodeGlobalID(node.id).localID === localID
      );
    },
  },

  Story: {
    __resolveReference(reference) {
      const { localID } = decodeGlobalID(reference.id);
      return nodes.find(
        (node) =>
          node.__typename === "Story" &&
          decodeGlobalID(node.id).localID === localID
      );
    },
    poster: (story) => {
      return nodes.find((node) => node.id === story.authorID);
    },
    comments: (story, { first, after: afterStr }) => {
      const count = first ?? Infinity;
      const after = parseInt(afterStr, 10) || 0;
      const next = count + after;
      const comments = story.comments;
      return {
        pageInfo: {
          hasNextPage: comments.length >= next,
          endCursor: "" + next,
        },
        edges: comments.slice(after, next).map((comment) => ({
          node: comment,
        })),
      };
    },
  },

  Image: {
    url: ({ url }, { width, height }) => {
      const params = [
        ["width", width],
        ["height", height],
      ].filter(([k, v]) => v != null);
      return (
        url +
        (params.length
          ? "?" + params.map(([k, v]) => `${k}=${v}`).join("&")
          : "")
      );
    },
  },

  Viewer: {
    contacts: (_, { search }) => {
      const persons = nodes.filter(
        (node) =>
          node.__typename === "Person" &&
          node.id !== encodeGlobalID("Person", "the-viewer")
      );
      if (search == null || search === "") {
        return persons;
      } else {
        return persons.filter((person) =>
          person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        );
      }
    },
    newsfeedStories: (_, { first, after: afterStr, category }) => {
      const count = first ?? Infinity;
      const after = parseInt(afterStr, 10) || 0;
      const next = count + after;
      const edges = nodes.filter(
        (node) =>
          node.__typename === "Story" &&
          (typeof category !== "string" ||
            category === "ALL" ||
            category === node.category)
      );
      return {
        pageInfo: {
          hasNextPage: edges.length >= next,
          endCursor: "" + next,
        },
        edges: edges
          .slice(after, next)
          .map((node) => ({ node, cursor: node.id })),
      };
    },
  },

  Mutation: {
    likeStory: (_, { id, doesLike }) => {
      const { localID } = decodeGlobalID(id);
      const story = nodes.find(
        (node) => decodeGlobalID(node.id).localID === localID
      );
      if (!story) {
        return null; // TODO: Should report an error
      }
      story.likeCount += doesLike - story.doesViewerLike;
      story.doesViewerLike = doesLike;
      return {
        story,
      };
    },
    postStoryComment: (_, { id, text }) => {
      const { localID } = decodeGlobalID(id);
      const story = nodes.find(
        (node) => decodeGlobalID(node.id).localID === localID
      );
      if (!story) {
        return null; // TODO: Should report an error
      }
      const newComment = {
        id: encodeGlobalID("Comment", `posted-comment-${nextCommentID++}`),
        text,
      };
      story.comments.unshift(newComment);
      return {
        story,
        commentEdge: {
          node: newComment,
        },
      };
    },
  },
};

let nextCommentID = 0;

export default resolvers;
