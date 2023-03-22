import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function renderCards() {
  var container = [];
  contacts.forEach(function (contact, index) {
    container.push(
      <Card
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
        key={index}
      />
    );
  });

  return container;
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {renderCards()}
    </div>
  );
}

export default App;
