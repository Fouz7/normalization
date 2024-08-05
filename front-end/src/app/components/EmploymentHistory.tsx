import {Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";

interface Job {
    employer: string;
    position: string;
    from: string;
    to: string;
}

const EmploymentHistory = ({employment}: { employment: Job[] }) => (
    <Stack direction="column" spacing={1} sx={{flexBasis: '50%', pb: 4}}>
        <Typography variant="body1" sx={{pt: 1}}>
            <strong>Employment</strong>
        </Typography>
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell sx={{p: 0}}/>
                    <TableCell width="50" sx={{p: 0}}>
                        <Typography variant="caption">
                            <strong>From</strong>
                        </Typography>
                    </TableCell>
                    <TableCell width="50" sx={{p: 0}}>
                        <Typography variant="caption">
                            <strong>To</strong>
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {employment.map((job, index) => (
                    <TableRow key={index}>
                        <TableCell sx={{p: 0}}>
                            <Typography variant="body2">
                                <strong>{job.employer}</strong>
                            </Typography>
                            <Typography variant="caption">{job.position}</Typography>
                        </TableCell>
                        <TableCell sx={{p: 0}}>
                            <Typography variant="caption">{job.from}</Typography>
                        </TableCell>
                        <TableCell sx={{p: 0}}>
                            <Typography variant="caption">{job.to}</Typography>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Stack>
);

export default EmploymentHistory;