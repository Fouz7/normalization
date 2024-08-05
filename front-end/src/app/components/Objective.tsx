import {Stack, Typography} from "@mui/material";

interface Profile {
    objective: string;
}

const Objective = ({profile}: { profile: Profile }) => (
    <Stack direction="column" spacing={1} sx={{flexBasis: '50%'}}>
        <Typography variant="body1" sx={{pt: 1}}>
            <strong>Objective</strong>
        </Typography>
        <Typography variant="body2">{profile.objective}</Typography>
    </Stack>
);

export default Objective;