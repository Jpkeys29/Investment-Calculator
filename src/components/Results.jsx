import { calculateInvestmentResults } from "../util/investment";

export default function Results({input}) {
    const resultsData = calculateInvestmentResults(input);
    console.log(resultsData)
    return <table>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultsData.map(resultado => {
                return (
                    <tr key={resultado.year}>
                        <td>{resultado.year}</td>
                        <td>{resultado.valueEndOfYear}</td>
                        <td>{resultado.interest}</td>
                        {/* <td>{resultado.}</td>
                        <td>{resultado.}</td> */}
                    </tr>
                ); 
            })}
        </tbody>
    </table>
}