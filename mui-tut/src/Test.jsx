import React from 'react';

function Test() {
    return (
        <div>
            <Box>
                <Autocomplete sx={{ width: 300 }}
                    options={state} renderInput={(params) => (
                        <TextField {...params} label="List of States"
                        />
                    )}
                />
            </Box>
        </div>
    )
}

export default Test;