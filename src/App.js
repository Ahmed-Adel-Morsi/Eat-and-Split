import { useState } from "react";
import FriendsList from "./components/FriendsList";
import SpiltBill from "./components/SpiltBill";
import AddFriend from "./components/AddFriend";
import Button from "./components/Button";

// const initialFriends = [
//   {
//     id: 118836,
//     name: "Ahmed",
//     image: "https://i.pravatar.cc/48?u=115836",
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: "Kareem",
//     image: "https://i.pravatar.cc/48?u=548822",
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: "Osama",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//   },
// ];

function App() {
  const [friends, setFriends] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setIsOpen((o) => !o);
  }

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setIsOpen(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setIsOpen(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {isOpen && <AddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {isOpen ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <SpiltBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
