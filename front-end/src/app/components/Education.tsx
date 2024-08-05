import {Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";

interface EducationItem {
    school: string;
    degree: string;
    subject: string;
    from: string;
    to: string;
}

const Education = ({education}: { education: EducationItem[] }) => (
    <Stack direction="column" spacing={1} sx={{flexBasis: '50%', pb: 4}}>
        <Typography variant="body1" sx={{pt: 1}}>
            <strong>Education</strong>
        </Typography>
        <Table size="small">
            <TableHead>
                <TableRow>
                    {['School', 'Degree', 'Subject', 'From', 'To'].map((o) => (
                        <TableCell key={o} sx={{p: 0}}>
                            <Typography variant="caption">
                                <strong>{o}</strong>
                            </Typography>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {education.map((edu, index) => (
                    <TableRow key={index}>
                        <TableCell sx={{p: 0}}>
                            <Typography variant="caption">{edu.school}</Typography>
                        </TableCell>
                        <TableCell sx={{p: 0}}>
                            <Typography variant="caption">{edu.degree}</Typography>
                        </TableCell>
                        <TableCell sx={{p: 0}}>
                            <Typography variant="caption">{edu.subject}</Typography>
                        </TableCell>
                        <TableCell sx={{p: 0}}>
                            <Typography variant="caption">{edu.from}</Typography>
                        </TableCell>
                        <TableCell sx={{p: 0}}>
                            <Typography variant="caption">{edu.to}</Typography>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Stack>
);

export default Education;