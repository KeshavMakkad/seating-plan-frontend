import Countdown from "../components/Countdown";


const CountdownPage = (initialDate: any) => {
   return (
       <div className="relative flex flex-col items-center justify-center bg-theme_veryDarkMostlyBlackBlue min-h-screen bg-stars">
           <h1 className="text-white text-xl lg:text-2xl text-center tracking-widest pt-20 lg:pt-0 pb-32">
               WE&rsquo;RE LAUNCHING SOON
           </h1>


           <div className="pb-48">
               <Countdown initialDate={initialDate} />
           </div>


           <div className="absolute bottom-0 bg-hills left-0 right-0 h-44 bg-no-repeat bg-cover bg-x-82"></div>


           <div className="absolute bottom-10 lg:bottom-16 right-0 left-0">
               <div className="flex">
                   <div className="flex flex-row text-center justify-items-center space-x-8 ml-auto mr-auto">
                   </div>
               </div>
           </div>
       </div>
   );
};


export default CountdownPage;