import type { PayloadAction } from "@reduxjs/toolkit"

type ReducerFunction<State, Payload> = (state: State, action: PayloadAction<Payload>) => void

/**
 * Creates a reducer case handler with improved type safety and simplified syntax
 * @param handlers Object mapping action types to reducer functions
 */
export function createReducerCases<State>(handlers: {
  [actionType: string]: ReducerFunction<State, any>
}) {
  return (builder: any) => {
    Object.entries(handlers).forEach(([actionType, handler]) => {
      builder.addCase(actionType, handler)
    })
  }
}

/**
 * Creates a reducer case for async thunks with pending, fulfilled, and rejected states
 * @param thunk The async thunk
 * @param handlers Object with pending, fulfilled, and rejected handlers
 */
export function createAsyncThunkCases<State, Returned, ThunkArg = void>(
  thunk: any,
  handlers: {
    pending?: (state: State, action: PayloadAction<undefined, string, { arg: ThunkArg; requestId: string }>) => void
    fulfilled?: (
      state: State,
      action: PayloadAction<Returned, string, { arg: ThunkArg; requestId: string }, never>,
    ) => void
    rejected?: (
      state: State,
      action: PayloadAction<unknown, string, { arg: ThunkArg; requestId: string }, never>,
    ) => void
  },
) {
  return (builder: any) => {
    if (handlers.pending) {
      builder.addCase(thunk.pending, handlers.pending)
    }
    if (handlers.fulfilled) {
      builder.addCase(thunk.fulfilled, handlers.fulfilled)
    }
    if (handlers.rejected) {
      builder.addCase(thunk.rejected, handlers.rejected)
    }
  }
}

