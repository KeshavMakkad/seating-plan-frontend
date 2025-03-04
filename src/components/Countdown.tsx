import React, { ReactElement, useEffect, useMemo, useState } from "react";
import CountdownCard from "./CountdownCard";


interface Countdown {
   days: number;
   hours: number;
   minutes: number;
   seconds: number;
}


interface CurrentPrevious {
   current: Countdown;
   previous: Countdown | null;
}


const getTimeLeft = (endDate: Date): Countdown => {
   const now = new Date();
   const diff = endDate.getTime() - now.getTime();
   const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
   const hours = Math.max(
       0,
       Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
   );
   const minutes = Math.max(
       0,
       Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
   );
   const seconds = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));
   return { days, hours, minutes, seconds };
};


const useCountdown = (endDate: Date): CurrentPrevious => {
   const initial = getTimeLeft(endDate);
   const [{ current, previous }, setCountdown] = useState<CurrentPrevious>({
       current: initial,
       previous: null,
   });


   useEffect(() => {
       const timer = setInterval(() => {
           setCountdown(({ current }) => ({
               previous: current,
               current: getTimeLeft(endDate),
           }));
       }, 1000);
       return () => clearInterval(timer);
   }, [endDate]);


   return { previous, current };
};


const Countdown = ({ initialDate }: { initialDate: string }): ReactElement => {


   const parsedInitialDate = useMemo(() => {
       const dateFromEpoch = new Date(parseInt(initialDate));
       return isNaN(dateFromEpoch.getTime()) ? null : dateFromEpoch;
   }, [initialDate]);


   const defaultTime = useMemo(() => {
       const date = new Date();
       date.setDate(date.getDate() + 1);
       date.setHours(0, 0, 3, 0);
       return date;
   }, []);


   const { current, previous } = useCountdown(
       parsedInitialDate || defaultTime
   );


   return (
       <div className="flex space-x-1 lg:space-x-10">
           <CountdownCard
               id={`days${current.days}-${previous?.days}`}
               label="DAYS"
               key={`days${current.days}-${previous?.days}`}
               current={current.days}
               previous={previous?.days}
           />
           <CountdownCard
               id={`hours${current.hours}-${previous?.hours}`}
               label="HOURS"
               key={`hours${current.hours}-${previous?.hours}`}
               current={current.hours}
               previous={previous?.hours}
           />
           <CountdownCard
               id={`minutes${current.minutes}-${previous?.minutes}`}
               label="MINUTES"
               key={`minutes${current.minutes}-${previous?.minutes}`}
               current={current.minutes}
               previous={previous?.minutes}
           />
           <CountdownCard
               id={`seconds${current.seconds}-${previous?.seconds}`}
               label="SECONDS"
               key={`seconds${current.seconds}-${previous?.seconds}`}
               current={current.seconds}
               previous={previous?.seconds}
           />
       </div>
   );
};


export default Countdown;
