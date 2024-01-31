import React from 'react';
import { Card, CardContent, Typography, CardHeader, CardMedia } from '@mui/material';

const Post = ({ title, content }) => {
  return (
    <Card variant="outlined">
        <CardHeader
            title = {title}
            titleTypographyProps={{ variant: 'h4' }}
        />
        <CardMedia>
            <img src="https://picsum.photos/200/300" alt="Random" />
        </CardMedia>
      <CardContent>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
