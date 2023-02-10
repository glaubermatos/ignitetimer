import { HandPalm, Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { FormProvider } from 'react-hook-form'
import { CyclesContext } from '../../contexts/CyclesContexts'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'

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

   
// const newCycleFormValidationSchema = zod.object({
//   task: zod.string().min(1, 'Informe a tarefa'),
//   minutesAmount: zod
//     .number()
//     .min(1, 'O ciclo precisa ser de no mínimo 5 minutos')
//     .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
// })

// // interface NewCycleFormData {
// //     task: string;
// //     minutesAmount: number;
// // }

// type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptdDate?: Date
  finishedDate?: Date
}
   
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

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext)

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

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  // console.log(cycles)

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
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
