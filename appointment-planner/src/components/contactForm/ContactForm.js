import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={phone}
        pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Add Contact
      </button>
    </form>
  );
};

