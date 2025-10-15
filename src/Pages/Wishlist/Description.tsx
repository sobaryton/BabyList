import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import WarningIcon from '@mui/icons-material/Warning';
import classNames from 'classnames';
import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useParams } from 'react-router-dom';
import { getGift } from '../../api/getGift';
import FormContent from '../../Components/FormContent';
import Header from '../../Components/Headers/Header';
import Loading from '../../Components/Loading';
import Modal from '../../Components/Modal';
import Navigation from '../../Components/Navigation';
import { setGiftList } from '../../reducers/giftList';
import { toggleModal } from '../../reducers/modal';
import { GiftStatus, type GiftType, selectGift } from '../../reducers/selectedGift';
import {
  darkBlue,
  darkYellow,
  font20,
  font48,
  green,
  lightBlue,
  lightYellow,
  orange,
  red,
  white,
} from '../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../utils/state';

const cardStyles = createUseStyles({
  page: {
    position: 'relative',
  },
  main: {
    padding: '2rem 0.5rem',
  },
  navigation: {
    maxWidth: '25rem',
  },
  btn: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '9rem',
    minHeight: '2rem',
    marginRight: '0.5rem',
    background: lightBlue,
    color: darkBlue,
    border: 'none',
    cursor: 'pointer',
    transition: '500ms all ease',
    fontWeight: 600,
    fontSize: font20,
    padding: '0.5rem',
    '&:hover': {
      background: darkBlue,
      color: lightBlue,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  btnIcon: {
    marginRight: '0.7rem',
  },
  offrirBtn: {
    background: lightYellow,
    color: darkYellow,
    '&:hover': {
      background: darkYellow,
      color: lightYellow,
    },
  },
  articleDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    marginTop: '3rem',
    maxWidth: '20rem',
  },
  article: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
    '& p': {
      margin: '0.5rem 0',
    },
    '@media (min-width: 1024px)': {
      flexDirection: 'row',
      alignContent: 'flex-start',
      justifyContent: 'flex-start',
    },
  },
  image: {
    width: '100%',
    minWidth: '17rem',
    maxWidth: '40rem',
    minHeight: 'auto',
    backgroundSize: 'cover',
    marginRight: 0,
    backgroundOrigin: 'border-box',
    backgroundPosition: 'center',
    '@media (min-width: 1024px)': {
      width: '40%',
      marginRight: '1rem',
    },
    '& img': {
      width: '100%',
    },
  },
  articleText: {
    width: '100%',
    '@media (min-width: 1024px)': {
      width: 'calc(60% - 1rem)',
    },
  },
  provider: {
    color: darkBlue,
    background: lightBlue,
    marginBottom: '1rem',
    fontWeight: 'bold',
    padding: '0.3rem 0.4rem',
    textDecoration: 'none',
  },
  header: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginBottom: '3rem',
  },
  title: {
    color: darkBlue,
  },
  labels: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  categorylabel: {
    background: lightBlue,
    color: darkBlue,
    '& p': {
      color: darkBlue,
    },
  },
  label: {
    width: '10rem',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem 1rem 1rem 0',
    '& p': {
      fontWeight: 700,
      textTransform: 'uppercase',
      color: white,
      textAlign: 'center',
    },
  },
  redLabel: {
    background: red,
  },
  greenLabel: {
    background: green,
  },
  orangeLabel: {
    background: orange,
  },
  textIcon: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerImage: {
    opacity: 0.75,
  },
  red: {
    color: red,
    fontWeight: 'bold',
  },
  nl2br: {
    whiteSpace: 'pre-line',
  },
  textWithIcon: {
    display: 'flex',
    alignItems: 'center',
  },
});

const Description = () => {
  const classes = cardStyles();
  const dispatch = useAppDispatch();
  const showModal = useAppSelector(state => state.modal.isOpen);
  const { id } = useParams() as { id: string };
  const selectedGift = useAppSelector(state => state.selectedGift.selectedGift);
  const gifts = useAppSelector(state => state.giftList.gifts);
  const {
    image,
    url,
    title,
    store,
    description,
    amount,
    status,
    currency,
    remainingAmount,
    category,
    transactions,
    alreadyBought,
  } = selectedGift || ({} as GiftType);

  const refreshGift = async (id: string) => {
    const refreshedGift = await getGift(id);
    dispatch(setGiftList(gifts.map(gift => (gift.id === id ? refreshedGift : gift))));
    dispatch(selectGift(refreshedGift));
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: refreshGift changes on every refresh
  useEffect(() => {
    if (!selectedGift || !transactions || selectedGift.id !== id) {
      void refreshGift(id);
    }
  }, [id, selectedGift, transactions]);

  const labelClass: { [key in GiftStatus]: keyof typeof classes } = {
    [GiftStatus.OFFERED]: 'greenLabel',
    [GiftStatus.TO_OFFER]: 'redLabel',
    [GiftStatus.PARTLY_FUNDED]: 'orangeLabel',
  };

  const statusLabel = {
    [GiftStatus.OFFERED]: 'Offert',
    [GiftStatus.TO_OFFER]: 'À offrir',
    [GiftStatus.PARTLY_FUNDED]: 'À participer',
  };

  const openTransactionModal = () => {
    dispatch(toggleModal({ amount, status, remainingAmount, alreadyBought }));
  };

  // biome-ignore lint/correctness/noNestedComponentDefinitions: Unfortunate really
  const Participants = ({ uppercaseFirstLetter }: { uppercaseFirstLetter: boolean }) => {
    const nonAnonymousTransactions = transactions?.filter(transactions => !transactions.anonymous) || [];
    if (nonAnonymousTransactions.length === 0) {
      return uppercaseFirstLetter ? <span>Certaines personnes</span> : <span>certaines personnes</span>;
    }

    const nonAnonymousParticipants = nonAnonymousTransactions.map(transaction => transaction.name);
    const uniqParticipants = Array.from(new Set(nonAnonymousParticipants));
    const anonymousTransactions = transactions?.filter(transactions => transactions.anonymous) || [];

    if (uniqParticipants.length > 0 && anonymousTransactions.length > 0) {
      return (
        <span>
          {uniqParticipants.map((name, key) => [key > 0 && ', ', <b key={name}>{name}</b>])} et{' '}
          {anonymousTransactions.length} autre
          {anonymousTransactions.length > 1 && 's'}
        </span>
      );
    } else if (uniqParticipants.length === 1) {
      return <b>{uniqParticipants[0]}</b>;
    } else {
      return (
        <span>
          {uniqParticipants
            .slice(0, uniqParticipants.length - 1)
            .map((name, key) => [key > 0 && ', ', <b key={name}>{name}</b>])}{' '}
          et <b>{uniqParticipants[uniqParticipants.length - 1]}</b>
        </span>
      );
    }
  };

  // biome-ignore lint/correctness/noNestedComponentDefinitions: Unfortunate really
  const GiftStatusBanner = ({ displayStatus }: { displayStatus: GiftStatus }) => (
    <div className={classNames(classes.label, classes[labelClass[displayStatus]])}>
      <p>{statusLabel[displayStatus]}</p>
    </div>
  );

  // biome-ignore lint/correctness/noNestedComponentDefinitions: Unfortunate really
  const GiftStatusMessage = ({
    giftStatus,
    alreadyBought,
    amount,
    remainingAmount,
    participants,
  }: {
    giftStatus: GiftStatus;
    alreadyBought: boolean;
    amount: number;
    remainingAmount: number;
    participants: number;
  }) => {
    if (giftStatus === GiftStatus.OFFERED) {
      return <OfferedGiftStatusMessage amount={amount} />;
    } else if (giftStatus === GiftStatus.TO_OFFER && alreadyBought) {
      return <ToOfferAlreadyBoughtGiftStatusMessage amount={amount} />;
    } else if (giftStatus === GiftStatus.TO_OFFER && !alreadyBought) {
      return <ToOfferGiftStatusMessage amount={amount} />;
    } else {
      return (
        <ToParticipateGiftStatusMessage
          amount={amount}
          remainingAmount={remainingAmount}
          alreadyBought={alreadyBought}
          participants={participants}
        />
      );
    }
  };

  // biome-ignore lint/correctness/noNestedComponentDefinitions: Unfortunate really
  const OfferedGiftStatusMessage = ({ amount }: { amount: number }) => (
    <>
      <p>
        Ce cadeau a déjà été offert par <Participants uppercaseFirstLetter={false} />.
      </p>
      <p>
        Son prix était de <b>{currency === 'GBP' ? `£${amount}` : `${amount}€`}</b>.
      </p>
    </>
  );

  // biome-ignore lint/correctness/noNestedComponentDefinitions: Unfortunate really
  const ToOfferGiftStatusMessage = ({ amount }: { amount: number }) => (
    <>
      <p>Ce cadeau est à offrir.</p>
      <p>
        Son prix total est de <b>{currency === 'GBP' ? `£${amount}` : `${amount}€`}</b>.
      </p>
    </>
  );

  // biome-ignore lint/correctness/noNestedComponentDefinitions: Unfortunate really
  const ToOfferAlreadyBoughtGiftStatusMessage = ({ amount }: { amount: number }) => (
    <>
      <p>
        Ce cadeau est à offrir{' '}
        <span className={classes.red}>
          sous forme de participation uniqument, car nous en avons fait l'achat à l'avance
        </span>
        .
      </p>
      <p>
        Son prix total est de <b>{currency === 'GBP' ? `£${amount}` : `${amount}€`}</b>.
      </p>
    </>
  );

  // biome-ignore lint/correctness/noNestedComponentDefinitions: Unfortunate really
  const ToParticipateGiftStatusMessage = ({
    amount,
    remainingAmount,
    alreadyBought,
    participants,
  }: {
    amount: number;
    remainingAmount: number;
    alreadyBought: boolean;
    participants: number;
  }) => (
    <>
      <div className={classes.textWithIcon}>
        <WarningIcon
          sx={{
            fontSize: font48,
            color: red,
            marginRight: '1rem',
            marginBottom: '0.3rem',
          }}
        />
        <p>
          <Participants uppercaseFirstLetter={true} /> {participants > 1 ? 'ont' : 'a'} déjà contribué à financer ce
          cadeau.
        </p>
      </div>
      <p>
        Son prix total est de <b>{currency === 'GBP' ? `£${amount}` : `${amount}€`}</b>, et il reste{' '}
        <b>{currency === 'GBP' ? `£${remainingAmount}` : `${remainingAmount}€`}</b> (
        {Math.floor((remainingAmount / amount) * 100)}%) à participer.
      </p>
      {alreadyBought && <p className={classes.red}>Notez que nous avons déjà fait l'achat de ce cadeau à l'avance.</p>}
    </>
  );

  const giftDisplayStatus = status === GiftStatus.TO_OFFER && alreadyBought ? GiftStatus.PARTLY_FUNDED : status;

  return selectedGift ? (
    <div className={classes.page}>
      <header>
        <Header background="/images/pieds-bebe.jpg" backgroundPosition="center" className={classes.headerImage} />
      </header>
      <main className={classes.main}>
        <Navigation className={classes.navigation} link="/list" />
        <div>
          <div className={classes.articleDetails}>
            <div className={classes.header}>
              <h1 className={classes.title}>{title}</h1>
              <div className={classes.labels}>
                <GiftStatusBanner displayStatus={giftDisplayStatus} />
                <div className={classNames(classes.label, classes.categorylabel)}>
                  <p>{category}</p>
                </div>
              </div>
            </div>
            <div className={classes.article}>
              <div className={classes.image}>
                <img src={image} alt={`${title}`} />
              </div>
              <div className={classes.articleText}>
                <p className={classes.nl2br}>{description}</p>
                <GiftStatusMessage
                  giftStatus={status}
                  alreadyBought={alreadyBought}
                  amount={amount}
                  remainingAmount={remainingAmount}
                  participants={transactions?.length || 0}
                />
                <p>
                  Trouvez cet article sur{' '}
                  <a className={classes.provider} href={url} target="_blank" rel="noreferrer">
                    {store}
                  </a>
                  .
                </p>
                <div className={classes.buttonWrap}>
                  <button type="button" className={classes.btn} onClick={() => window.open(url)}>
                    <OpenInNewIcon className={classes.btnIcon} />
                    Lien
                  </button>
                  {!alreadyBought && status === GiftStatus.TO_OFFER && (
                    <button
                      type="button"
                      className={classNames(classes.btn, classes.offrirBtn)}
                      onClick={openTransactionModal}
                    >
                      <CardGiftcardIcon className={classes.btnIcon} />
                      Offrir
                    </button>
                  )}
                  {((alreadyBought && status === GiftStatus.TO_OFFER) || status === GiftStatus.PARTLY_FUNDED) && (
                    <button
                      type="button"
                      className={classNames(classes.btn, classes.offrirBtn)}
                      onClick={openTransactionModal}
                    >
                      <CardGiftcardIcon className={classes.btnIcon} />
                      Participer
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {showModal && (
        <Modal>
          <FormContent />
        </Modal>
      )}
    </div>
  ) : (
    <Loading />
  );
};

export default Description;
