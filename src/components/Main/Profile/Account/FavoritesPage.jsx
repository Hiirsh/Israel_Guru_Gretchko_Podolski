import {Button} from '@mui/material';
import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import s from '../../../../componentStyles/MyEventsPage.css';
import {profilePage} from '../../../../utils/constants';
import Favorites from './Favorites';
import {accountPage} from '../../../..//utils/constants';

function FavoritesPage() {
    const {userId} = useParams();
    const navigate = useNavigate();

  return (
<>
    <div className="elements">
                <h2 className="accBut">My favorites</h2>
                <Favorites/>
            </div>{' '}
            <div className="returnBut">
                <Button
                    variant="contained"
                    className="buttonStyle"
                    onClick={() => navigate(`../${accountPage}/${userId}`)}
                >
                    <h2 className="return">Вернуться в аккаунт</h2>
                </Button>
   </div>
   </>
  )
}

export default FavoritesPage