const getDateToday = (dateToday, period) => {
    const year = dateToday.getFullYear();
    const month = dateToday.getMonth() + 1;
    const date = dateToday.getDate();
    const currentDate = [
        year.toString(),
        month.toString().padStart(2, '0'),
        date.toString().padStart(2, '0'),
    ].join('-');

    switch (period) {
        case 'dateNow':
            return [currentDate, currentDate];

        case 'three':
            if (date > 2) {
                const dateTStart = date - 2;
                return [
                    [
                        year.toString(),
                        month.toString().padStart(2, '0'),
                        dateTStart.toString().padStart(2, '0'),
                    ].join('-'),
                    currentDate,
                ];
            } else {
                const monthTStart = month - 1;

                if (monthTStart > 0) {
                    const date1 = new Date(year, monthTStart, 1);
                    const date2 = new Date(year, month, 1);
                    const date3 = Math.round(
                        (date2 - date1) / 1000 / 3600 / 24,
                    );
                    const dateTStart = date3 + (date - 2);
                    return [
                        [
                            year.toString(),
                            monthTStart
                                .toString()
                                .padStart(2, '0'),
                            dateTStart.toString(),
                        ].join('-'),
                        [
                            year.toString(),
                            month.toString().padStart(2, '0'),
                            date.toString().padStart(2, '0'),
                        ].join('-'),
                    ];
                } else {
                    const yearTStart = year - 1;
                    const monthTStart = 12;
                    const dateTStart = 31 + (date - 2);
                    return [
                        [
                            yearTStart.toString(),
                            monthTStart.toString(),
                            dateTStart.toString(),
                        ].join('-'),
                        currentDate,
                    ];
                }
            }

        case 'week':
            const dateWStart = new Date(
                dateToday.setDate(
                    dateToday.getDate() -
                        dateToday.getDay() +
                        (dateToday.getDay() === 0 ? -6 : 1),
                ),
            ).getDate();

            if (dateWStart < date) {
                return [
                    [
                        year.toString(),
                        month.toString().padStart(2, '0'),
                        dateWStart.toString().padStart(2, '0'),
                    ].join('-'),
                    currentDate,
                ];
            } else {
                const monthWStart = month - 1;

                if (monthWStart !== 0) {
                    return [
                        [
                            year.toString(),
                            monthWStart
                                .toString()
                                .padStart(2, '0'),
                            dateWStart.toString(),
                        ].join('-'),
                        currentDate,
                    ];
                } else {
                    const yearWStart = year - 1;
                    const monthWStart = 12;
                    return [
                        [
                            yearWStart.toString(),
                            monthWStart.toString(),
                            dateWStart.toString(),
                        ].join('-'),
                        currentDate,
                    ];
                }
            }

        case 'month':
            const dateMStart = 1;
            return [
                [
                    year.toString(),
                    month.toString().padStart(2, '0'),
                    dateMStart.toString().padStart(2, '0'),
                ].join('-'),
                currentDate,
            ];

        case 'year':
            const monthYStart = 1;
            const dateYStart = 1;
            return [
                [
                    year.toString(),
                    monthYStart.toString().padStart(2, '0'),
                    dateYStart.toString().padStart(2, '0'),
                ].join('-'),
                currentDate,
            ];

        default:
            return [currentDate, currentDate];
    }
};
export default getDateToday;
