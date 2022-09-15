import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FavoriteBorder, ChatBubbleOutline, SavingsOutlined } from '@mui/icons-material';
import { useSign } from '../../hooks/useSign';
import { Vote } from '../vote'
import { useVote } from '../../hooks/useVote';

export const PostStatics = (props) => {
  const { votes, amount, comments, permlink } = props;
  const { userName } = useSign()
  const { handleVote } = useVote()

  const styleText = {
    alignItems: 'center',
    display: 'flex'
  }

  const styleIcon = {
    fontSize: '24px',
    mr: '5px'
  }

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      spacing={2}
    >
      {
        userName ? (
          <div onClick={e => { handleVote({ permlink: permlink }) }}>
            <Vote votes={votes} styleText={styleText} styleIcon={styleIcon} />
          </div>
        ) : (
          <Vote votes={votes} styleText={styleText} styleIcon={styleIcon} />
        )
      }

      <Typography sx={styleText}><ChatBubbleOutline sx={styleIcon} />{comments}</Typography>
      <Typography sx={styleText}><SavingsOutlined sx={styleIcon} />${amount}</Typography>
    </Stack>
  )
}
