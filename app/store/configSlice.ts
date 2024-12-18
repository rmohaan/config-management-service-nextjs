import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConfigState {
    configurations: any[];
}

const initialState: ConfigState = {
    configurations: [],
};

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setConfigurations: (state, action: PayloadAction<any[]>) => {
            state.configurations = action.payload;
        },
    },
});

export const { setConfigurations } = configSlice.actions;
export default configSlice.reducer;
