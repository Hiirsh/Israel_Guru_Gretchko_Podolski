import {ADD_EVENT, REMOVE_EVENT} from '../actions/eventActions';

export const initialState = {
    events: [
        {
            title: 'Тель-Авив. С чего все началось и кто в этои виноват?',
            place: 'Тель-Авив',
            date: '03.09.2022',
            timeStart: '16:00',
            timeEnd: '20:00',
            price: 150,
            freeSpace: 5,
            totalSpace: 30,
            shortDescription:
                'Друзья, приглашаю Вас прогуляться по вечернему Яффо со всеми его мифами и легендами, с царями и богами, крестоносцами и мусульманами, с египтянами, евреями, греками и даже русскими.',
            fullDescription:
                'В субботу 29-го февраля в 10 часов утра, состоится экскурсия «Побазарим» - прогулка по территории рынка Кармель (рынок не работает) и кварталу «Керем Тайманим». Не секрет, что евреи любят покушать. И любят покушать хорошо и обильно. Во многом этому способствует и то, что в Израиле сегодня проживают евреи, приехавшие из более чем ста стран. Это сто различных «кухонь», тысячи рецептов, это сотни различных приправ, добавок, фирменных секретов. И если в нашей стране еще изредка встречается некоторый «внутренний расизм» — по странам рассеивания, то за столом все эти проблемы исчезают. Поэтому не возникает никаких удивлений фаршированная рыба на столе у марроканских евреев или джахнун, блюдо йеменских евреев, поданное на обед в семье польских евреев. Румыны пьют арак, русские — узо, а греки водку. Все вместе пьют вино. Еда и вино объединяет евреев, так же как их Великая Книга. В ближайшую субботу, 29-го февраля, я хочу пригласить вас на экскурсию, которая посвящена еде, базару (ну, а где еще покупают еду), евреям и.. морю. Не обойдется, конечно, и без историй о войне, о политике и о развлечениях. Мы пройдем по субботнему рынку Кармель и по кварталу йеменских евреев Керем Тайманим. Экскурсия редкая, экспериментальная, провожу ее не часто.',
            additionalInfo:
                'Участникам программ Маса и репатриантам до 1 года — 50% скидка',
            difficulty: 'tourist',
            meetingPoint:
                'Часовая башня в Яффо. На перекрестке у фалафельной. На левой стороне от причала в пятницу в 19.00. Будем рады видеть вас и ваших детей (от 4 лет) и собак (от года).',
        },
        {
            title: 'TEST1',
            place: 'TEST1 place',
            date: 'TEST1 date',
            timeStart: 'TEST1 timeStart',
            timeEnd: 'TEST1 timeEnd',
            price: 0,
            freeSpace: 0,
            totalSpace: 0,
            shortDescription: 'TEST1 shortDescription',
            fullDescription: 'TEST1 fullDescription',
            additionalInfo: 'TEST1 additionalInfo',
            difficulty: 'TEST1 difficulty',
            meetingPoint: 'TEST1 meetingPoint',
        },
        {
            title: 'TEST2',
            place: 'TEST2 place',
            date: 'TEST2 date',
            timeStart: 'TEST2 timeStart',
            timeEnd: 'TEST2 timeEnd',
            price: 0,
            freeSpace: 0,
            totalSpace: 0,
            shortDescription: 'TEST2 shortDescription',
            fullDescription: 'TEST2 fullDescription',
            additionalInfo: 'TEST2 additionalInfo',
            difficulty: 'TEST2 difficulty',
            meetingPoint: 'TEST2 meetingPoint',
        },
        {
            title: 'TEST3',
            place: 'TEST3 place',
            date: 'TEST3 date',
            timeStart: 'TEST3 timeStart',
            timeEnd: 'TEST3 timeEnd',
            price: 0,
            freeSpace: 0,
            totalSpace: 0,
            shortDescription: 'TEST3 shortDescription',
            fullDescription: 'TEST3 fullDescription',
            additionalInfo: 'TEST3 additionalInfo',
            difficulty: 'TEST3 difficulty',
            meetingPoint: 'TEST3 meetingPoint',
        },
    ],
};

export const eventsReducer = (events = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return {...events};
        case REMOVE_EVENT:
            return {...events};
        default:
            return events;
    }
};
