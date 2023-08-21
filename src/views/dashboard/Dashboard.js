import React from 'react';
import {Grid, Box} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

// components
import Unity from './components/UnityContents/Unity';
import YearlyGoal from './components/YearlyGoal';
import Schedule from './components/schedule';
import Contact from './components/Contact';
import WeekendSchedule from './components/WeekendSchedule';
import Kdas from "./components/Kdas";


const Dashboard = () => {
    return (
        <PageContainer title="Dashboard" description="this is Dashboard">
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={8}>
                        <Unity/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <YearlyGoal/>
                            </Grid>
                            <Grid item xs={12}>
                                <WeekendSchedule/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Schedule/>
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Contact/>
                    </Grid>
{/*                    <Grid item xs={12}>
                        {<Blog/>}
                    </Grid>*/}
                </Grid>
            </Box>
        </PageContainer>
    );
};

export default Dashboard;
