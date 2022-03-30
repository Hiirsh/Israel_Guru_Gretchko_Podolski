import {guidePhoto} from '../../utils/constants';
import {ADD_GUIDE, REMOVE_GUIDE} from '../actions/guidesReducer';

export const initialState = {
    guides: [
        {
            firstName: 'Святослав',
            lastName: 'Волк',
            email: 'testmail@gmail.com',
            license: '111',
            phone: '12345678',
            photo: guidePhoto,
            aboutGuide:
                'Одессит по рождению и тель-авивец по велению души, он двадцать лет живет в Израиле. Тернистый путь Алии 90-х знает не понаслышке, а опыт своей эмиграции превратил в удачный образовательный «проект». Учился в иешиве, служил в израильской армии. Учился в иешиве, служил в израильской армии. Учился в иешиве, служил в израильской армии. Учился в иешиве, служил в израильской армии. Гид по призванию, Зеев Волк знает Тель-Авив как свои пять пальцев. Его экскурсии это всегда часть драматического действия, где есть захватывающая история , где город – это сцена, а герои мы с вами и люди из прошлого.',
            eventsId: [0, 1, 2],
        },
        {
            firstName: 'GuideFirstName1',
            lastName: 'GuideLastName1',
            email: 'guide1@mail.com',
            license: 'guide1License',
            phone: 'guide1Phone',
            photo: 'guide1Photo',
            aboutGuide: 'guide1about',
            eventsId: [3, 4, 5],
        },
    ],
};

export const guidesReducer = (guides = initialState, action) => {
    switch (action.type) {
        case ADD_GUIDE:
            return {...guides};
        case REMOVE_GUIDE:
            return {...guides};
        default:
            return guides;
    }
};
