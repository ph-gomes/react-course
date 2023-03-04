import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

const MeetupList = (props) => {
  const { meetups } = props;

  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </ul>
  );
};

export default MeetupList;
