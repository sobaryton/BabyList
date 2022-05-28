import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ClearIcon from '@mui/icons-material/Clear';
import { darkBlue, font14, font16, font20, lightBlue, white, lightRed, darkRed, orange, red, green } from '../../utils/constants';
import { GiftStatus, GiftType } from '../../reducers/selectedGift';

const useStyle = createUseStyles({
    card: {
        width: '20rem',
        position: 'relative',
        boxShadow: '0px 0px 13px 0px rgba(0,0,0,0.15)',
        margin: '1rem 0.5rem',
    },
    image: {
        width: '100%',
        height: '16rem',
        backgroundSize: 'cover',
        backgroundOrigin: 'border-box',
        backgroundPosition: 'center',
    },
    price: {
        position: 'absolute',
        top: 6,
        right: 6,
        background: white,
        padding: '0.3rem',
        borderRadius: '3px 4px 4px 3px',
        borderLeft: '1px solid white',
        marginLeft: 19,
        minWidth: '3rem',
        height: 39,
        display: 'flex',
        alignItems: 'center',
        '& p': {
            fontWeight: 700,
            fontSize: font16,
            color: darkBlue,
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            display: 'block',
            left: '-19px',
            top: 0,
            width: 0,
            height: 0,
            borderTop: '19px solid transparent',
            borderBottom: '20px solid transparent',
            borderRight: `19px solid ${white}`,
        },
        '&::after': {
            content: '""',
            backgroundColor: darkBlue,
            borderRadius: '50%',
            width: 6,
            height: 6,
            display: 'block',
            position: 'absolute',
            left: '-9px',
            top: 17,
        },
    },
    desc: {
        padding: '0.5rem',
    },
    provider: {
        fontSize: font14,
        fontStyle: 'italic',
        color: 'grey',
        marginBottom: '1rem',
    },
    label: {
        width: '100%',
        height: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& p': {
            fontWeight: 700,
            textTransform: 'uppercase',
        },
    },
    buttonWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem',
        marginTop: '0.5rem',
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
    deleteBtn: {
        background: lightRed,
        color: darkRed,
        '&:hover': {
            background: darkRed,
            color: lightRed,
        },
    },
    link: {
        textDecoration: 'none',
        cursor: 'pointer',
        width: '9rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    redLabel: {
        background: red,
        color: white
    },
    greenLabel: {
        background: green,
        color: white
    },
    orangeLabel: {
        background: orange,
        color: white
    },
});

const GiftCard = ({ gift, onDelete }: { gift: GiftType, onDelete: () => void }) => {
    const {id, image, amount, currency, store, title, description, status} = gift;
    const classes = useStyle();

    const labelClass: {[key in GiftStatus]: keyof typeof classes} = {
        [GiftStatus.OFFERED]: 'greenLabel',
        [GiftStatus.TO_OFFER]: 'redLabel',
        [GiftStatus.PARTLY_FUNDED]: 'orangeLabel',
    };

    return (
        <div className={classes.card}>
            <div className={classes.image} style={{ backgroundImage: `url(${image})` }}></div>
            <div className={classes.price}><p>{currency === 'GBP' ? `£${amount}` : `${amount}${currency}`}</p></div>
            <div className={classNames(classes.label, classes[labelClass[status]])}>
                <p>{status}</p>
            </div>
            <div className={classes.desc}>
                <h3>{title.length > 30 ? `${title.substring(0, 30)}...` : title}</h3>
                <p className={classes.provider}>{store}</p>
                <p>{description.length > 35 ? `${description.substring(0, 35)}...` : description}</p>
            </div>
            <div className={classes.buttonWrap}>
                <Link to={`/admin/update/${id}`} className={classes.link}>
                    <button className={classes.btn}>
                        <AutorenewIcon className={classes.btnIcon} />
                        Update
                    </button>
                </Link>
                <button className={classNames(classes.btn, classes.deleteBtn)} onClick={onDelete}>
                    <ClearIcon className={classes.btnIcon} />
                    Delete
                </button>
            </div>
        </div>
    );
};

export default GiftCard;
