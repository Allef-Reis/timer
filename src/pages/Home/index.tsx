import { useForm } from 'react-hook-form'

import { Play } from 'phosphor-react'
import {
  StartCountDownButton,
  Separetor,
  CountDownContainer,
  FormContainer,
  HomeContainer,
  TaskInput,
  MinutesAmountInput,
} from './styles'

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task"> Vou trabalhar em </label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Teste 1" />
            <option value="Teste 2" />
            <option value="Teste 3" />
            <option value="Teste 4" />
          </datalist>

          <label htmlFor="minuteAmount"> durante </label>
          <MinutesAmountInput
            type="number"
            id="minuteAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separetor>:</Separetor>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
