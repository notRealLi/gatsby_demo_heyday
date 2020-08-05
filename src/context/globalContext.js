import React, { createContext, useReducer, useContext } from "react"

const defaultState = {
  currentTheme: "default",
  cursorStyles: ["pointer", "hover"],
  cursorStyle: false,
  cursorPink: false,
}

const GlobalStateContext = createContext(defaultState)
const GlobalDispatchContext = createContext()

const globalReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_THEME": {
      return {
        ...state,
        currentTheme: action.payload,
      }
    }
    case "SWITCH_CURSOR": {
      return {
        ...state,
        cursorStyle: action.payload,
      }
    }
    case "CURSOR_PINK": {
      return {
        ...state,
        cursorPink: action.payload,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme: window.localStorage.getItem("theme")
      ? window.localStorage.getItem("theme")
      : "default",

    cursorStyles: ["pointer", "hover"],
    cursorStyle: false,
    cursorPink: false,
  })

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}
