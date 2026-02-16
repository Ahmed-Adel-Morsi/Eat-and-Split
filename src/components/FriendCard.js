import Button from "./Button";

function FriendCard({ friend, selectedFriend, onSelection }) {
  const selected = selectedFriend?.id === friend.id;

  return (
    <li className={selected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />

      <h3>{friend.name}</h3>
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      {friend.balance < 0 && (
        <p className="red">
          You Owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}€
        </p>
      )}
      <Button onClick={() => onSelection(friend)}>
        {selected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default FriendCard;
