import React, { useState } from "react";

const Calculator: React.FC = () => {
  /**
   * State for storing the dog's name.
   */
  const [dogName, setDogName] = useState<string>("");

  /**
   * State for storing the dog's age as a string.
   */
  const [dogAge, setDogAge] = useState<string>("");

  /**
   * State for storing the calculated human age in days.
   */
  const [humanAge, setHumanAge] = useState<number | null>(null);

  /**
   * Handles form submission.
   * Calculates the age in days and updates the days state.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the page from refreshing
    const ageNumber = parseFloat(dogAge); // Converts dogAge to a number
    if (!isNaN(ageNumber)) {
      setHumanAge(16 * Math.log(ageNumber) + 31); // Calculates human age in days if dogAge is a valid number
    } else {
      setHumanAge(null); // Sets humanAge to null if dogAge is not a valid number
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <label htmlFor="dogName">Dog's name</label>
          <input
            type="text"
            id="dog-name"
            placeholder="Enter dogs name here"
            value={dogName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setDogName(event.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="dogAge">Dog's Age</label>
          <input
            className="age-container"
            type="number"
            id="dog-age"
            placeholder="Enter dogs age here"
            value={dogAge !== undefined ? dogAge : ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setDogAge(event.target.value)
            }
          />
        </div>

        <button type="submit">Convert Dog to Human Years</button>
      </form>

      {/* Display the result if human age is calculated */}
      {humanAge !== null && (
        <div>
          <h2>
            {dogName} is {humanAge.toFixed(0)} years old in human years
          </h2>
        </div>
      )}
    </>
  );
};

export default Calculator;
