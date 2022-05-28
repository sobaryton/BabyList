import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import { font20, lightGreen, darkGreen } from '../utils/constants'
import { adminDeleteGift } from '../api/adminDeleteGift'
import { adminListGifts } from '../api/adminListGifts'
import GiftCard from '../Components/Admin/GiftCard'
import { GiftType } from '../reducers/selectedGift'

const useStyle = createUseStyles({
    list: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        marginTop: '1rem',
        flexWrap: 'wrap',
        maxWidth: '75rem',
        margin: 'auto',
    },
    link: {
        textDecoration: 'none',
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    btn: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        minHeight: '2rem',
        marginRight: '0.5rem',
        background: lightGreen,
        color: darkGreen,
        border: 'none',
        cursor: 'pointer',
        transition: '500ms all ease',
        fontWeight: 600,
        fontSize: font20,
        padding: '0.5rem',
        '&:hover': {
            background: darkGreen,
            color: lightGreen,
        },
        '&:last-child': {
            marginRight: 0,
        },
    },
    btnIcon: {
        marginRight: '0.7rem',
    },
})

const AdminList = () => {
    const [gifts, setGifts] = useState([] as GiftType[])
    const classes = useStyle()

    useEffect(() => {
        adminListGifts()
            .then(setGifts)
    }, [])

    const deleteGift = (giftId: string) => {
        adminDeleteGift(giftId)
            .then(() => setGifts(gifts.filter(gift => gift.id !== giftId)));
    }

    return (
        <>
            <Link to="/admin/add" className={classes.link}>
                <button className={classes.btn}>
                    <AddIcon className={classes.btnIcon} />
                    Add Gift
                </button>
            </Link>
            <article className={classes.list}>
                {gifts.map(gift => <GiftCard
                    key={gift.id}
                    gift={gift}
                    onDelete={() => deleteGift(gift.id)}
                />)}
            </article>
        </>
    )
}

export default AdminList
