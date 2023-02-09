import { HandPalm, Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { differenceInSeconds } from 'date-fns'
import { createContext, useEffect, useState } from 'react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { FormProvider } from 'react-hook-form'

/**
 * functionregister(nome: string) {
 *  return {
 *      onChange: () => void,
 *      onBlur: () => void,
 *      onFocus: () => void,
 *  }
 * }
 *
 */

   
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

// interface NewCycleFormData {
//     task: string;
//     minutesAmount: number;
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptdDate?: Date
  finishedDate?: Date
}

interface CyclesContextProps {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  onMarkCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void

}

export const CyclesContext = createContext({} as CyclesContextProps)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setACtiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmoutSecondsPassed] = useState(0)

  // a função useForm funciona como se estivesse criando um novo formulário
    // e o register tem a funcionalidade de registrar os inputs nesse novo formulário
  
    // o retorno da função register que recebe o nome do input, devolve metodos como onChange, onBlur, vários metoos que lib utiliza para monitorar o input. ou seja ela retorna propriedades para o input
   const newCycleForm =
      useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
          task: '',
          minutesAmount: 0,
        },
      })

      const { handleSubmit, watch, formState, reset } = newCycleForm
  
    console.log(formState.errors)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmoutSecondsPassed(seconds)
  }
  
  function markCurrentCycleAsFinished() {
    setCycles((state) => 
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
            return cycle
        }
      }),
    )
  }

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setACtiveCycleId(id)
    setAmoutSecondsPassed(0)

    reset()
  }

  function handleInterruptCycle() {
    // no React não  podemos alterar os dados de um estado ferindo os 
    // princípios da imutabilidade
    setCycles((state) => 
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setACtiveCycleId(null)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  // console.log(cycles)

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        
        <CyclesContext.Provider value={{
          activeCycle,
          activeCycleId,
          onMarkCurrentCycleAsFinished: markCurrentCycleAsFinished,
          amountSecondsPassed,
          setSecondsPassed
        }}>
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
