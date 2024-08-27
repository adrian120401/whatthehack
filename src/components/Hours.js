const Hours = () => {

    const openHours = [
        { day: 'Monday', open: '10:00', close: '16:00' },
        { day: 'Tuesday', open: '10:00', close: '16:00' },
        { day: 'Wednesday', open: '10:00', close: '16:00' },
        { day: 'Thursday', open: '10:00', close: '16:00' },
        { day: 'Friday', open: '10:00', close: '16:00' },
        { day: 'Saturday', open: '9:00', close: '20:00' },
        { day: 'Sunday', open: '9:00', close: '20:00' },
    ];

    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    
    const todayHours = openHours.find(day => day.day === today);
    return (
        <div className="hours-container">
            <h2>Today's hours:</h2>
            <p>{todayHours.day}: {todayHours.open} - {todayHours.close}</p>
        </div>
    );
}

export default Hours;
