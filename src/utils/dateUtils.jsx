export const getMonthName = num => {
    switch (num) {
        case 0:
            return 'января';
        case 1:
            return 'февраля';
        case 2:
            return 'марта';
        case 3:
            return 'апреля';
        case 4:
            return 'мая';
        case 5:
            return 'июня';
        case 6:
            return 'июля';
        case 7:
            return 'августа';
        case 8:
            return 'сентября';
        case 9:
            return 'октября';
        case 10:
            return 'ноября';
        default:
            return 'декабря';
    }
};

export const getWeekName = num => {
    switch (num) {
        case 0:
            return 'понедельник';
        case 1:
            return 'вторник';
        case 2:
            return 'среда';
        case 3:
            return 'четверг';
        case 4:
            return 'пятница';
        case 5:
            return 'суббота';
        case 6:
            return 'воскресенье';
        default:
            return '';
    }
};
