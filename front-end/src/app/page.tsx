import {Box, Divider, Stack, Typography} from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeInfo from './components/EmployeeInfo';
import EmploymentHistory from './components/EmploymentHistory';
import Objective from './components/Objective';
import PersonalDetails from './components/PersonalDetail';
import CourseTraining from './components/CourseTraining';
import Education from './components/Education';
import Projects from './components/Projects';
import DATA from './Data';

const Page = () => {
    return (
        <>
            <Header/>
            <Box className="page-footer">
                <Footer/>
            </Box>

            <Box component="table" sx={{width: '100%'}}>
                <Box component="thead">
                    <Box component="tr">
                        <Box component="td">
                            <Box className="page-header-space"/>
                        </Box>
                    </Box>
                </Box>

                <Box component="tbody">
                    <Box component="tr">
                        <Box
                            component="td"
                            sx={{
                                py: 2,
                                px: 6,
                            }}
                        >
                            <Stack direction="column" spacing={1} alignItems="stretch">
                                <EmployeeInfo employee={DATA.employee}/>
                                <Stack direction="row" spacing={1} justifyContent="stretch">
                                    <EmploymentHistory employment={DATA.histories.employment}/>
                                    <Divider orientation="vertical" flexItem/>
                                    <Stack direction="column" spacing={0} sx={{flexBasis: '50%', p: 0, m: 0}}>
                                        <Objective profile={{objective: DATA.employee.biodata.profile}}/>
                                        <PersonalDetails biodata={DATA.employee.biodata}/>
                                    </Stack>
                                </Stack>
                                <Divider flexItem/>
                                <Stack direction="row" spacing={1} justifyContent="stretch"
                                       sx={{pb: 2, pageBreakAfter: 'always'}}>
                                    <CourseTraining certification={DATA.histories.certification}/>
                                    <Divider orientation="vertical" flexItem/>
                                    <Education education={DATA.histories.education}/>
                                </Stack>
                                <Projects project={DATA.histories.project}/>
                                <Typography variant="caption" color="GrayText" sx={{pt: 4, alignSelf: 'center'}}>
                                    PT Padepokan Tujuh Sembilan
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Box>

                <Box component="tfoot">
                    <Box component="tr">
                        <Box component="td">
                            <Box className="page-footer-space"/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Page;