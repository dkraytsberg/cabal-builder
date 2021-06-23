import { DemonData } from "../types/DemonTypes";

interface StatsTableProps {
  demon: DemonData;
}
const StatsTable: React.FC<StatsTableProps> = ({
  demon: { move, life, combat, cost, canFly },
}) => (
  <section className="StatsTable">
    <table>
      <tbody>
        <tr>
          <th>M </th>
          <td>
            {move}
            {canFly ? <span className="fly-tag"> Fly</span> : null}
          </td>
          <th>L </th>
          <td>{life}</td>
          <th>C </th>
          <td>{combat}</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default StatsTable;
