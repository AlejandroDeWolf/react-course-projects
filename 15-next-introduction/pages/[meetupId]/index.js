import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

// getStaticPaths is needed in dynamic pages to tell Next.js which pages to generate in advance
export async function getStaticPaths() {
  return {
    // fallback tells Next.js what pages to generate in advance, if its false it will only generate the pages that are defined in the paths array
    fallback: false,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://www.eventonline.be/wp-content/uploads/2019/07/themarket-1.jpg",
        id: meetupId,
        title: "A First Meetup",
        address: "Some Address 5, 12345 Some City",
        description: "This is a first meetup!",
      },
    },
  };
}

export default MeetupDetails;
