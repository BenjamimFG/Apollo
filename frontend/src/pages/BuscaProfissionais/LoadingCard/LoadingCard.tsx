import { Button, Card, Grid, IconButton, Rating, Skeleton } from '@mui/material';
import React from 'react';
import { MainCardArea, ButtonArea, Row, ProfessionalNameArea } from '../ProfessionalCard/styles';
import Favorite from '@mui/icons-material/Favorite';
import Star from '@mui/icons-material/Star';

export const LoadingCard = () => {
  return (
    <Grid item sm={12} md={12}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          padding: '1em',
          textTransform: 'none',
          alignItems: 'flex-end',
          width: '100%',
          cursor: 'pointer',
          userSelect: 'none'
        }}
      >
        <MainCardArea>
          <Row style={{ gap: '1em' }}>
            <Skeleton variant="circular" width={60} height={60} />
            <ProfessionalNameArea>
              <Row>
                <h3 style={{ fontSize: '1.2em', width: '100%', maxWidth: '250px' }}>
                  <Skeleton variant="text" sx={{ fontSize: '1.2em' }} />
                </h3>
                <IconButton sx={{ padding: '0 0.2em' }}>
                  <Favorite htmlColor="#FFE3D8" />
                </IconButton>
              </Row>
              <Row>
                <Rating
                  readOnly
                  value={0}
                  precision={0.5}
                  icon={<Star color="primary" fontSize="inherit" />}
                  emptyIcon={<Star htmlColor="#FFE3D8" fontSize="inherit" />}
                ></Rating>
                <Skeleton
                  variant="text"
                  sx={{ marginLeft: '0.5em', fontSize: '0.8em', width: '50%', maxWidth: '120px' }}
                />
              </Row>
            </ProfessionalNameArea>
          </Row>
          <Row>
            <Skeleton variant="rectangular" height={50} sx={{ width: '100%' }} />
          </Row>
        </MainCardArea>
        <ButtonArea>
          <Button
            component={Button}
            variant="contained"
            disabled
            sx={{ textTransform: 'none', fontSize: '1.2em' }}
          >
            Agendar
          </Button>
        </ButtonArea>
      </Card>
    </Grid>
  );
};
