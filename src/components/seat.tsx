import "./seat.css";

interface Seat {
    row: string;
    col: string;
    seatLocation: string;
    email: string;
    isBlocked: boolean;
}

export const viewSeat = (seat: Seat): JSX.Element => {
    return (
        <div className="seat">
            {seat.isBlocked ? "N/A" : seat.email ? seat.email : "10000"}
        </div>
    );
};

export default Seat;
