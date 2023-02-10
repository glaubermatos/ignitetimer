import { createContext, ReactNode, useReducer, useState } from "react"

interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptedDate?: Date
    finishedDate?: Date
}

interface createCycleData {
    task: string;
    minutesAmount: number;
}

interface CyclesContextProps {
    cycles: Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId: string | null
    amountSecondsPassed: number
    markCurrentCycleAsFinished: () => void
    setSecondsPassed: (seconds: number) => void
    createNewCycle: (data: createCycleData) => void
    interruptCurrentCycle: () => void
  }

export const CyclesContext = createContext({} as CyclesContextProps)

interface CyclesContextProviderProps {
    children: ReactNode
}

export function CyclesContextProvider({children}: CyclesContextProviderProps) {
  const [cycles, dispatch] = useReducer((state: Cycle[], action: any) => {
    if (action.type === 'ADD_NEW_CYCLE') {    
      return [...state, action.payload.newCycle]
    }

    return state
  }, [])

  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmoutSecondsPassed] = useState(0)

  let activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  
  function markCurrentCycleAsFinished() {
    dispatch({
      type: 'MARK_CURRENT_CYCLE_AS_FINISHED',
      activeCycleId
    })

    // setCycles((state) => 
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return { ...cycle, finishedDate: new Date() }
    //     } else {
    //         return cycle
    //     }
    //   }),
    // )
  }

  function setSecondsPassed(seconds: number) {
    setAmoutSecondsPassed(seconds)
  }

  function createNewCycle(data: createCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch({
      type: 'ADD_NEW_CYCLE',
      payload: {
        newCycle
      }
    })
    // setCycles((state) => [...state, newCycle])

    setActiveCycleId(id)
    setAmoutSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    setActiveCycleId(null)

    if (activeCycle?.finishedDate) {
      return
    }

    dispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
      payload: {
        activeCycleId
      }
    })

    // no React não  podemos alterar os dados de um estado ferindo os 
    // princípios da imutabilidade
    // setCycles((state) => 
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return { ...cycle, interruptedDate: new Date() }
    //     } else {
    //       return cycle
    //     }
    //   }),
    // )
  }

  return (
    <CyclesContext.Provider value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle
    }}>
        {children}
    </CyclesContext.Provider>
  )
}