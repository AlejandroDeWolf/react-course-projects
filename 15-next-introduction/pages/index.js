import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://www.eventonline.be/wp-content/uploads/2019/07/themarket-1.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://www.eventonline.be/wp-content/uploads/2019/07/themarket-1.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// this will run on the server, after deployment, the page will be pre-rendered with the data we fetch
// only use this when we have a lot of incoming requests
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };

//   // not need to revalidate, because this runs for every incoming request
// }

// this way we can pre-render the page with the data we fetch, the source code of the page will be generated at build time
export async function getStaticProps() {
  // fetch data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // every 10 seconds, the page will be re-generated
    revalidate: 10,
  };
}

export default HomePage;
