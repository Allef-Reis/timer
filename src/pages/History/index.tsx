import { HistoryList, HistoryContainer } from './style'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>task</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>task</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>task</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>task</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>task</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>task</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>task</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td>concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
