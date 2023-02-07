import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <Fragment>
      <MeetupDetail
        image="https://www.eventonline.be/wp-content/uploads/2019/07/themarket-1.jpg"
        title="A First Meetup"
        address="Some Address 5, 12345 Some City"
        description="This is a first meetup!"
      />
    </Fragment>
  );
}

export default MeetupDetails;
