import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

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
        .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
        .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

// interface NewCycleFormData {
//     task: string;
//     minutesAmount: number;
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
    // a função useForm funciona como se estivesse criando um novo formulário
    // e o register tem a funcionalidade de registrar os inputs nesse novo formulário

    // o retorno da função register que recebe o nome do input, devolve metodos como onChange, onBlur, vários metoos que lib utiliza para monitorar o input. ou seja ela retorna propriedades para o input
    const { register, handleSubmit, watch, formState } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })

    function handleCreateNewCycle(data: NewCycleFormData) {
        console.log(data)
    }

    console.log(formState.errors)

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} >
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        id="task"
                        type="text"
                        placeholder='Dê um nome para o seu projeto'
                        list='task-suggestions'
                        {...register('task')}
                    />

                    <datalist id="task-suggestions">
                        <option value="Projeto 1" />
                        <option value="Projeto 2" />
                        <option value="Projeto 3" />
                        <option value="Chocolate" />
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder='00'
                        step={5}
                        min={5}
                        // max={60}
                        {...register('minutesAmount', { valueAsNumber: true})}
                    />

                    <span>minutos.</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                    <Play size={24}/>
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}