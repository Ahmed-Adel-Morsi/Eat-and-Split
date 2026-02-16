import { useState } from "react";
import Button from "./Button";

function SpiltBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [yourExpanse, setYourExpanse] = useState("");
  const friendExpanse = bill ? bill - yourExpanse : "";
  const [whoPay, setWhoPay] = useState("you");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !yourExpanse) return;

    onSplitBill(whoPay === "you" ? friendExpanse : -yourExpanse);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍‍♂️ Your expanse</label>
      <input
        type="text"
        value={yourExpanse}
        onChange={(e) =>
          setYourExpanse(
            Number(e.target.value) < bill
              ? Number(e.target.value)
              : yourExpanse,
          )
        }
      />

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expanse:</label>
      <input type="text" value={friendExpanse} disabled />

      <label>🤑 Who is paying the bill?</label>
      <select value={whoPay} onChange={(e) => setWhoPay(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default SpiltBill;
