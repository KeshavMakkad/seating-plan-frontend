import { Link } from "react-router-dom";
import "./../styles/PageNotFound.scss";

const PageNotFound = () => {
    // document.addEventListener("DOMContentLoaded", function () {
    //     var pageX = document.documentElement.clientWidth;
    //     var pageY = document.documentElement.clientHeight;
    //     var mouseY = 0;
    //     var mouseX = 0;

        // document.addEventListener("mousemove", function (event) {
        //     // Vertical Axis
        //     mouseY = event.clientY;
        //     var yAxis = ((pageY / 2 - mouseY) / pageY) * 300;

        //     // Horizontal Axis
        //     mouseX = event.clientX / -pageX;
        //     var xAxis = -mouseX * 100 - 100;

        //     var eyes = document.querySelector(
        //         ".box__ghost-eyes"
        //     ) as HTMLElement;
        //     if (eyes) {
        //         eyes.style.transform =
        //             "translate(" + xAxis + "%, -" + yAxis + "%)";
        //     }
        // });
    // });

    const shineAnimation = `

        body{
            background-color: #28254c
        }

        @keyframes upndown {
            0% {
                transform: translateY(5px);
            }
            50% {
                transform: translateY(15px);
            }
            100% {
                transform: translateY(5px);
            }
        }
        @keyframes smallnbig {
            0% {
                width: 90px;
            }
            50% {
                width: 100px;
            }
            100% {
                width: 90px;
            }
        }
        @keyframes shine {
            0% {
                opacity: 0.2;
            }
            25% {
                opacity: 0.1;
            }
            50% {
                opacity: 0.2;
            }
            100% {
                opacity: 0.2;
            }
        }
`;

    return (
        <>
            <style>{shineAnimation}</style>
            <div className="box w-[350px] h-[100%] max-h-[600px] min-height[450px] bg-[#332f63] rounded-[20px] absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] px-[30px] py-[50px] ">
                <div className="box__ghost pt-[15px] pb-[25px] px-[25px] absolute left-[50%] top-[30%] transform translate-x-[-50%] translate-y-[-30%]">
                    <div className="symbol opacity-[0.2] animate-[shine_4s_ease-in-out_3s_infinite] before:content-[''] before:w-[12px] before:h-[4px] before:bg-white before:absolute before:rounded-[5px] before:bottom-[65px] before:left-0 before:rotate-45 after:content-[''] after:w-[12px] after:h-[4px] after:bg-white after:absolute after:rounded-[5px] after:bottom-[65px] after:left-0 after:-rotate-45"></div>
                    <div className="symbol absolute left-[-5px] top-[30px] h-[18px] w-[18px] border-[4px] rounded-[50%] border-white opacity-[0.2] animate-[shine_4s_ease-in-out_3s_infinite]"></div>
                    <div className="symbol opacity-[0.2] animate-[shine_3s_ease-in-out_0.5s_infinite] before:content-[''] before:w-[12px] before:h-[4px] before:bg-white before:absolute before:rounded-[5px] before:top-[5px] before:left-[40px] before:rotate-90 after:content-[''] after:w-[12px] after:h-[4px] after:bg-white after:absolute after:rounded-[5px] after:top-[5px] after:left-[40px] after:rotate-[180deg]"></div>
                    <div className="symbol opacity-[0.2] animate-[shine_6s_ease-in-out_1.6s_infinite] before:content-[''] before:w-[15px] before:h-[4px] before:bg-white before:absolute before:rounded-[5px] before:top-[10px] before:right-[30px] before:rotate-[45deg] after:content-[''] after:w-[15px] after:h-[4px] after:bg-white after:absolute after:rounded-[5px] after:top-[10px] after:right-[30px] after:rotate-[-45deg]"></div>
                    <div className="symbol absolute right-[5px] top-[40px] h-[12px] w-[12px] border-[3px] rounded-[50%] border-white opacity-[0.2] animate-[shine_1.7s_ease-in-out_7s_infinite]"></div>
                    <div className="symbol opacity-[0.2] animate-[shine_2s_ease-in-out_6s_infinite] before:content-[''] before:w-[15px] before:h-[4px] before:bg-white before:absolute before:rounded-[5px] before:bottom-[65px] before:right-[-5px] before:rotate-[90deg] after:content-[''] after:w-[15px] after:h-[4px] after:bg-white after:absolute after:rounded-[5px] after:bottom-[65px] after:right-[-5px] after:rotate-[180deg]"></div>

                    <div className="box__ghost-container bg-white w-[100px] h-[100px] rounded-t-[100px] relative mx-auto my-0 animate-[upndown_3s_ease-in-out_0.5s_infinite]">
                        <div className="box__ghost-eyes absolute left-[50%] top-[45%] transform translate-x-[-50%] translate-y-[-45%] h-[12px], w-[70px] z-[1000]">
                            <div className="box__eye-left w-[12px] h-[12px] bg-[#332f63] rounded-[50%] mx-[10px] my-0 absolute left-0"></div>
                            <div className="box__eye-right w-[12px] h-[12px] bg-[#332f63] rounded-[50%] mx-[10px] my-0 absolute right-0"></div>
                        </div>
                        <div className="box__ghost-bottom flex absolute top-[100%] left-0 right-0">
                            {[...Array(5)].map((_, index) => (
                                <div
                                    key={index}
                                    className={`flex-grow relative h-[20px] rounded-full  ${
                                        index % 2 !== 0
                                            ? "top-[-12px] border-t-[15px] border-t-[#332f63] bg-transparent"
                                            : "top-[-10px] bg-white"
                                    }`}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="box__ghost-shadow h-[20px] shadow-[0_50px_15px_5px_#3b3769] rounded-[50%] mx-0 my-auto animate-[smallnbig_3s_ease-in-out_infinite] "></div>
                </div>

                <div className="box__description absolute bottom-[30px] left-[50%] transform translate-x-[-50%]">
                    <div className="box__description-container text-white text-center w-[200px] text-[16px] my-0 mx-auto">
                        <div className="box__description-title text-[24px] tracking-[0.5px]">
                            Whoops!
                        </div>
                        <div className="box__description-text leading-[20px] mt-[20px]">
                            It seems like we couldn't find the page you were
                            looking for
                        </div>
                    </div>

                    <Link
                        to="/"
                        className="box__button block relative bg-[#ff5e65] border border-transparent rounded-[50px] height-[50px] text-center no-underline text-white leading-[50px] text-[18px] px-[70px] py-0 whitespace-nowrap mt-[25px] transition-colors duration-500 ease-in-out overflow-hidden [mask-image:-webkit-radial-gradient(white,black)] before:content-[''] before:absolute before:w-[20px] before:h-[100px] before:bg-white before:border-2 before:border-white before:bottom-[-25px] before:left-0 before:rotate-45 before:translate-x-[-50px] before:transition-transform before:duration-500 before:ease-in-out group-hover:before:translate-x-0 hover:bg-transparent hover:border-white hover:before:translate-x-[250px] hover:before:rotate-45"
                    >
                        Go back
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;
