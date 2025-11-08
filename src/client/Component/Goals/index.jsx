import { useState } from 'react';

const initialData = [
  { goal: 'Walking Steps', currentUnit: '8000', unit: '3000', max: '' },
  { goal: 'Calories Intake', currentUnit: '1800', unit: '2000', max: '' },
  { goal: 'Exercise Duration', currentUnit: '20', unit: '45', max: '' },
  {
    goal:'Sleep',currentUnit:'8',unit:'4'
  }
];

const GoalProgressForm = ({data}) => {
  const [sleepRating, setSleepRating] = useState(0);
  const [goals, setGoals] = useState(initialData);

  // handle star click
  const handleStarClick = (value) => setSleepRating(value);

  // handle input change for max values
  const handleInputChange = (index, value) => {
    const updatedGoals = [...goals];
    updatedGoals[index].max = value;
    setGoals(updatedGoals);
  };

  // handle full form submission
  const handleGoal = (e) => {
    e.preventDefault();
    console.log("Submitted Data:");
    console.log({
      date: e.target.date.value,
      sleepRating,
      goals,
    });
    alert("Goal data submitted! Check console for details.");
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Goal Progress</h3>
      <form onSubmit={handleGoal}>
        <table className="table table-bordered align-middle">
          <tbody>
            {/* Date Row */}
            <tr>
              <th style={{ width: "30%" }}>Date</th>
              <td>
                <input type="date" name="date" className="form-control" required />
              </td>
            </tr>

            {/* Sleep Row */}
            <tr>
              <th>Stress Level</th>
              <td>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      cursor: 'pointer',
                      color: star <= sleepRating ? 'gold' : 'lightgray',
                      fontSize: '32px',
                      marginRight: '8px',
                      transition: 'transform 0.2s ease',
                    }}
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                  >
                    ★
                  </span>
                ))}
              </td>
            </tr>

            {/* Goals Table */}
            <tr>
              <th>Goals</th>
              <td>
                <table className="table mb-0">
                  <thead className="table-light text-center">
                    <tr>
                      <th style={{ width: "35%" }}>Goal</th>
                      <th>Min</th>
                      <th>Max</th>
                    </tr>
                  </thead>
                  <tbody>
                    {goals.map((item, index) => (
                      <tr key={index} className="text-center">
                        <td>{item.goal}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={item.unit}
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter max value"
                            value={item.max}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            required
                          />
                        </td>
                      </tr>
                    ))}
                    {/* Submit inside table */}
                    <tr style={{width:"100%"}}>
                      <td colSpan="3" className="text-center">
                        <button type="submit" className="btn btn-primary mt-2" style={{ width: "100%" }}>
                          Submit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default GoalProgressForm;
