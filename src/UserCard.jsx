export function UserCard({ name, amount, isAdult, points, address, alerting }) {
  return (
    <div>
      <h1> {name}</h1>
      <p> ${amount}</p>
      <p> {isAdult ? "Adult" : "Young"} </p>
      <ol>
        <li> {points[0]} </li>
        <li> {points[1]} </li>
        <li> {points[2]} </li>
      </ol>
      <ul>
        <li> City: {address.city} </li>
        <li> Street: {address.street} </li>
      </ul>
    </div>
  );
}
