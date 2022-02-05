import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ChatFeed, Message } from 'react-chat-ui'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Chat() {
  const [expanded, setExpanded] = React.useState(false);
  const [message, setMessages] = React.useState({
    messages: [
      new Message({
        id: 1,
        message: "I'm the recipient! (The person you're talking to)",
      }), // Gray bubble
      new Message({ id: 0, message: "I'm you -- the blue bubble!" }), // Blue bubble
      new Message({
        id: 1,
        message: "I'm the recipient! (The person you're talking to)",
      }), // Gray bubble
      new Message({ id: 0, message: "I'm you -- the blue bubble!" }), // Blue bubble
      new Message({
        id: 1,
        message: "I'm the recipient! (The person you're talking to)",
      }), // Gray bubble
      new Message({ id: 0, message: "I'm you -- the blue bubble!" }), // Blue bubble
    ],
    
  })
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{overflowY: "auto"}}>
 <ChatFeed
      messages={message.messages} // Array: list of message objects
      isTyping={false} // Boolean: is the recipient typing
      hasInputField={false} // Boolean: use our input, or use your own
      showSenderName // show the name of the user who sent the message
      bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
      // JSON: Custom bubble styles
      bubbleStyles={
        {
          text: {
            fontSize: 10
          },
          chatbubble: {
            borderRadius: 10,
            padding: 10
          }
        }
      }
    />
    </Card>
  );
}
