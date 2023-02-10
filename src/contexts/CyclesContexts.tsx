import { createContext, ReactNode, useState } from "react"

interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptdDate?: Date
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
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmoutSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  
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

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmoutSecondsPassed(0)

    // reset()
  }

  function interruptCurrentCycle() {
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

    setActiveCycleId(null)
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