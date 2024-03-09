import { User } from "../../types";
import "./style.css";

type UserCardProps = User;

export function UserCard(props: UserCardProps) {
    return (
        <div className="userCard">
            <img className="userPic" src={props.image} />
            <div className="userInfo">
                <div>{`${props.firstName} ${props.lastName}`}</div>
                <div>{props.address.city}</div>
            </div>
        </div>
    );
}
