import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const history = useHistory();

  const onAddMeetupHandler = async (meetupData) => {
    await fetch(
      'https://react-getting-started-77d71-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: { 'content-type': 'application/json' },
      }
    );

    history.replace('/');
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
