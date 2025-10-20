import { createUseStyles } from 'react-jss';
import Animation from './Animation';

const footerStyles = createUseStyles({
  loadingImage: {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

const Loading = () => {
  const classes = footerStyles();
  return (
    <div className={classes.loadingImage}>
      <Animation
        gif="/images/hands.gif"
        webm="/images/hands.webm"
        webp="/images/hands.webp"
        alt="Animation de chargement avec des mains"
      />
    </div>
  );
};

export default Loading;
