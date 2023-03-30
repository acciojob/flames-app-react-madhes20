import React, { useState } from "react";

function Flames() {
  let flamesArr = [
    "Siblings",
    "Friends",
    "Love",
    "Affection",
    "Marriage",
    "Enemy",
  ];
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [status, setStatus] = useState("");

  function setNameFunction(e) {
    let { name, value } = e.target;
    if (name == "name1") setName1(value);
    else setName2(value);
  }
  function clearFlames() {
    setName1("");
    setName2("");
    setStatus("");
  }
  function calculateRelationship(e) {
    e.preventDefault();
    console.log(name1,name2);
    if (name1 == "" || name2 == "") {
      setStatus("Please Enter Valid Input");
      return;
    }
      let n1 = name1.split("");
    let n2 = name2.split("");
    for (let i = 0; i < n1.length; i++) {
      for (let j = 0; j < n2.length; j++) {
        if (n1[i] == n2[j]) {
          n1.splice(i, 1);
          n2.splice(j, 1);
          i--;
          break;
        }
      }
    }
    let n = n1.length + n2.length;
    setStatus(flamesArr[n % 6]);
    
  }

  return (
    <div className="flamesForm">
      <form>
        <input
          data-testid="input1"
          onChange={(e)=>setNameFunction(e)}
          type="text"
          id="name1"
          name="name1"
          value={name1}
          placeholder="Enter first name"
        />
        <input
        data-testid="input2"
          onChange={(e)=>setNameFunction(e)}
          type="text"
          id="name2"
          name="name2"
          value={name2}
          placeholder="Enter second name"
        />
        <button data-testid="calculate_relationship" onClick={(e)=>calculateRelationship(e)} id="calculateFlames">
          Calculate Relationship future
        </button>
        <button data-testid="clear" onClick={clearFlames}>Clear</button>
      </form>
      <h3 testid="answer">{status}</h3>
    </div>
  );
}

export default Flames;
