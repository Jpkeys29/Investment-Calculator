import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({input}) {
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
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
                const totalInterest = resultado.valueEndOfYear - resultado.annualInvestment * resultado.year - initialInvestment;
                const totalAmountInvested = resultado.valueEndOfYear - totalInterest;
                return (
                    <tr key={formatter.format(resultado.year)}>
                        <td>{formatter.format(resultado.year)}</td>
                        <td>{formatter.format(resultado.valueEndOfYear)}</td>
                        <td>{formatter.format(resultado.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                ); 
            })}
        </tbody>
    </table>
}