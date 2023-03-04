import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetupsPage = () => {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-77d71-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = Object.keys(data).map((id) => ({ ...data[id], id }));

        setIsLoading(false);
        setMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
};

export default AllMeetupsPage;
