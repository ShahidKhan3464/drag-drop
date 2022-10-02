import React, { useState } from 'react'
import { MdTimer } from 'react-icons/md'
import './CountDown.css'

const CountDown = ({ targetTaskData: { time, date } }) => {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
    const [isTimeExpired, setIsTimeExpired] = useState(false)
    const sliceHours = time.slice(0, 2)
    const sliceMinutes = time.slice(3, 5)

    const addZero = (i) => {
        if (i < 10) { i = "0" + i }
        return i;
    }

    const startTimer = () => {
        const countDownDate = new Date(date)
        countDownDate.setHours(sliceHours)
        countDownDate.setMinutes(sliceMinutes)
        const now = new Date().getTime()
        const gap = countDownDate - now;

        if (gap < 0) return setIsTimeExpired(true)

        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const day = hour * 24

        const remainingDays = Math.floor(gap / day)
        const remainingHours = addZero(Math.floor((gap % day) / hour))
        const remainingMinutes = addZero(Math.floor((gap % hour) / minute))
        const remainingSeconds = addZero(Math.floor((gap % minute) / second))

        setTimerDays(remainingDays)
        setTimerHours(remainingHours)
        setTimerMinutes(remainingMinutes)
        setTimerSeconds(remainingSeconds)
    }

    setInterval(startTimer, 1000);

    return (
        <div className='CountDown'>
            <div className="countdown-title">
                <div className='text-danger'>Time Remaining</div>
                <MdTimer />
            </div>
            <div className="timer">
                {isTimeExpired
                    ? <h3 className='text-danger'>Time Expired</h3>
                    : <>
                        <h4>{timerDays} :</h4>
                        <h4>{timerHours}</h4>
                        <h4>: {timerMinutes}</h4>
                        <h4>: {timerSeconds}</h4>
                    </>
                }
            </div>
        </div>
    )
}

export default CountDown