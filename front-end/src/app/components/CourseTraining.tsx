import {Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";

interface Certification {
    title: string;
    provider: string;
    date: string;
    duration: string;
    certificate: string;
}

const CourseTraining = ({certification}: { certification: Certification[] }) => (
    <Stack direction="column" spacing={1} sx={{flexBasis: '50%', pb: 4}}>
        <Typography variant="body1" sx={{pt: 1}}>
            <strong>Course, Training</strong>
        </Typography>
        <Table size="small">
            <TableHead>
                <TableRow>
                    {['Title', 'Provider', 'Date', 'Duration', 'Certificate'].map((o) => (
                        <TableCell key={o} sx={{p: 0}}>
                            <Typography variant="caption">
                                <strong>{o}</strong>
                            </Typography>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {certification.map((cert, index) => (
                    <TableRow key={index}>
                        <TableCell sx={{p: 0}}>
                            <Typography variant="caption">{cert.title}</Typography>
                        </TableCell>
                        <TableCell sx={{p: 0}}>
                            <Typography variant="caption">{cert.provider}</Typography>
                        </TableCell>
                        <TableCell sx={{p: 0}}>
                            <Typography variant="caption">{cert.date}</Typography>
                        </TableCell>
                        <TableCell sx={{p: 0}}>
                            <Typography variant="caption">{cert.duration}</Typography>
                        </TableCell>
                        <TableCell sx={{p: 0}}>
                            <Typography variant="caption">{cert.certificate}</Typography>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Stack>
);

export default CourseTraining;