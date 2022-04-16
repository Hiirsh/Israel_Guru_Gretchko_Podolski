import {ADD_EVENT, REMOVE_EVENT} from '../actions/eventActions';
import tour1 from '..//..//images/tour1.jpg';

export const initialState = [
    {
        id: 1,
        //image: tour1,
        title: 'Тель-Авив. С чего все началось и кто в этом виноват?',
        place: 'Тель-Авив',
        date: new Date('May 15, 2022 11:00:00'),
        timeStart: new Date('May 15, 2022 11:00:00'),
        timeEnd: new Date('May 15, 2022 11:00:00'),
        price: 150,
        freeSpace: 5,
        totalSpace: 30,
        preview:
            'Друзья, приглашаю Вас прогуляться по вечернему Яффо со всеми его мифами и легендами, с царями и богами, крестоносцами и мусульманами, с египтянами, евреями, греками и даже русскими.',

        description:
            'В субботу 29-го февраля в 10 часов утра, состоится экскурсия «Побазарим» - прогулка по территории рынка Кармель (рынок не работает) и кварталу «Керем Тайманим». Не секрет, что евреи любят покушать. И любят покушать хорошо и обильно. Во многом этому способствует и то, что в Израиле сегодня проживают евреи, приехавшие из более чем ста стран. Это сто различных «кухонь», тысячи рецептов, это сотни различных приправ, добавок, фирменных секретов. И если в нашей стране еще изредка встречается некоторый «внутренний расизм» — по странам рассеивания, то за столом все эти проблемы исчезают. Поэтому не возникает никаких удивлений фаршированная рыба на столе у марроканских евреев или джахнун, блюдо йеменских евреев, поданное на обед в семье польских евреев. Румыны пьют арак, русские — узо, а греки водку. Все вместе пьют вино. Еда и вино объединяет евреев, так же как их Великая Книга. В ближайшую субботу, 29-го февраля, я хочу пригласить вас на экскурсию, которая посвящена еде, базару (ну, а где еще покупают еду), евреям и.. морю. Не обойдется, конечно, и без историй о войне, о политике и о развлечениях. Мы пройдем по субботнему рынку Кармель и по кварталу йеменских евреев Керем Тайманим. Экскурсия редкая, экспериментальная, провожу ее не часто.',
        additionalInfo:
            'Участникам программ Маса и репатриантам до 1 года — 50% скидка',
        difficulty: 'Турист (обзорная)',
        meetingPoint:
            'Часовая башня в Яффо. На перекрестке у фалафельной. На левой стороне от причала в пятницу в 19.00. Будем рады видеть вас и ваших детей (от 4 лет) и собак (от года).',
    },
    {
        id: 2,
        image: tour1,
        title: 'TEST2',
        place: '0',
        date: '1.01.1990',
        timeStart: new Date('May 15, 2022 11:00:00'),
        timeEnd: new Date('May 15, 2022 11:00:00'),
        price: 0,
        freeSpace: 0,
        totalSpace: 0,
        preview: 'TEST2 preview',
        description: 'TEST2 description',
        additionalInfo: 'TEST2 additionalInfo',
        difficulty: 'TEST2 difficulty',
        meetingPoint: 'TEST2 meetingPoint',
    },
    /*  {
        id: 3,
        //img: tour1.jpg,
        title: 'TEST3',
        place: '0',
        date: '1.01.1990',
        timeStart: new Date('May 15, 2022 11:00:00'),
        timeEnd: new Date('May 15, 2022 11:00:00'),
        price: 0,
        freeSpace: 0,
        totalSpace: 0,
        preview: 'TEST3 preview',
        description: 'TEST3 description',
        additionalInfo: 'TEST3 additionalInfo',
        difficulty: 'TEST3 difficulty',
        meetingPoint: 'TEST3 meetingPoint',
    },
    {
        id: 4,
        //img: tour1.jpg,
        title: 'TEST4',
        place: '0',
        date: '1.01.1990',
        timeStart: new Date('May 15, 2022 11:00:00'),
        timeEnd: new Date('May 15, 2022 11:00:00'),
        price: 0,
        freeSpace: 0,
        totalSpace: 0,
        preview: 'TEST4 preview',
        description: 'TEST4 description',
        additionalInfo: 'TEST4 additionalInfo',
        difficulty: 'TEST4 difficulty',
        meetingPoint: 'TEST4 meetingPoint',
    },
    {
        id: 5,
        //img: tour1.jpg,
        title: 'TEST5',
        place: '0',
        date: '1.01.1990',
        timeStart: new Date('May 15, 2022 11:00:00'),
        timeEnd: new Date('May 15, 2022 11:00:00'),
        price: 0,
        freeSpace: 0,
        totalSpace: 0,
        preview: 'TEST5 preview',
        description: 'TEST5 description',
        additionalInfo: 'TEST5 additionalInfo',
        difficulty: 'TEST5 difficulty',
        meetingPoint: 'TEST5 meetingPoint',
    },
    {
        id: 6,
        //img: tour1.jpg,
        title: 'TEST6',
        place: '0',
        date: '1.01.1990',
        timeStart: new Date('May 15, 2022 11:00:00'),
        timeEnd: new Date('May 15, 2022 11:00:00'),
        price: 0,
        freeSpace: 0,
        totalSpace: 0,
        preview: 'TEST6 preview',
        description: 'TEST6 description',
        additionalInfo: 'TEST6 additionalInfo',
        difficulty: 'TEST6 meetingPoint',
    },
    {
        id: 7,
        //img: tour1.jpg,
        title: 'TEST7',
        place: '0',
        date: new Date('May 15, 2022'),
        timeStart: new Date('May 15, 2022 11:00:00'),
        timeEnd: new Date('May 15, 2022 11:00:00'),
        price: 0,
        freeSpace: 0,
        totalSpace: 0,
        preview: 'TEST7 preview',
        description: 'TEST7 description',
        additionalInfo: 'TEST7 additionalInfo',
        difficulty: 'TEST7 difficulty',
        meetingPoint: 'TEST7 meetingPoint',
    }, */
];

export const eventsReducer = (events = /* initialState */ [], action) => {
    switch (action.type) {
        case ADD_EVENT:
            return [...events, action.payload];
        case REMOVE_EVENT:
            return {...events};
        default:
            return events;
    }
};
