import { createUseStyles } from 'react-jss';
import Animation from '../Components/Animation';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Animation
        gif="/images/travolta.gif"
        webm="/images/travolta.webm"
        webp="/images/travolta.webp"
        alt="Meme Travolta confus"
      />
      <h1>La page que vous cherchez n'existe pas !</h1>
      <p>
        Revenez en arrière ou allez à la <a href="/">page d'accueil</a>.
      </p>
    </div>
  );
};

export default NotFound;
