import { useState, useEffect } from 'react';
import { Bowler } from '../types/Bowler';

function TeamList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  const fetchBowlerData = async () => {
    const rsp = await fetch('http://localhost:5132/Bowler');
    const b = await rsp.json();
    setBowlerData(b);
  };

  useEffect(() => {
    fetchBowlerData();
  }, []); // Empty dependency array means it will run only once after the component mounts

  return (
    <>
      <div className="row">
        <h4 className="text-center">The best teams in the League:</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((b) => (
            <tr key={b.bowlerID}>
              <td>
                {b.bowlerLastName}, {b.bowlerFirstName} {b.bowlerMiddleInit}
              </td>
              <td>{/* teamname info */}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TeamList;
