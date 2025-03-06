
import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";


const CountdownPage = ({initialDate}: {initialDate: string}) => {
   return (
       <div className="relative flex flex-col items-center justify-center bg-theme_veryDarkMostlyBlackBlue min-h-screen bg-stars w-[100%]">
           <h1 className="text-white text-xl lg:text-2xl text-center tracking-widest pt-20 lg:pt-0 pb-32">
               THIS SEATING PLAN WILL BE VISIBLE IN
           </h1>


           <div className="pb-48">
               <Countdown initialDate={initialDate} />
           </div>


           <div className="absolute bottom-0 bg-hills left-0 right-0 h-44 bg-no-repeat bg-cover bg-x-82"></div>


           <div className="absolute bottom-10 lg:bottom-16 right-0 left-0">
               <div className="flex">
                   <div className="flex flex-row text-center justify-items-center space-x-8 ml-auto mr-auto">

                   <Link
                        to="/"
                        className="box__button block relative bg-[var(--color-soft-red)] border border-transparent rounded-[50px] height-[50px] text-center no-underline text-white leading-[50px] text-[18px] px-[70px] py-0 whitespace-nowrap mt-[25px] transition-colors duration-500 ease-in-out overflow-hidden [mask-image:-webkit-radial-gradient(white,black)] before:content-[''] before:absolute before:w-[20px] before:h-[100px] before:bg-white before:border-2 before:border-white before:bottom-[-25px] before:left-0 before:rotate-45 before:translate-x-[-50px] before:transition-transform before:duration-500 before:ease-in-out group-hover:before:translate-x-0 hover:bg-transparent hover:border-white hover:before:translate-x-[250px] hover:before:rotate-45"
                    >
                        Go back
                    </Link> 

                   </div>
               </div>
           </div>
       </div>
   );
};


export default CountdownPage;